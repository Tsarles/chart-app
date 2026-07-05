/**
 * PinnedPaper — reusable pinned notebook paper card with pushpin.
 * Used for Creator's Note, Reminder, etc.
 *
 * @param {string}  variant   - 'creator' | 'reminder'
 * @param {string}  title     - Card title
 * @param {React.ReactNode} children - Card body content
 * @param {string}  className - Additional CSS class
 */
export function PinnedPaper({ variant = 'creator', title, children, className = '' }) {
  const baseClass = variant === 'reminder' ? 'reminder-card' : 'creator-note';
  const titleClass = variant === 'reminder' ? 'reminder-card-title' : 'creator-note-title';
  const bodyClass = variant === 'reminder' ? 'reminder-card-body' : 'creator-note-body';

  return (
    <div className={`${baseClass} ${className}`}>
      {title && <p className={titleClass}>{title}</p>}
      <div className={bodyClass}>{children}</div>
    </div>
  );
}
