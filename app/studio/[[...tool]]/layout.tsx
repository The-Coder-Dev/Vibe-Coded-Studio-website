/**
 * Studio-specific nested layout.
 * Isolates the Sanity Studio from any global body/html styles that
 * could interfere with its full-page rendering (height, overflow, fonts, etc.)
 */
export default function StudioRouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        // Reset any site-wide font/color that globals.css may inject
        fontFamily: 'inherit',
        background: 'transparent',
      }}
    >
      {children}
    </div>
  )
}
