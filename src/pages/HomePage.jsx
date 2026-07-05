import { mockNotes } from '../data/mockNotes';
import { StickyNoteCard } from '../components/StickyNoteCard';
import { Logo } from '../components/Logo';
import { PinnedPaper } from '../components/PinnedPaper';

/**
 * Home feed — v0.3.
 * Desk-themed background, CHART logo, Creator's Note, sticky note grid.
 * Route: /home (protected)
 */
export function HomePage() {
  return (
    <div className="bg-desk" style={{ minHeight: '100vh', paddingBottom: '7rem' }}>

      {/* ─── Header with CHART Logo ─── */}
      <header style={{ padding: '2.5rem 1.5rem 1.5rem', textAlign: 'center' }}>
        <Logo size="medium" />
      </header>

      {/* ─── Creator's Note ─── */}
      <section
        style={{ padding: '0 1.5rem 2rem', maxWidth: '960px', margin: '0 auto' }}
        className="animate-fade-slide-up"
      >
        <PinnedPaper variant="creator" title="Creator's Note">
          <p>
            Welcome to CHART — a quiet place for the words you never said.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            This space will be used for announcements, updates, and thoughts from the creator.
            For now, thank you for being here. Write something true.
          </p>
        </PinnedPaper>
      </section>

      {/* ─── Newest Notes ─── */}
      <main style={{ padding: '0 1.5rem 2rem', maxWidth: '960px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '1.25rem',
          }}
        >
          Newest Notes
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {mockNotes.map((note, i) => (
            <StickyNoteCard key={note.id} note={note} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
