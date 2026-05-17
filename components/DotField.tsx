'use client'
import { useEffect, useRef, memo } from 'react';
import './DotField.css';

const TWO_PI = Math.PI * 2;

interface Dot {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  x: number;
  y: number;
}

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  [key: string]: unknown;
}

const DotField = memo(({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = 'rgba(168, 85, 247, 0.35)',
  gradientTo = 'rgba(180, 151, 207, 0.25)',
  glowColor = '#120F17',
  ...rest
}: DotFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const propsRef = useRef<Record<string, unknown>>({});
  propsRef.current = { dotRadius, dotSpacing, sparkle, waveAmplitude, gradientFrom, gradientTo };

  // --- Pause/resume state ---
  const isVisibleRef = useRef(true);   // IntersectionObserver: canvas in viewport?
  const isTabActiveRef = useRef(true); // document.visibilityState

  // Cached gradient — only recreated when canvas size or colors change
  const gradientRef = useRef<CanvasGradient | null>(null);
  const gradientKeyRef = useRef('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let resizeTimer: ReturnType<typeof setTimeout>;
    let frameCount = 0;

    // ── Helpers ──────────────────────────────────────────────────────────────

    function getOrCreateGradient(w: number, h: number, from: string, to: string): CanvasGradient {
      const key = `${w}|${h}|${from}|${to}`;
      if (gradientKeyRef.current !== key || !gradientRef.current) {
        const g = ctx!.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, from);
        g.addColorStop(1, to);
        gradientRef.current = g;
        gradientKeyRef.current = key;
      }
      return gradientRef.current!;
    }

    function buildDots(w: number, h: number) {
      const p = propsRef.current;
      const step = (p.dotRadius as number) + (p.dotSpacing as number);
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots: Dot[] = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots[idx++] = { ax, ay, sx: ax, sy: ay, x: ax, y: ay };
        }
      }
      dotsRef.current = dots;
      // Invalidate gradient cache when dot layout changes (implies resize)
      gradientRef.current = null;
      gradientKeyRef.current = '';
    }

    function doResize() {
      const rect = container!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w, h };
      buildDots(w, h);
    }

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 150);
    }

    // ── Render loop ───────────────────────────────────────────────────────────

    function tick() {
      // ✅ KEY FIX: skip rendering when off-screen or tab is hidden
      if (!isVisibleRef.current || !isTabActiveRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      frameCount++;
      const dots = dotsRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const len = dots.length;
      const t = frameCount * 0.02;

      ctx!.clearRect(0, 0, w, h);

      // ✅ Use cached gradient — no allocation every frame
      ctx!.fillStyle = getOrCreateGradient(
        w, h,
        p.gradientFrom as string,
        p.gradientTo as string
      );

      const rad = (p.dotRadius as number) / 2;
      const doSparkle = p.sparkle as boolean;
      const doWave = (p.waveAmplitude as number) > 0;
      const wAmp = p.waveAmplitude as number;

      // ✅ Single path for all dots — minimal state changes
      ctx!.beginPath();

      for (let i = 0; i < len; i++) {
        const d = dots[i];

        // Spring return to anchor
        d.sx += (d.ax - d.sx) * 0.1;
        d.sy += (d.ay - d.sy) * 0.1;

        let drawX = d.sx;
        let drawY = d.sy;

        if (doWave) {
          drawY += Math.sin(d.ax * 0.03 + t) * wAmp;
          drawX += Math.cos(d.ay * 0.03 + t * 0.7) * wAmp * 0.5;
        }

        let r = rad;
        if (doSparkle) {
          const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0;
          if ((hash % 100) < 3) r = rad * 1.8;
        }

        ctx!.moveTo(drawX + r, drawY);
        ctx!.arc(drawX, drawY, r, 0, TWO_PI);
      }

      ctx!.fill();

      rafRef.current = requestAnimationFrame(tick);
    }

    // ── Lifecycle: observers ──────────────────────────────────────────────────

    // Pause when canvas leaves viewport (main fix for scroll-up lag)
    const io = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(canvas);

    // Pause when tab is hidden
    function onVisibilityChange() {
      isTabActiveRef.current = document.visibilityState === 'visible';
    }
    document.addEventListener('visibilitychange', onVisibilityChange);

    // ── Init ──────────────────────────────────────────────────────────────────

    doResize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { w, h } = sizeRef.current;
    if (w > 0 && h > 0) {
      const p = propsRef.current;
      const step = (p.dotRadius as number) + (p.dotSpacing as number);
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots: Dot[] = new Array(rows * cols);
      let idx = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots[idx++] = { ax, ay, sx: ax, sy: ay, x: ax, y: ay };
        }
      }
      dotsRef.current = dots;
    }
  }, [dotRadius, dotSpacing]);

  return (
    <div ref={containerRef} className="dot-field-container" {...rest}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          userSelect: 'none',
          // ✅ GPU compositing hint — avoids layout recalc on scroll
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
});

DotField.displayName = 'DotField';
export default DotField;
