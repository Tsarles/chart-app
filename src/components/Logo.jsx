/**
 * CHART logo with per-letter emotion colors.
 *
 * C — Blue     (Collection / memories)
 * H — Black    (Hidden / gravity)
 * A — Red      (Affections / love)
 * R — Purple   (Regrets / sorrow)
 * T — Teal     (Thoughts / calm)
 *
 * Sizes: 'large' | 'medium' | 'small'
 */
export function Logo({ size = 'large' }) {
  const sizeMap = {
    large:  { title: 'text-6xl md:text-7xl lg:text-8xl', subtitle: 'text-lg md:text-xl' },
    medium: { title: 'text-4xl md:text-5xl',              subtitle: 'text-sm md:text-base' },
    small:  { title: 'text-2xl md:text-3xl',              subtitle: 'text-xs md:text-sm' },
  };

  const { title: titleClass, subtitle: subtitleClass } = sizeMap[size] ?? sizeMap.large;

  const letters = [
    { char: 'C', color: 'var(--color-letter-c)', title: 'Collection' },
    { char: 'H', color: 'var(--color-letter-h)', title: 'Hidden' },
    { char: 'A', color: 'var(--color-letter-a)', title: 'Affections' },
    { char: 'R', color: 'var(--color-letter-r)', title: 'Regrets' },
    { char: 'T', color: 'var(--color-letter-t)', title: 'Thoughts' },
  ];

  return (
    <div className="text-center" style={{ display: 'inline-block' }}>
      <h1 className={`${titleClass} tracking-wide`} aria-label="CHART">
        {letters.map(({ char, color, title }) => (
          <span
            key={char}
            title={title}
            style={{
              color,
              display: 'inline-block',
              transition: 'transform 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; }}
          >
            {char}
          </span>
        ))}
      </h1>
      <p
        className={`${subtitleClass} mt-1 leading-relaxed`}
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {/* Key words colored per their CHART emotion */}
        <span style={{ color: 'var(--color-letter-c)' }}>Collection</span>
        {' of '}
        <span style={{ color: 'var(--color-letter-h)' }}>Hidden</span>
        {' '}
        <span style={{ color: 'var(--color-letter-a)' }}>Affections</span>
        {', '}
        <span style={{ color: 'var(--color-letter-r)' }}>Regrets</span>
        {' & '}
        <span style={{ color: 'var(--color-letter-t)' }}>Thoughts</span>
      </p>
    </div>
  );
}
