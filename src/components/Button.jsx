/**
 * Reusable notebook-label style button.
 *
 * @param {'primary'|'secondary'|'outline'|'danger'} variant - Button style variant
 * @param {React.ReactNode} icon - Optional icon element
 * @param {boolean} fullWidth - Whether the button spans full width
 */
export function Button({
  children,
  onClick,
  variant = 'primary',
  icon,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}) {
  const variantClass = `btn-${variant}`;
  const widthClass = fullWidth ? 'btn-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClass} ${widthClass} ${className}`.trim()}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
