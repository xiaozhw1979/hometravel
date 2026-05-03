import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { auth, db, isFirebaseEnabled } from '../firebase'

export interface FamilyInfo {
  id: string
  name: string
  inviteCode: string
  members: string[]
  createdBy: string
}

interface AuthContextValue {
  user: User | null
  family: FamilyInfo | null
  loading: boolean
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  family: null,
  loading: true,
})

export function useAuth() {
  return useContext(AuthContext)
}

const LOCAL_USER = { uid: 'local', email: '本机用户' } as unknown as User
const LOCAL_FAMILY: FamilyInfo = {
  id: 'local',
  name: '我的家庭',
  inviteCode: '',
  members: ['local'],
  createdBy: 'local',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [family, setFamily] = useState<FamilyInfo | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [familyLoading, setFamilyLoading] = useState(false)

  useEffect(() => {
    if (!isFirebaseEnabled) {
      setUser(LOCAL_USER)
      setFamily(LOCAL_FAMILY)
      setAuthLoading(false)
      return
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthLoading(false)
      if (!u) {
        setFamily(null)
        setFamilyLoading(false)
      }
    })
    return unsub
  }, [])

  useEffect(() => {
    if (!isFirebaseEnabled || !user) return

    setFamilyLoading(true)
    const q = query(
      collection(db, 'families'),
      where('members', 'array-contains', user.uid)
    )
    const unsub = onSnapshot(q, (snap) => {
      if (snap.empty) {
        setFamily(null)
      } else {
        const d = snap.docs[0]
        setFamily({ id: d.id, ...d.data() } as FamilyInfo)
      }
      setFamilyLoading(false)
    })
    return unsub
  }, [user?.uid])

  const loading = authLoading || familyLoading

  return (
    <AuthContext.Provider value={{ user, family, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
