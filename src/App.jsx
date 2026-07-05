import { AuthProvider } from './contexts/AuthContext';
import { AppRouter } from './routes/AppRouter';

/**
 * Root application component.
 * Wraps everything in AuthProvider for global auth state.
 */
function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
