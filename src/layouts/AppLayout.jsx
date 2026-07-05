import { Outlet, useLocation } from 'react-router-dom';
import { FloatingDock } from '../components/FloatingDock';
import { VersionLabel } from '../components/VersionLabel';
import { BookmarkTabs } from '../components/BookmarkTabs';

/** Pages where the floating dock should appear (protected pages only) */
const DOCK_ROUTES = ['/home', '/create', '/profile'];

/**
 * Shared layout wrapper.
 * - Applies graph-paper background to all pages
 * - Renders VersionLabel (v0.3) globally top-right
 * - Renders BookmarkTabs globally on right side
 * - Conditionally renders FloatingDock on protected pages
 */
export function AppLayout() {
  const { pathname } = useLocation();

  const showDock =
    DOCK_ROUTES.includes(pathname) || pathname.startsWith('/note/');

  return (
    <div className="graph-paper min-h-screen">
      <VersionLabel />
      <BookmarkTabs />
      <Outlet />
      {showDock && <FloatingDock />}
    </div>
  );
}
