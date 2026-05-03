import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { PlaneTakeoff } from 'lucide-react'
import { auth } from '../firebase'

type Tab = 'login' | 'register'

export default function AuthPage() {
  const [tab, setTab] = useState<Tab>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password.trim()) {
      setError('请输入邮箱和密码')
      return
    }
    if (password.length < 6) {
      setError('密码至少需要6位')
      return
    }
    setLoading(true)
    try {
      if (tab === 'register') {
        await createUserWithEmailAndPassword(auth, email.trim(), password)
        // After register, AuthContext will pick up user; App router redirects to /family-setup
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password)
      }
      navigate('/', { replace: true })
    } catch (err: unknown) {
      const msg = (err as { code?: string })?.code
      if (msg === 'auth/user-not-found' || msg === 'auth/wrong-password' || msg === 'auth/invalid-credential') {
        setError('邮箱或密码错误')
      } else if (msg === 'auth/email-already-in-use') {
        setError('该邮箱已被注册，请直接登录')
      } else if (msg === 'auth/invalid-email') {
        setError('邮箱格式不正确')
      } else if (msg === 'auth/too-many-requests') {
        setError('登录次数过多，请稍后再试')
      } else {
        setError('操作失败，请检查网络或重试')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: '#fffbeb' }}
    >
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg">
          <PlaneTakeoff size={30} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">家庭旅行相册</h1>
        <p className="text-gray-500 text-sm">记录每一段美好旅程</p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            type="button"
            onClick={() => { setTab('login'); setError('') }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === 'login'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            登录
          </button>
          <button
            type="button"
            onClick={() => { setTab('register'); setError('') }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === 'register'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            注册
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              邮箱
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="请输入邮箱"
              autoComplete="email"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={tab === 'register' ? '至少6位密码' : '请输入密码'}
              autoComplete={tab === 'register' ? 'new-password' : 'current-password'}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            {loading ? '请稍候...' : tab === 'register' ? '注册账号' : '登录'}
          </button>
        </form>

        {tab === 'register' && (
          <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed">
            注册后，你可以创建家庭空间或加入已有家庭，<br />与家人共同记录旅行故事。
          </p>
        )}
      </div>
    </div>
  )
}
