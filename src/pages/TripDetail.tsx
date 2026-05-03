import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Images, ListOrdered } from 'lucide-react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import { subscribePhotos, subscribeItinerary } from '../firestore'
import { Trip, Photo, ItineraryDay } from '../types'
import PhotoGrid from '../components/PhotoGrid'
import ItineraryView from '../components/ItineraryView'

interface TripDetailProps {
  initialTab?: 'photos' | 'itinerary'
}

type Tab = 'photos' | 'itinerary'

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + 'T00:00:00')
  const e = new Date(end + 'T00:00:00')
  const diffMs = e.getTime() - s.getTime()
  const nights = Math.round(diffMs / (1000 * 60 * 60 * 24))
  const fmt = (d: Date) => `${d.getMonth() + 1}月${d.getDate()}日`
  return `${fmt(s)} — ${fmt(e)}（${nights + 1}天${nights}晚）`
}

function CoverBanner({ coverPhoto, name }: { coverPhoto?: string; name: string }) {
  if (!coverPhoto) {
    return (
      <div className="w-full h-full cover-gradient-amber flex items-end justify-start p-5">
        <span className="text-white text-5xl font-bold opacity-50">{name.charAt(0)}</span>
      </div>
    )
  }
  if (coverPhoto.startsWith('gradient-')) {
    const color = coverPhoto.replace('gradient-', '')
    return (
      <div className={`w-full h-full cover-gradient-${color} flex items-end justify-start p-5`}>
        <span className="text-white text-5xl font-bold opacity-50">{name.charAt(0)}</span>
      </div>
    )
  }
  return <img src={coverPhoto} alt={name} className="w-full h-full object-cover" />
}

export default function TripDetail({ initialTab = 'photos' }: TripDetailProps) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { family } = useAuth()
  const [trip, setTrip] = useState<Trip | null>(null)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [days, setDays] = useState<ItineraryDay[]>([])
  const [tab, setTab] = useState<Tab>(initialTab)
  const [notFound, setNotFound] = useState(false)

  // Subscribe to trip document
  useEffect(() => {
    if (!id || !family) { setNotFound(true); return }
    const tripRef = doc(db, 'families', family.id, 'trips', id)
    const unsub = onSnapshot(tripRef, (snap) => {
      if (!snap.exists()) {
        setNotFound(true)
      } else {
        setTrip({ id: snap.id, ...snap.data() } as Trip)
      }
    })
    return unsub
  }, [id, family?.id])

  // Subscribe to photos
  useEffect(() => {
    if (!id || !family) return
    const unsub = subscribePhotos(family.id, id, setPhotos)
    return unsub
  }, [id, family?.id])

  // Subscribe to itinerary
  useEffect(() => {
    if (!id || !family) return
    const unsub = subscribeItinerary(family.id, id, setDays)
    return unsub
  }, [id, family?.id])

  useEffect(() => {
    setTab(initialTab)
  }, [initialTab])

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-400" style={{ backgroundColor: '#fffbeb' }}>
        <p className="text-lg">行程不存在</p>
        <button
          onClick={() => navigate('/')}
          className="text-amber-600 hover:underline text-sm"
        >
          返回首页
        </button>
      </div>
    )
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fffbeb' }}>
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fffbeb' }}>
      {/* Hero banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <CoverBanner coverPhoto={trip.coverPhoto} name={trip.name} />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2.5 rounded-xl transition-colors"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Trip name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-white text-2xl font-bold leading-tight drop-shadow">{trip.name}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="flex items-center gap-1 text-white/80 text-xs">
              <MapPin size={12} />
              {trip.destination}
            </span>
            <span className="flex items-center gap-1 text-white/80 text-xs">
              <Calendar size={12} />
              {formatDateRange(trip.startDate, trip.endDate)}
            </span>
          </div>
        </div>
      </div>

      {/* Description card */}
      {trip.description && (
        <div className="max-w-2xl mx-auto px-4 mt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-50">
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{trip.description}</p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-2xl mx-auto px-4 mt-4">
        <div className="bg-white rounded-2xl shadow-sm border border-amber-50 flex overflow-hidden">
          <TabButton
            active={tab === 'photos'}
            onClick={() => setTab('photos')}
            icon={<Images size={16} />}
            label={`相册 (${photos.length})`}
          />
          <TabButton
            active={tab === 'itinerary'}
            onClick={() => setTab('itinerary')}
            icon={<ListOrdered size={16} />}
            label={`行程 (${days.length}天)`}
          />
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-2xl mx-auto px-4 py-4 pb-10">
        {tab === 'photos' ? (
          <PhotoGrid
            tripId={trip.id}
            photos={photos}
            onPhotosChange={setPhotos}
          />
        ) : (
          <ItineraryView
            tripId={trip.id}
            days={days}
            onDaysChange={setDays}
          />
        )}
      </div>
    </div>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
        active
          ? 'bg-amber-500 text-white'
          : 'text-gray-500 hover:text-amber-600 hover:bg-amber-50'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
