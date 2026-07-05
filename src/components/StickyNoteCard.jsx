import { useNavigate } from 'react-router-dom';
import { EmotionBadge } from './EmotionBadge';

/** Slight rotation per card index for a natural scattered look */
const ROTATIONS = [-2, 1, -1.5, 2, -0.5, 1.5, -2.5, 0.5];

/**
 * StickyNoteCard — a single sticky note in the home feed.
 *
 * @param {object} note  - Note data object from mockNotes
 * @param {number} index - Card index (used for rotation tilt)
 */
export function StickyNoteCard({ note, index = 0 }) {
  const navigate = useNavigate();
  const rotation = ROTATIONS[index % ROTATIONS.length];
  const colorClass = `sticky-note-${note.color || 'yellow'}`;

  return (
    <article
      className={`sticky-note ${colorClass}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={() => navigate(`/note/${note.id}`)}
      role="button"
      tabIndex={0}
      aria-label={`Note: ${note.word}`}
      onKeyDown={e => e.key === 'Enter' && navigate(`/note/${note.id}`)}
    >
      {/* Top label strip (recipient) */}
      <div
        style={{
          paddingTop: '0.75rem',
          paddingBottom: '0.5rem',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-text-secondary)',
        }}
      >
        to: {note.recipient}
      </div>

      {/* Word / headline */}
      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: '1.5',
          color: 'var(--color-text-primary)',
          marginTop: '0.5rem',
          marginBottom: '1rem',
          minHeight: '3.5rem',
        }}
      >
        {note.word}
      </p>

      {/* Footer: emotion badge + date */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 'auto',
        }}
      >
        <EmotionBadge emotion={note.emotion} />
        <span style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>
          {note.createdAt}
        </span>
      </div>
    </article>
  );
}
