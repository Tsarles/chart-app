import { useNavigate, useLocation } from 'react-router-dom';

/**
 * FloatingDock — iPhone-style bottom navigation island.
 * Shown only on protected pages (/home, /note/*, /create, /profile).
 *
 * Uses Boxicons for icons.
 */
export function FloatingDock() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { id: 'home',    icon: 'bx-home',  label: 'Home',    path: '/home' },
    { id: 'create',  icon: 'bx-note',  label: 'Notes',   path: '/create' },
    { id: 'profile', icon: 'bx-user',  label: 'Profile', path: '/profile' },
  ];

  function isActive(path) {
    if (path === '/home') return pathname === '/home' || pathname.startsWith('/note/');
    return pathname === path;
  }

  return (
    <nav className="floating-dock" aria-label="Main navigation">
      {items.map(({ id, icon, label, path }) => (
        <button
          key={id}
          id={`dock-${id}`}
          className={`dock-btn${isActive(path) ? ' active' : ''}`}
          onClick={() => navigate(path)}
          aria-label={label}
          title={label}
        >
          <i className={`bx ${icon}`} />
        </button>
      ))}
    </nav>
  );
}
