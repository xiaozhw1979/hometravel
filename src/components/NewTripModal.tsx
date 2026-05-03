import { useState, useRef } from 'react'
import { X, MapPin, Calendar, Image, AlignLeft } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { addTrip } from '../dataLayer'
import { Trip } from '../types'

interface NewTripModalProps {
  onClose: () => void
  onCreated: (trip: Trip) => void
}

const GRADIENT_OPTIONS = [
  { value: 'gradient-amber', label: '暖橙', cls: 'cover-gradient-amber' },
  { value: 'gradient-rose', label: '樱粉', cls: 'cover-gradient-rose' },
  { value: 'gradient-blue', label: '天蓝', cls: 'cover-gradient-blue' },
  { value: 'gradient-green', label: '翠绿', cls: 'cover-gradient-green' },
  { value: 'gradient-purple', label: '紫罗', cls: 'cover-gradient-purple' },
  { value: 'gradient-teal', label: '青碧', cls: 'cover-gradient-teal' },
]

export default function NewTripModal({ onClose, onCreated }: NewTripModalProps) {
  const { user, family } = useAuth()
  const [name, setName] = useState('')
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [coverPhoto, setCoverPhoto] = useState<string>('gradient-amber')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = '请输入行程名称'
    if (!destination.trim()) errs.destination = '请输入目的地'
    if (!startDate) errs.startDate = '请选择出发日期'
    if (!endDate) errs.endDate = '请选择返回日期'
    if (startDate && endDate && endDate < startDate) errs.endDate = '返回日期不能早于出发日期'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleCoverFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      if (ev.target?.result) {
        setCoverPhoto(ev.target.result as string)
      }
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate() || !family || !user) return
    setSubmitting(true)
    try {
      const trip = await addTrip(
        family.id,
        {
          name: name.trim(),
          destination: destination.trim(),
          startDate,
          endDate,
          coverPhoto,
          description: description.trim(),
        },
        user.uid
      )
      onCreated(trip)
    } catch {
      setErrors({ submit: '创建失败，请重试' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">新建行程</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          {/* Cover photo selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">封面</label>
            <div className="flex gap-2 flex-wrap">
              {GRADIENT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setCoverPhoto(opt.value)}
                  className={`w-12 h-12 rounded-xl ${opt.cls} transition-all ${
                    coverPhoto === opt.value
                      ? 'ring-2 ring-offset-2 ring-amber-500 scale-110'
                      : 'hover:scale-105'
                  }`}
                  title={opt.label}
                />
              ))}
              {/* Upload custom photo */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={`w-12 h-12 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-amber-400 hover:bg-amber-50 transition-all ${
                  coverPhoto && !coverPhoto.startsWith('gradient-') ? 'border-amber-500' : ''
                }`}
                title="上传自定义封面"
              >
                {coverPhoto && !coverPhoto.startsWith('gradient-') ? (
                  <img src={coverPhoto} alt="封面" className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <Image size={18} className="text-gray-400" />
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverFileChange}
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              行程名称 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例：京都赏樱之旅"
              className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${
                errors.name ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <MapPin size={14} className="inline text-amber-500 mr-1" />
              目的地 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="例：日本·京都"
              className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${
                errors.destination ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
          </div>

          {/* Date range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <Calendar size={14} className="inline text-amber-500 mr-1" />
                出发日期 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${
                  errors.startDate ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                返回日期 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
                className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${
                  errors.endDate ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <AlignLeft size={14} className="inline text-amber-500 mr-1" />
              行程简介
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="写下这次旅行的期待或回忆..."
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
              {errors.submit}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              {submitting ? '创建中...' : '创建行程'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
