/**
 * NotebookDecorations — purely decorative SVG/CSS elements.
 * Masking tape, paper clips, coffee stain, tiny stars, pencil doodle, folded corner.
 * Rendered as absolute-positioned overlays. Parent must have position: relative.
 */
export function NotebookDecorations() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>

      {/* Masking tape — top left area */}
      <div className="deco-masking-tape" style={{ top: '12%', left: '8%', transform: 'rotate(-8deg)' }} />

      {/* Paper clip — right side */}
      <div className="deco-paper-clip" style={{ top: '18%', right: '12%', transform: 'rotate(15deg)' }} />

      {/* Coffee stain ring — bottom left */}
      <div className="deco-coffee-stain" style={{ bottom: '15%', left: '6%' }} />

      {/* Tiny stars scattered */}
      <span className="deco-star" style={{ top: '8%', right: '28%' }}>✦</span>
      <span className="deco-star" style={{ top: '35%', left: '15%', fontSize: '0.5rem' }}>✧</span>
      <span className="deco-star" style={{ bottom: '25%', right: '18%', fontSize: '0.45rem' }}>✦</span>
      <span className="deco-star" style={{ top: '60%', left: '5%', fontSize: '0.55rem' }}>✧</span>

      {/* Pencil doodle line */}
      <div className="deco-pencil-line" style={{ top: '72%', left: '10%', width: '60px' }} />
      <div className="deco-pencil-line" style={{ top: '28%', right: '8%', width: '40px', transform: 'rotate(3deg)' }} />

      {/* Folded corner — bottom right */}
      <div className="deco-folded-corner" />

      {/* Small masking tape — bottom area */}
      <div
        className="deco-masking-tape"
        style={{ bottom: '8%', right: '10%', width: '55px', height: '18px', transform: 'rotate(4deg)', opacity: 0.4 }}
      />
    </div>
  );
}
