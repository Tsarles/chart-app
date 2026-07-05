import { useState } from 'react';
import { Button } from './Button';

const STORAGE_KEY = 'chart_agreement_accepted';

/**
 * Returns true if the user has already accepted the agreement on this device.
 */
export function hasAcceptedAgreement() {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

/**
 * Community Agreement modal.
 * Must be accepted before any auth action proceeds.
 *
 * @param {Function} onAccept - Called when user accepts and presses Continue
 * @param {Function} onClose  - Called when user dismisses without accepting
 */
export function CommunityAgreementModal({ onAccept, onClose }) {
  const [checked, setChecked] = useState(false);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'true');
    onAccept();
  }

  const rules = [
    'My words should come from a place of honesty and respect.',
    'I will not post hate speech, discrimination, harassment, or threats.',
    'I will not post explicit sexual content or graphic violence.',
    'I will not intentionally spread false information or impersonate others.',
    'I understand that CHART is not a platform for bullying or attacking individuals.',
    'I accept that posts violating these guidelines may be removed.',
    'I understand that my posts may be reported by other users.',
  ];

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="agreement-title"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-card">
        {/* Close button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="modal-title" id="agreement-title">
          Welcome to CHART
        </h2>

        <p style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          lineHeight: '1.7',
          marginBottom: '1rem',
        }}>
          CHART (Collection of Hidden Affections, Regrets &amp; Thoughts) is a place
          created for words that were never spoken.
        </p>

        <p style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          lineHeight: '1.7',
          marginBottom: '1.25rem',
        }}>
          By continuing, you agree to help keep this community safe,
          respectful, and meaningful.
        </p>

        {/* Dashed separator */}
        <div className="notebook-separator" />

        <h3 style={{
          fontSize: '1rem',
          color: 'var(--color-text-primary)',
          margin: '1rem 0 0.5rem',
        }}>
          Community Agreement
        </h3>

        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '0.25rem',
        }}>
          I understand that:
        </p>

        <ul className="modal-rule-list">
          {rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>

        {/* Checkbox */}
        <div
          className="agreement-checkbox-row"
          onClick={() => setChecked(v => !v)}
        >
          <input
            id="agreement-check"
            type="checkbox"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            onClick={e => e.stopPropagation()}
          />
          <label htmlFor="agreement-check">
            I have read and agree to the CHART Community Agreement.
          </label>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button
            variant="primary"
            fullWidth
            disabled={!checked}
            onClick={handleAccept}
          >
            Continue
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
