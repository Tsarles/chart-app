import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const ABOUT_NOTES = [
  {
    id: 'what',
    title: 'What is CHART?',
    color: 'color-yellow',
    teaser: 'A quiet archive of handwritten emotions.',
    body: 'CHART stands for Collection of Hidden Affections, Regrets & Thoughts. It is a space where people can preserve the words they never said — to someone they loved, someone they lost, or someone they never got the chance to tell. CHART is not social media. It is a personal journal, shared with kindness.',
  },
  {
    id: 'mission',
    title: 'Mission',
    color: 'color-lime',
    teaser: 'Preserve the words left unsaid.',
    body: 'Our mission is simple: to give unspoken words a home. Every feeling deserves to be acknowledged. Every story deserves a place. CHART exists so that no honest emotion has to stay buried forever. We believe vulnerability is strength, and writing is healing.',
  },
  {
    id: 'vision',
    title: 'Vision',
    color: 'color-blue',
    teaser: 'A world where honesty feels safe.',
    body: 'We envision a world where people feel safe to be honest about their feelings — without judgment, without performance, without algorithms. CHART aims to be the quietest, most meaningful corner of the internet. A notebook, not a stage.',
  },
  {
    id: 'why',
    title: 'Why I Built CHART',
    color: 'color-pink',
    teaser: 'Because some words deserve more than silence.',
    body: 'CHART began as a personal thought: what happens to the words we never say? The "I love you" behind a closed door. The "I\'m sorry" that never reached the right ears. The "thank you" that felt too late. These words don\'t disappear. They settle inside us. CHART was built to give them somewhere to go.',
  },
  {
    id: 'future',
    title: 'Future Goals',
    color: 'color-green',
    teaser: 'Growing slowly, with care.',
    body: 'CHART is still being written — much like the notes inside it. Future versions will introduce anonymous sharing, the ability to respond with kindness, user profiles, and a quiet community built around empathy. We will grow slowly, intentionally, and always with care.',
  },
];

/**
 * About Page — v0.3.
 * Multiple expandable sticky notes instead of one long page.
 */
export function AboutPage() {
  const [expanded, setExpanded] = useState({});

  function toggle(id) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div
      style={{ minHeight: '100vh', padding: '3rem 1.5rem 5rem', maxWidth: '800px', margin: '0 auto' }}
      className="animate-fade-slide-up"
    >
      {/* Back link */}
      <Link
        to="/"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.875rem', color: 'var(--color-text-secondary)',
          marginBottom: '2rem', textDecoration: 'none',
        }}
      >
        <i className="bx bx-arrow-back" />
        Back to home
      </Link>

      {/* CHART Logo */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <Logo size="large" />
      </div>

      <p
        style={{
          textAlign: 'center', fontSize: '0.9rem', fontStyle: 'italic',
          color: 'var(--color-text-secondary)', marginBottom: '2rem',
        }}
      >
        Click a note to read more.
      </p>

      {/* Sticky notes grid */}
      <div className="about-sticky-grid">
        {ABOUT_NOTES.map(note => (
          <div
            key={note.id}
            className={`about-sticky ${note.color}`}
            onClick={() => toggle(note.id)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggle(note.id)}
            aria-expanded={!!expanded[note.id]}
          >
            <div className="about-sticky-title">
              <span>{note.title}</span>
              <i className={`bx ${expanded[note.id] ? 'bx-chevron-up' : 'bx-chevron-down'}`}
                 style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }} />
            </div>
            <p className="about-sticky-teaser">{note.teaser}</p>
            {expanded[note.id] && (
              <div className="about-sticky-expanded">
                <p>{note.body}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{ marginTop: '3rem', textAlign: 'center', paddingTop: '1.5rem', borderTop: '1px dashed var(--color-grid)' }}
      >
        <p style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontSize: '0.95rem' }}>
          "Every word leaves a mark. Make yours meaningful."
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
          — CHART, v0.3
        </p>
      </div>
    </div>
  );
}
