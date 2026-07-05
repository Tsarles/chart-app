import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { signInWithGoogle } from '../services/firebase';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { NotebookDecorations } from '../components/NotebookDecorations';
import {
  CommunityAgreementModal,
  hasAcceptedAgreement,
} from '../components/CommunityAgreementModal';

/**
 * Landing page — v0.3.
 * Graph paper + subtle notebook decorations.
 * Bookmarks on right. Community Agreement on first auth click.
 */
export function LandingPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [pendingAction, setPendingAction] = useState(null);

  if (!loading && user) return <Navigate to="/home" replace />;

  function requireAgreement(action) {
    if (hasAcceptedAgreement()) {
      executeAction(action);
    } else {
      setPendingAction(action);
    }
  }

  async function executeAction(action) {
    if (action === 'google') {
      try { await signInWithGoogle(); navigate('/home'); }
      catch (err) { console.error('Google sign-in error:', err); }
    } else if (action === 'email') {
      navigate('/register');
    } else if (action === 'login') {
      navigate('/login');
    }
  }

  function handleModalAccept() {
    const action = pendingAction;
    setPendingAction(null);
    executeAction(action);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ position: 'relative' }}
    >
      {/* Subtle notebook decorations */}
      <NotebookDecorations />

      {/* Agreement modal */}
      {pendingAction && (
        <CommunityAgreementModal
          onAccept={handleModalAccept}
          onClose={() => setPendingAction(null)}
        />
      )}

      {/* ─── Hero ─── */}
      <div
        className="w-full max-w-md text-center animate-fade-slide-up"
        style={{ animationDelay: '0.1s', position: 'relative', zIndex: 1 }}
      >
        <Logo size="large" />

        <p
          className="mt-6 text-base italic"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          "A place for the words you couldn't say."
        </p>

        {/* ─── Auth Buttons ─── */}
        <div className="mt-10 flex flex-col gap-3">

          {/* Google — strong border, clear hover */}
          <button
            type="button"
            onClick={() => requireAgreement('google')}
            className="btn btn-full"
            style={{
              background: '#FEFEFE',
              border: '2px solid #888888',
              color: 'var(--color-text-primary)',
              justifyContent: 'center',
              gap: '0.6rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#555';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#888888';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
            }}
          >
            <GoogleSVG />
            Continue with Google
          </button>

          <Button
            variant="secondary"
            fullWidth
            onClick={() => requireAgreement('email')}
          >
            <i className="bx bx-envelope" style={{ fontSize: '1rem' }} />
            Continue with Email
          </Button>

          <Button
            variant="primary"
            fullWidth
            onClick={() => requireAgreement('login')}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

function GoogleSVG() {
  return (
    <svg width="17" height="17" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}
