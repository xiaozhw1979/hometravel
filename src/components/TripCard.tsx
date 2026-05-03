import { Trip } from '../types'
import { MapPin, Calendar, Trash2, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface TripCardProps {
  trip: Trip
  photoCount: number
  onDelete: (id: string) => void
}

function CoverDisplay({ coverPhoto, name }: { coverPhoto?: string; name: string }) {
  if (!coverPhoto) {
    return (
      <div className="w-full h-full cover-gradient-amber flex items-center justify-center">
        <span className="text-white text-4xl font-bold opacity-70">{name.charAt(0)}</span>
      </div>
    )
  }

  if (coverPhoto.startsWith('gradient-')) {
    const color = coverPhoto.replace('gradient-', '')
    const cls = `cover-gradient-${color}`
    return (
      <div className={`w-full h-full ${cls} flex items-center justify-center`}>
        <span className="text-white text-4xl font-bold opacity-70">{name.charAt(0)}</span>
      </div>
    )
  }

  return <img src={coverPhoto} alt={name} className="w-full h-full object-cover" />
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start)
  const e = new Date(end)
  const fmt = (d: Date) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
  return `${fmt(s)} — ${fmt(e)}`
}

export default function TripCard({ trip, photoCount, onDelete }: TripCardProps) {
  const navigate = useNavigate()

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.confirm(`确认删除「${trip.name}」？此操作不可撤销。`)) {
      onDelete(trip.id)
    }
  }

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200 fade-in"
      onClick={() => navigate(`/trips/${trip.id}`)}
    >
      {/* Cover */}
      <div className="relative h-48 overflow-hidden">
        <CoverDisplay coverPhoto={trip.coverPhoto} name={trip.name} />
        {/* Photo count badge */}
        <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
          {photoCount} 张照片
        </div>
        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="absolute top-3 right-3 bg-black/30 hover:bg-red-500 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors"
          title="删除行程"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-lg leading-tight">{trip.name}</h3>

        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <MapPin size={14} className="text-amber-500 flex-shrink-0" />
            <span className="truncate">{trip.destination}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Calendar size={14} className="text-amber-500 flex-shrink-0" />
            <span>{formatDateRange(trip.startDate, trip.endDate)}</span>
          </div>
        </div>

        {trip.description && (
          <p className="mt-3 text-gray-600 text-sm line-clamp-2">{trip.description}</p>
        )}

        <div className="mt-3 flex items-center justify-end text-amber-600 text-sm font-medium">
          <span>查看详情</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  )
}
