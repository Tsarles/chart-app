import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { ReadNotePage } from '../pages/ReadNotePage';
import { CreateNotePage } from '../pages/CreateNotePage';
import { ProfilePage } from '../pages/ProfilePage';
import { ProtectedRoute } from '../components/ProtectedRoute';

/**
 * Application router — Stage 3 (v0.2).
 *
 * Public:    /  /login  /register  /about
 * Protected: /home  /note/:id  /create  /profile
 * Redirects: /dashboard → /home
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>

          {/* ─── Public ─── */}
          <Route path="/"         element={<LandingPage />} />
          <Route path="/login"    element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about"    element={<AboutPage />} />

          {/* ─── Protected ─── */}
          <Route path="/home"    element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/note/:id" element={<ProtectedRoute><ReadNotePage /></ProtectedRoute>} />
          <Route path="/create"  element={<ProtectedRoute><CreateNotePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

          {/* ─── Redirects ─── */}
          <Route path="/dashboard" element={<Navigate to="/home" replace />} />
          <Route path="*"          element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
