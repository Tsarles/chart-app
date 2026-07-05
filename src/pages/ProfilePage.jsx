import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../services/firebase';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

/**
 * ProfilePage — v0.3.
 * Journal-themed background with notebook-page card wrapping user info.
 */
export function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const displayName = user?.displayName || user?.email?.split('@')[0] || 'friend';
  const email = user?.email || '';

  async function handleLogout() {
    try { await logOut(); navigate('/'); }
    catch (err) { console.error('Logout error:', err); }
  }

  return (
    <div
      className="bg-journal animate-fade-slide-up"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem 8rem',
      }}
    >
      {/* CHART Logo */}
      <div style={{ marginBottom: '2rem' }}>
        <Logo size="medium" />
      </div>

      {/* Journal card */}
      <div className="profile-journal-card">

        {/* Avatar */}
        <div
          style={{
            width: '72px', height: '72px', borderRadius: '50%',
            backgroundColor: 'var(--color-accent-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem',
          }}
        >
          <i className="bx bx-user" style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
        </div>

        <h1 style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
          {displayName}
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          {email}
        </p>

        {/* Decorative separator */}
        <div style={{ width: '3rem', height: '1px', backgroundColor: 'var(--color-grid)', margin: '0 auto 1.5rem' }} />

        <p className="italic" style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '0.85rem' }}>
          Your journal. Your words. Your story.
        </p>

        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Decorative bookmarks */}
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', opacity: 0.4 }}>
        <div style={{ width: '20px', height: '36px', backgroundColor: '#FFD93D', borderRadius: '0 0 4px 4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
        <div style={{ width: '20px', height: '28px', backgroundColor: '#B5E61D', borderRadius: '0 0 4px 4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
        <div style={{ width: '20px', height: '32px', backgroundColor: '#F48FB1', borderRadius: '0 0 4px 4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
      </div>
    </div>
  );
}
