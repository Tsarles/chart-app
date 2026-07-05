import { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { signInWithEmail, signInWithGoogle } from '../services/firebase';
import { Button } from '../components/Button';
import { NotebookInput } from '../components/NotebookInput';
import { Logo } from '../components/Logo';

export function LoginPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) return <Navigate to="/home" replace />;

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signInWithEmail(email, password);
      navigate('/home');
    } catch (err) {
      setError(getAuthErrorMessage(err.code));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      await signInWithGoogle();
      navigate('/home');
    } catch (err) {
      setError(getAuthErrorMessage(err.code));
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm animate-fade-slide-up" style={{ animationDelay: '0.05s' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo size="small" />
          </Link>
          <p className="mt-2 text-sm italic" style={{ color: 'var(--color-text-secondary)' }}>
            Welcome back.
          </p>
        </div>

        {/* Notebook card */}
        <div style={{
          background: '#FEFEFE',
          borderLeft: '3px solid #F4A0A0',
          borderRadius: '2px',
          padding: '1.75rem 1.75rem 1.5rem',
          boxShadow: '2px 4px 16px rgba(0,0,0,0.07)',
        }}>
          <form onSubmit={handleSubmit} noValidate>
            <NotebookInput id="login-email"    label="Email"    type="email"    icon="bx-envelope" placeholder="your@email.com"  value={email}    onChange={e => setEmail(e.target.value)}    required autoComplete="email" />
            <NotebookInput id="login-password" label="Password" type="password" icon="bx-lock-alt" placeholder="••••••••"         value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
            <div className="notebook-separator" />
            {error && <p className="error-message mb-3">{error}</p>}
            <Button type="submit" variant="primary" fullWidth disabled={submitting}>
              {submitting ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="divider mt-4">or</div>

          <button type="button" onClick={handleGoogleSignIn} className="btn btn-secondary btn-full" style={{ border: '2px solid #DADADA' }}>
            <GoogleSVG />
            Continue with Google
          </button>
        </div>

        <p className="text-center mt-5 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
        <p className="text-center mt-2 text-sm">
          <Link to="/" style={{ color: 'var(--color-text-secondary)' }}>← Back to home</Link>
        </p>
      </div>
    </div>
  );
}

function GoogleSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function getAuthErrorMessage(code) {
  switch (code) {
    case 'auth/invalid-email':      return 'Invalid email address.';
    case 'auth/user-not-found':     return 'No account found with this email.';
    case 'auth/wrong-password':     return 'Incorrect password.';
    case 'auth/invalid-credential': return 'Invalid email or password.';
    case 'auth/too-many-requests':  return 'Too many attempts. Try again later.';
    case 'auth/popup-closed-by-user': return 'Sign-in popup was closed.';
    default: return 'Something went wrong. Please try again.';
  }
}
