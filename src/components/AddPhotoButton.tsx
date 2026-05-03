import { useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { addPhoto } from '../dataLayer'
import { Photo } from '../types'

interface AddPhotoButtonProps {
  tripId: string
  onAdded: (photos: Photo[]) => void
}

export default function AddPhotoButton({ tripId, onAdded }: AddPhotoButtonProps) {
  const { family } = useAuth()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    if (files.length === 0 || !family) return
    setUploading(true)

    const promises = files.map(
      (file) =>
        new Promise<Photo>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = async (ev) => {
            const dataUrl = ev.target?.result as string
            try {
              const photo = await addPhoto(family.id, tripId, { tripId, dataUrl, caption: '' })
              resolve(photo)
            } catch (err) {
              reject(err)
            }
          }
          reader.readAsDataURL(file)
        })
    )

    try {
      const newPhotos = await Promise.all(promises)
      onAdded(newPhotos)
    } catch {
      // error handled silently; real app would show a toast
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <>
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
      >
        <Plus size={18} />
        {uploading ? '上传中...' : '添加照片'}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFiles}
      />
    </>
  )
}
