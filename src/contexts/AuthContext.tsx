import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../firebase'

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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [family, setFamily] = useState<FamilyInfo | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [familyLoading, setFamilyLoading] = useState(false)

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      setAuthLoading(false)
      if (!u) {
        setFamily(null)
        setFamilyLoading(false)
      }
    })
    return unsubAuth
  }, [])

  // Subscribe to family doc whenever user changes
  useEffect(() => {
    if (!user) {
      setFamily(null)
      return
    }

    setFamilyLoading(true)

    // Find family where this user is a member
    const familiesRef = collection(db, 'families')
    const q = query(familiesRef, where('members', 'array-contains', user.uid))

    const unsubFamily = onSnapshot(q, (snap) => {
      if (snap.empty) {
        setFamily(null)
      } else {
        const docSnap = snap.docs[0]
        setFamily({ id: docSnap.id, ...docSnap.data() } as FamilyInfo)
      }
      setFamilyLoading(false)
    })

    return unsubFamily
  }, [user?.uid])

  const loading = authLoading || familyLoading

  return (
    <AuthContext.Provider value={{ user, family, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
