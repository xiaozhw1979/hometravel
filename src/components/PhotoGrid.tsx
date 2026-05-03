import { useState } from 'react'
import { Trash2, ImageOff } from 'lucide-react'
import { Photo } from '../types'
import { useAuth } from '../contexts/AuthContext'
import { deletePhoto } from '../dataLayer'
import Lightbox from './Lightbox'
import AddPhotoButton from './AddPhotoButton'

interface PhotoGridProps {
  tripId: string
  photos: Photo[]
  onPhotosChange: (photos: Photo[]) => void
}

export default function PhotoGrid({ tripId, photos, onPhotosChange }: PhotoGridProps) {
  const { family } = useAuth()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  async function handleDelete(e: React.MouseEvent, id: string) {
    e.stopPropagation()
    if (!window.confirm('确认删除这张照片？') || !family) return
    // Optimistic update
    onPhotosChange(photos.filter((p) => p.id !== id))
    if (lightboxIndex !== null) {
      setLightboxIndex(null)
    }
    await deletePhoto(family.id, tripId, id)
  }

  function handleAdded(newPhotos: Photo[]) {
    onPhotosChange([...photos, ...newPhotos])
  }

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <ImageOff size={48} className="mb-4 opacity-40" />
        <p className="text-base font-medium mb-1">还没有照片</p>
        <p className="text-sm mb-6">上传你的旅行照片，留住美好瞬间</p>
        <AddPhotoButton tripId={tripId} onAdded={handleAdded} />
      </div>
    )
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">共 {photos.length} 张照片</p>
        <AddPhotoButton tripId={tripId} onAdded={handleAdded} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 sm:gap-2">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            className="photo-cell rounded-lg relative group"
            onClick={() => setLightboxIndex(idx)}
          >
            <img src={photo.dataUrl} alt={photo.caption || `照片 ${idx + 1}`} />
            {/* Caption overlay */}
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs truncate">{photo.caption}</p>
              </div>
            )}
            {/* Delete button */}
            <button
              className="absolute top-1.5 right-1.5 bg-black/40 hover:bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
              onClick={(e) => handleDelete(e, photo.id)}
              title="删除照片"
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPhotosChange={onPhotosChange}
        />
      )}
    </div>
  )
}
