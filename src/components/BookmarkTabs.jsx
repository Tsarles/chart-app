import { useNavigate } from 'react-router-dom';

/**
 * Notebook bookmark tabs fixed to the RIGHT side (v0.3).
 * About → yellow, navigates to /about
 * Feedback → lime, placeholder
 */
export function BookmarkTabs() {
  const navigate = useNavigate();

  const tabs = [
    {
      id: 'about',
      label: 'About',
      icon: 'bx-book-open',
      colorClass: 'tab-yellow',
      action: () => navigate('/about'),
    },
    {
      id: 'feedback',
      label: 'Feedback',
      icon: 'bx-message-rounded-detail',
      colorClass: 'tab-lime',
      action: () => {},
    },
  ];

  return (
    <nav className="bookmark-tabs-right" aria-label="Site navigation">
      {tabs.map(({ id, label, icon, colorClass, action }) => (
        <button
          key={id}
          className={`bookmark-tab-right ${colorClass}`}
          onClick={action}
          aria-label={label}
          title={label}
        >
          <i className={`bx ${icon}`} aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
