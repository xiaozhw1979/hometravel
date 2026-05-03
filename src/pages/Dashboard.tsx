import { useState, useEffect } from 'react'
import { PlaneTakeoff, Image, MapPin, Plus, Users, Copy, Check, LogOut } from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth, isFirebaseEnabled } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import { subscribeTrips, deleteTrip } from '../dataLayer'
import { Trip } from '../types'
import TripCard from '../components/TripCard'
import NewTripModal from '../components/NewTripModal'

export default function Dashboard() {
  const { user, family } = useAuth()
  const [trips, setTrips] = useState<Trip[]>([])
  const [photoCounts] = useState<Record<string, number>>({})
  const [showModal, setShowModal] = useState(false)
  const [showMembers, setShowMembers] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  useEffect(() => {
    if (!family) return
    const unsub = subscribeTrips(family.id, (t) => setTrips(t))
    return unsub
  }, [family?.id])

  async function handleDelete(id: string) {
    if (!family) return
    await deleteTrip(family.id, id)
    // Firestore snapshot will update state automatically
  }

  function handleCreated(_trip: Trip) {
    setShowModal(false)
    // Snapshot listener will pick up the new trip
  }

  async function handleCopyCode() {
    if (!family) return
    try {
      await navigator.clipboard.writeText(family.inviteCode)
    } catch {
      // fallback: do nothing
    }
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  async function handleSignOut() {
    if (isFirebaseEnabled) await signOut(auth)
  }

  const totalPhotos = Object.values(photoCounts).reduce((a, b) => a + b, 0)
  const destinations = new Set(trips.map((t) => t.destination.split('·')[0])).size

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fffbeb' }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                <PlaneTakeoff size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide">
                  {family?.name ?? '家庭旅行相册'}
                </h1>
                <p className="text-amber-100 text-xs mt-0.5">记录每一段美好旅程</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors border border-white/30"
              >
                <Plus size={16} />
                新建行程
              </button>
              {isFirebaseEnabled && (
                <button
                  onClick={handleSignOut}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-xl border border-white/30 transition-colors"
                  title="退出登录"
                >
                  <LogOut size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Family info bar - only show in Firebase mode */}
          {isFirebaseEnabled && family && (
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              {/* Invite code */}
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 rounded-xl px-3 py-1.5 text-xs transition-colors border border-white/20"
                title="点击复制邀请码"
              >
                <span className="text-amber-100">邀请码</span>
                <span className="font-mono font-bold tracking-widest">{family.inviteCode}</span>
                {codeCopied
                  ? <Check size={12} className="text-green-300" />
                  : <Copy size={12} className="text-white/60" />
                }
              </button>

              {/* Member count */}
              <button
                onClick={() => setShowMembers((v) => !v)}
                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 rounded-xl px-3 py-1.5 text-xs transition-colors border border-white/20"
              >
                <Users size={12} />
                <span>{family.members.length} 位成员</span>
              </button>

              {/* Current user */}
              <span className="text-amber-200 text-xs truncate max-w-[160px]">{user?.email}</span>
            </div>
          )}

          {/* Members dropdown */}
          {showMembers && family && (
            <div className="mt-2 bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-xs text-amber-100 font-medium mb-2">家庭成员</p>
              <div className="space-y-1">
                {family.members.map((uid) => (
                  <div key={uid} className="flex items-center gap-2 text-xs text-white/90">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users size={10} />
                    </div>
                    <span className="font-mono truncate">{uid === user?.uid ? `${user?.email} (你)` : uid.slice(0, 12) + '…'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <StatCard icon={<PlaneTakeoff size={20} className="text-amber-500" />} value={trips.length} label="次旅行" />
          <StatCard icon={<Image size={20} className="text-orange-500" />} value={totalPhotos} label="张照片" />
          <StatCard icon={<MapPin size={20} className="text-rose-500" />} value={destinations} label="个目的地" />
        </div>

        {/* Trip list */}
        {trips.length === 0 ? (
          <EmptyState onNew={() => setShowModal(true)} />
        ) : (
          <>
            <h2 className="text-base font-semibold text-gray-700 mb-3">家庭旅行</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trips.map((trip) => (
                <TripCard
                  key={trip.id}
                  trip={trip}
                  photoCount={photoCounts[trip.id] ?? 0}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {showModal && (
        <NewTripModal
          onClose={() => setShowModal(false)}
          onCreated={handleCreated}
        />
      )}
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center gap-1.5 border border-amber-50">
      {icon}
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  )
}

function EmptyState({ onNew }: { onNew: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mb-5">
        <PlaneTakeoff size={36} className="text-amber-400" />
      </div>
      <p className="text-lg font-semibold text-gray-600 mb-1">还没有旅行记录</p>
      <p className="text-sm text-gray-400 mb-6 text-center px-8">开始记录你的第一次家庭旅行吧！<br />上传照片、规划行程，留住美好瞬间。</p>
      <button
        onClick={onNew}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-2xl font-medium transition-colors shadow-md"
      >
        <Plus size={20} />
        创建第一次旅行
      </button>
    </div>
  )
}
