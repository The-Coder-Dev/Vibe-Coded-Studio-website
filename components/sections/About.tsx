"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Sentence
───────────────────────────────────────────── */

const SENTENCE =
  "At Ojas, we help companies build stronger brands, better products, and websites that actually perform.";

const WORDS = SENTENCE.split(" ");

/* ─────────────────────────────────────────────
   Create smooth overlapping ranges
───────────────────────────────────────────── */

function buildRanges(words: string[]) {
  const amount = words.length;

  return words.map((_, i) => {
    const start = i / amount;
    const end = start + 0.22; // overlap duration

    return {
      start,
      end,
    };
  });
}

const ranges = buildRanges(WORDS);

/* ─────────────────────────────────────────────
   Animated Word
───────────────────────────────────────────── */

function AnimatedWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: {
    start: number;
    end: number;
  };
}) {
  const opacity = useTransform(
    progress,
    [range.start, range.end],
    [0, 1]
  );

  return (
    <span className="relative inline-block mr-[0.25em]">
      {/* Base faded word */}
      <span className="absolute opacity-10">{word}</span>

      {/* Animated word */}
      <motion.span
        style={{ opacity }}
        className="relative will-change-[opacity]"
      >
        {word}
      </motion.span>
    </span>
  );
}

/* ─────────────────────────────────────────────
   About Section
───────────────────────────────────────────── */

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);////

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const buttonOpacity = useTransform(
    scrollYProgress,
    [0.85, 1],
    [0, 1]
  );

  const buttonY = useTransform(
    scrollYProgress,
    [0.85, 1],
    [20, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-foreground px-6 sm:px-10 lg:px-16">
        
        <Image
          src="/footer.webp"
          alt="Footer background"
          fill
          priority
          className="pointer-events-none select-none object-cover object-center opacity-5"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10">
          
          {/* Heading */}
          <h2 className="max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl lg:text-4xl">
            {WORDS.map((word, i) => (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                range={ranges[i]}
              />
            ))}
          </h2>

          {/* CTA */}
          <motion.div
            style={{
              opacity: buttonOpacity,
              y: buttonY,
            }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 border-b border-background pb-0.5 text-sm font-medium text-background transition-opacity hover:opacity-60"
            >
              Browse our services
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;