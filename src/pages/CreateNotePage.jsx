import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { PinnedPaper } from '../components/PinnedPaper';
import { validateEmotion } from '../utils/emotionFilter';

const MAX_CHARS = 500;

/**
 * PostingRules — shown the first time a user opens Create Note.
 */
function PostingRules({ onAccept }) {
  const rules = [
    'Write with kindness.',
    'Respect the privacy of others.',
    'Avoid sharing personal information.',
    'Do not post hate speech, harassment, discrimination, or threats.',
    'No explicit sexual content.',
    'No graphic violence.',
    'Avoid excessive profanity.',
    'Do not spam or repeatedly post the same content.',
    'Write from your own experiences.',
    'Every note should tell a story, not start an argument.',
  ];

  return (
    <div className="rules-overlay">
      <div className="rules-card">
        <div className="notebook-page">
          <h1 style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
            Before You Write...
          </h1>
          <div className="notebook-separator" />
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', margin: '1rem 0' }}>
            Thank you for sharing a piece of yourself.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '0.5rem' }}>
            CHART exists to preserve meaningful words, not to spread harm.
            Please take a moment to read these reminders before writing.
          </p>
          <div className="notebook-separator" />
          <ul className="rules-rule-list" style={{ marginTop: '1rem' }}>
            {rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
          <p style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontSize: '0.875rem', textAlign: 'center', margin: '1.5rem 0 1.75rem' }}>
            "Every word leaves a mark. Make yours meaningful."
          </p>
          <Button variant="primary" fullWidth onClick={onAccept}>
            I Understand
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * NoteForm — v0.3 split-layout create note experience.
 * Left: Logo + sticky CTA. Center: form. Right: reminder card.
 */
function NoteForm({ onSuccess }) {
  const [word, setWord] = useState('');
  const [recipient, setRecipient] = useState('');
  const [emotion, setEmotion] = useState('');
  const [emotionError, setEmotionError] = useState('');
  const [story, setStory] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const remaining = MAX_CHARS - story.length;
  const counterClass = remaining <= 0 ? 'at-limit' : remaining <= 50 ? 'near-limit' : '';

  function handleEmotionChange(e) {
    const val = e.target.value;
    setEmotion(val);
    const result = validateEmotion(val);
    setEmotionError(result.valid ? '' : result.message);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!word.trim() || !story.trim()) return;
    const emotionResult = validateEmotion(emotion);
    if (!emotionResult.valid) {
      setEmotionError(emotionResult.message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess();
      setWord('');
      setRecipient('');
      setEmotion('');
      setEmotionError('');
      setStory('');
    }, 600);
  }

  return (
    <div className="bg-writing create-layout animate-fade-slide-up">

      {/* ─── Left Sidebar ─── */}
      <div className="create-sidebar-left">
        <Logo size="small" />
        <div className="create-sticky-cta">
          <h2>Add a Note</h2>
          <p>Leave the words you couldn't say.</p>
        </div>
      </div>

      {/* ─── Center: Form ─── */}
      <div className="create-main">
        <form onSubmit={handleSubmit} className="notebook-page" noValidate>

          {/* Collect */}
          <div className="create-form-field">
            <label htmlFor="note-word" className="create-form-label">
              What do you want to collect?
            </label>
            <input
              id="note-word"
              type="text"
              className="input-notebook"
              placeholder='"My last goodbye."'
              value={word}
              onChange={e => setWord(e.target.value)}
              required
              maxLength={120}
            />
          </div>

          {/* Recipient */}
          <div className="create-form-field">
            <label htmlFor="note-recipient" className="create-form-label">
              To:
            </label>
            <input
              id="note-recipient"
              type="text"
              className="input-notebook"
              placeholder="Initials are enough. (Example: A.)"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              maxLength={20}
            />
          </div>

          {/* Emotion — free text */}
          <div className="create-form-field">
            <label htmlFor="note-emotion" className="create-form-label">
              Emotion
            </label>
            <input
              id="note-emotion"
              type="text"
              className="input-notebook"
              placeholder="Hope, Longing, Accepted, Lost, Grateful, Confused..."
              value={emotion}
              onChange={handleEmotionChange}
              maxLength={30}
            />
            {emotionError && (
              <p className="emotion-validation">{emotionError}</p>
            )}
          </div>

          {/* Story */}
          <div className="create-form-field">
            <label htmlFor="note-story" className="create-form-label">
              Your words
            </label>
            <textarea
              id="note-story"
              className="textarea-notebook"
              placeholder="What were the words you never got to say?"
              value={story}
              onChange={e => { if (e.target.value.length <= MAX_CHARS) setStory(e.target.value); }}
              required
            />
            <p className={`char-counter ${counterClass}`}>
              {remaining} / {MAX_CHARS}
            </p>
          </div>

          <div className="notebook-separator" />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={submitting || !word.trim() || !story.trim() || !!emotionError}
          >
            {submitting ? 'Collecting...' : 'Collect this Note'}
          </Button>
        </form>
      </div>

      {/* ─── Right Sidebar ─── */}
      <div className="create-sidebar-right">
        <PinnedPaper variant="reminder" title="Be Kind">
          <p>Your words are powerful.</p>
          <p style={{ marginTop: '0.5rem' }}>Treat every person like fragile glass.</p>
          <p style={{ marginTop: '0.5rem' }}>We're all still learning and growing.</p>
          <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--color-accent)' }}>
            Write with empathy.
          </p>
        </PinnedPaper>
      </div>
    </div>
  );
}

/**
 * CreateNotePage — v0.3.
 * Rules gate → Split-layout form with sidebar CTA + reminder.
 */
export function CreateNotePage() {
  const { user } = useAuth();
  const rulesKey = `chart_rules_seen_${user?.uid}`;
  const [rulesSeen, setRulesSeen] = useState(() => localStorage.getItem(rulesKey) === 'true');
  const [showToast, setShowToast] = useState(false);

  function handleRulesAccept() {
    localStorage.setItem(rulesKey, 'true');
    setRulesSeen(true);
  }

  function handleNoteSuccess() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  return (
    <>
      {!rulesSeen
        ? <PostingRules onAccept={handleRulesAccept} />
        : <NoteForm onSuccess={handleNoteSuccess} />
      }
      {showToast && (
        <div className="toast" role="status" aria-live="polite">
          ✓ Note collected.
        </div>
      )}
    </>
  );
}
