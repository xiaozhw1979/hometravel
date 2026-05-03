import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Dashboard from './pages/Dashboard'
import TripDetail from './pages/TripDetail'
import AuthPage from './pages/AuthPage'
import FamilySetupPage from './pages/FamilySetupPage'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, family, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fffbeb' }}>
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) return <Navigate to="/auth" replace />
  if (!family) return <Navigate to="/family-setup" replace />

  return <>{children}</>
}

export default function App() {
  const { user, family, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fffbeb' }}>
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={user && family ? <Navigate to="/" replace /> : <AuthPage />}
        />
        <Route
          path="/family-setup"
          element={!user ? <Navigate to="/auth" replace /> : family ? <Navigate to="/" replace /> : <FamilySetupPage />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips/:id"
          element={
            <ProtectedRoute>
              <TripDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips/:id/photos"
          element={
            <ProtectedRoute>
              <TripDetail initialTab="photos" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips/:id/itinerary"
          element={
            <ProtectedRoute>
              <TripDetail initialTab="itinerary" />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
