import { useParams, useNavigate } from 'react-router-dom';
import { mockNotes } from '../data/mockNotes';
import { EmotionBadge } from '../components/EmotionBadge';

/**
 * ReadNotePage — v0.3.
 * Old-paper background, bookmark ribbon, folded corner.
 * Full immersive notebook reading experience.
 */
export function ReadNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = mockNotes.find(n => n.id === id);

  if (!note) {
    return (
      <div className="placeholder-page">
        <p style={{ color: 'var(--color-text-secondary)' }}>Note not found.</p>
        <button onClick={() => navigate('/home')} className="btn btn-outline mt-4">
          ← Back to notes
        </button>
      </div>
    );
  }

  return (
    <div
      className="bg-old-paper animate-fade-slide-up"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '3rem 1.5rem 8rem',
      }}
    >
      <article
        className="notebook-page"
        style={{ width: '100%', maxWidth: '640px', position: 'relative' }}
      >
        {/* Bookmark ribbon */}
        <div className="bookmark-ribbon" />

        {/* Folded corner */}
        <div className="folded-corner" />

        {/* Back link */}
        <button
          onClick={() => navigate('/home')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--color-text-secondary)', fontSize: '0.875rem',
            fontFamily: 'var(--font-family-hand)', padding: '0',
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center',
            gap: '0.4rem', transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
        >
          <i className="bx bx-arrow-back" />
          Back
        </button>

        {/* Meta: emotion + recipient */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <EmotionBadge emotion={note.emotion} />
          <span style={{
            fontSize: '0.75rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--color-text-secondary)',
          }}>
            to: {note.recipient}
          </span>
        </div>

        {/* Word / headline */}
        <h1 style={{ fontSize: '2rem', lineHeight: '1.4', color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
          {note.word}
        </h1>

        {/* Divider */}
        <div style={{ width: '3rem', height: '2px', backgroundColor: 'var(--color-grid)', marginBottom: '1.5rem' }} />

        {/* Story */}
        <p style={{ fontSize: '1rem', lineHeight: '2', color: 'var(--color-text-primary)', whiteSpace: 'pre-wrap' }}>
          {note.story}
        </p>

        {/* Footer */}
        <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--color-text-secondary)', textAlign: 'right', fontStyle: 'italic' }}>
          {note.createdAt}
        </p>
      </article>
    </div>
  );
}
