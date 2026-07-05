/**
 * Reusable notebook-style input field.
 * Renders a dashed separator, then an icon + underline input row.
 *
 * @param {string} id        - Input element ID
 * @param {string} label     - Accessible label text
 * @param {string} type      - Input type (text, email, password)
 * @param {string} value     - Controlled value
 * @param {Function} onChange - Change handler
 * @param {string} placeholder
 * @param {string} icon      - Boxicons class (e.g. 'bx-envelope')
 * @param {boolean} required
 * @param {string} autoComplete
 */
export function NotebookInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  icon = 'bx-pencil',
  required = false,
  autoComplete,
}) {
  return (
    <div className="notebook-field">
      <div className="notebook-separator" role="presentation" />
      {label && (
        <label
          htmlFor={id}
          style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}
        >
          {label}
        </label>
      )}
      <div className="notebook-field-row">
        <i className={`bx ${icon}`} aria-hidden="true" />
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
}
