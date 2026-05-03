import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Plus, LogIn } from 'lucide-react'
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'

function generateInviteCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

type Mode = 'choose' | 'create' | 'join'

export default function FamilySetupPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>('choose')

  // Create family
  const [familyName, setFamilyName] = useState('')
  const [createError, setCreateError] = useState('')
  const [creating, setCreating] = useState(false)

  // Join family
  const [inviteCode, setInviteCode] = useState('')
  const [joinError, setJoinError] = useState('')
  const [joining, setJoining] = useState(false)

  async function handleCreateFamily(e: React.FormEvent) {
    e.preventDefault()
    if (!familyName.trim()) { setCreateError('请输入家庭名称'); return }
    if (!user) return
    setCreating(true)
    setCreateError('')
    try {
      const code = generateInviteCode()
      await addDoc(collection(db, 'families'), {
        name: familyName.trim(),
        createdBy: user.uid,
        members: [user.uid],
        inviteCode: code,
        createdAt: new Date().toISOString(),
      })
      navigate('/', { replace: true })
    } catch {
      setCreateError('创建失败，请重试')
    } finally {
      setCreating(false)
    }
  }

  async function handleJoinFamily(e: React.FormEvent) {
    e.preventDefault()
    const code = inviteCode.trim().toUpperCase()
    if (code.length !== 6) { setJoinError('邀请码为6位字符'); return }
    if (!user) return
    setJoining(true)
    setJoinError('')
    try {
      const q = query(
        collection(db, 'families'),
        where('inviteCode', '==', code)
      )
      const snap = await getDocs(q)
      if (snap.empty) {
        setJoinError('邀请码不存在，请确认后重试')
        return
      }
      const familyDoc = snap.docs[0]
      // Check if already a member
      const data = familyDoc.data()
      if ((data.members as string[]).includes(user.uid)) {
        navigate('/', { replace: true })
        return
      }
      await updateDoc(familyDoc.ref, {
        members: arrayUnion(user.uid),
      })
      navigate('/', { replace: true })
    } catch {
      setJoinError('加入失败，请重试')
    } finally {
      setJoining(false)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: '#fffbeb' }}
    >
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg">
          <Users size={30} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">设置家庭空间</h1>
        <p className="text-gray-500 text-sm text-center">
          创建或加入一个家庭，开始共同记录旅行
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6">
        {mode === 'choose' && (
          <div className="space-y-4">
            <button
              onClick={() => setMode('create')}
              className="w-full flex items-center gap-4 border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 rounded-2xl p-4 transition-all text-left"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Plus size={22} className="text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">创建家庭</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  新建一个家庭空间，邀请成员加入
                </p>
              </div>
            </button>

            <button
              onClick={() => setMode('join')}
              className="w-full flex items-center gap-4 border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 rounded-2xl p-4 transition-all text-left"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <LogIn size={22} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">加入家庭</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  输入邀请码，加入已有的家庭空间
                </p>
              </div>
            </button>
          </div>
        )}

        {mode === 'create' && (
          <form onSubmit={handleCreateFamily} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => { setMode('choose'); setCreateError('') }}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ← 返回
              </button>
              <h2 className="font-semibold text-gray-900">创建家庭</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                家庭名称
              </label>
              <input
                type="text"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                placeholder="例：张家旅行团"
                autoFocus
                className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${
                  createError ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {createError && (
                <p className="text-red-500 text-xs mt-1">{createError}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={creating}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              {creating ? '创建中...' : '创建家庭'}
            </button>
          </form>
        )}

        {mode === 'join' && (
          <form onSubmit={handleJoinFamily} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => { setMode('choose'); setJoinError('') }}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ← 返回
              </button>
              <h2 className="font-semibold text-gray-900">加入家庭</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                邀请码
              </label>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                placeholder="输入6位邀请码"
                maxLength={6}
                autoFocus
                className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 tracking-widest text-center font-mono text-lg uppercase ${
                  joinError ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {joinError && (
                <p className="text-red-500 text-xs mt-1">{joinError}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={joining}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              {joining ? '加入中...' : '加入家庭'}
            </button>
          </form>
        )}
      </div>

      {mode === 'choose' && (
        <p className="mt-4 text-xs text-gray-400 text-center">
          当前账号：{user?.email}
        </p>
      )}
    </div>
  )
}
