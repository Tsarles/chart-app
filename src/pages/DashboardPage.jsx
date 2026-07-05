import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../services/firebase';
import { Button } from '../components/Button';

/**
 * Protected dashboard — Stage 1 placeholder.
 * Shows welcome message and logout button.
 */
export function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'friend';

  async function handleLogout() {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center animate-fade-slide-up">
        <p
          className="text-lg"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Welcome back,
        </p>

        <h1
          className="text-4xl md:text-5xl mt-2 mb-6"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {displayName}
        </h1>

        {/* Decorative separator */}
        <div
          className="mx-auto w-12 h-px mb-6"
          style={{ backgroundColor: 'var(--color-grid)' }}
        />

        <p
          className="text-base italic mb-10"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Stage 2 coming soon.
        </p>

        <Button
          variant="danger"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
