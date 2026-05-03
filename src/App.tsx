import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TripDetail from './pages/TripDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trips/:id" element={<TripDetail />} />
        <Route path="/trips/:id/photos" element={<TripDetail initialTab="photos" />} />
        <Route path="/trips/:id/itinerary" element={<TripDetail initialTab="itinerary" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
