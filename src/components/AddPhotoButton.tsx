import { useRef } from 'react'
import { Plus } from 'lucide-react'
import { addPhoto } from '../store'
import { Photo } from '../types'

interface AddPhotoButtonProps {
  tripId: string
  onAdded: (photos: Photo[]) => void
}

export default function AddPhotoButton({ tripId, onAdded }: AddPhotoButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const promises = files.map(
      (file) =>
        new Promise<Photo>((resolve) => {
          const reader = new FileReader()
          reader.onload = (ev) => {
            const dataUrl = ev.target?.result as string
            const photo = addPhoto({ tripId, dataUrl, caption: '' })
            resolve(photo)
          }
          reader.readAsDataURL(file)
        })
    )

    Promise.all(promises).then((newPhotos) => {
      onAdded(newPhotos)
      // Reset so same files can be re-selected
      if (fileInputRef.current) fileInputRef.current.value = ''
    })
  }

  return (
    <>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
      >
        <Plus size={18} />
        添加照片
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
