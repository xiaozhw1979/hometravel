import { useEffect, useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Pencil, Check } from 'lucide-react'
import { Photo } from '../types'
import { updatePhoto } from '../store'

interface LightboxProps {
  photos: Photo[]
  initialIndex: number
  onClose: () => void
  onPhotosChange: (photos: Photo[]) => void
}

export default function Lightbox({ photos, initialIndex, onClose, onPhotosChange }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex)
  const [editingCaption, setEditingCaption] = useState(false)
  const [captionValue, setCaptionValue] = useState('')

  const photo = photos[current]

  useEffect(() => {
    setCaptionValue(photos[current]?.caption ?? '')
    setEditingCaption(false)
  }, [current, photos])

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : photos.length - 1))
  }, [photos.length])

  const next = useCallback(() => {
    setCurrent((c) => (c < photos.length - 1 ? c + 1 : 0))
  }, [photos.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, onClose])

  function saveCaption() {
    if (!photo) return
    updatePhoto(photo.id, { caption: captionValue })
    const updated = photos.map((p) =>
      p.id === photo.id ? { ...p, caption: captionValue } : p
    )
    onPhotosChange(updated)
    setEditingCaption(false)
  }

  if (!photo) return null

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Prev button */}
      {photos.length > 1 && (
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => { e.stopPropagation(); prev() }}
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Next button */}
      {photos.length > 1 && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => { e.stopPropagation(); next() }}
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-3xl w-full mx-12 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.dataUrl}
          alt={photo.caption || `照片 ${current + 1}`}
          className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
        />

        {/* Caption + counter */}
        <div className="w-full flex items-start gap-3">
          <div className="flex-1 min-w-0">
            {editingCaption ? (
              <input
                autoFocus
                type="text"
                value={captionValue}
                onChange={(e) => setCaptionValue(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') saveCaption(); if (e.key === 'Escape') setEditingCaption(false) }}
                placeholder="为这张照片添加说明..."
                className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
              />
            ) : (
              <p className="text-white/80 text-sm truncate">
                {photo.caption || <span className="italic text-white/40">暂无说明</span>}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-white/50 text-sm">
              {current + 1} / {photos.length}
            </span>
            {editingCaption ? (
              <button
                onClick={saveCaption}
                className="text-amber-400 hover:text-amber-300 p-1"
              >
                <Check size={18} />
              </button>
            ) : (
              <button
                onClick={() => setEditingCaption(true)}
                className="text-white/50 hover:text-white/80 p-1 transition-colors"
                title="编辑说明"
              >
                <Pencil size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
