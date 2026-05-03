import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  arrayUnion,
  arrayRemove,
  Unsubscribe,
} from 'firebase/firestore'
import { db } from './firebase'
import { Trip, Photo, ItineraryDay, Activity } from './types'

// ── Trips ─────────────────────────────────────────────────────────────────────

export function subscribeTrips(
  familyId: string,
  callback: (trips: Trip[]) => void
): Unsubscribe {
  const q = query(
    collection(db, 'families', familyId, 'trips'),
    orderBy('createdAt', 'desc')
  )
  return onSnapshot(q, (snap) => {
    const trips = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Trip))
    callback(trips)
  })
}

export async function addTrip(
  familyId: string,
  trip: Omit<Trip, 'id' | 'createdAt'>,
  uid: string
): Promise<Trip> {
  const ref = collection(db, 'families', familyId, 'trips')
  const data = {
    ...trip,
    createdAt: new Date().toISOString(),
    createdBy: uid,
  }
  const docRef = await addDoc(ref, data)
  return { id: docRef.id, ...data }
}

export async function updateTrip(
  familyId: string,
  tripId: string,
  data: Partial<Trip>
): Promise<void> {
  await updateDoc(doc(db, 'families', familyId, 'trips', tripId), data)
}

export async function deleteTrip(
  familyId: string,
  tripId: string
): Promise<void> {
  await deleteDoc(doc(db, 'families', familyId, 'trips', tripId))
}

// ── Photos ────────────────────────────────────────────────────────────────────

export function subscribePhotos(
  familyId: string,
  tripId: string,
  callback: (photos: Photo[]) => void
): Unsubscribe {
  const q = query(
    collection(db, 'families', familyId, 'trips', tripId, 'photos'),
    orderBy('createdAt', 'asc')
  )
  return onSnapshot(q, (snap) => {
    const photos = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Photo))
    callback(photos)
  })
}

export async function addPhoto(
  familyId: string,
  tripId: string,
  photo: Omit<Photo, 'id' | 'createdAt'>
): Promise<Photo> {
  const ref = collection(db, 'families', familyId, 'trips', tripId, 'photos')
  const data = {
    ...photo,
    createdAt: new Date().toISOString(),
  }
  const docRef = await addDoc(ref, data)
  return { id: docRef.id, ...data }
}

export async function deletePhoto(
  familyId: string,
  tripId: string,
  photoId: string
): Promise<void> {
  await deleteDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'photos', photoId)
  )
}

export async function updatePhoto(
  familyId: string,
  tripId: string,
  photoId: string,
  data: Partial<Photo>
): Promise<void> {
  await updateDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'photos', photoId),
    data
  )
}

// ── Itinerary ─────────────────────────────────────────────────────────────────

export function subscribeItinerary(
  familyId: string,
  tripId: string,
  callback: (days: ItineraryDay[]) => void
): Unsubscribe {
  const q = query(
    collection(db, 'families', familyId, 'trips', tripId, 'itinerary'),
    orderBy('date', 'asc')
  )
  return onSnapshot(q, (snap) => {
    const days = snap.docs.map((d) => ({ id: d.id, ...d.data() } as ItineraryDay))
    callback(days)
  })
}

export async function addDay(
  familyId: string,
  tripId: string,
  day: Omit<ItineraryDay, 'id'>
): Promise<ItineraryDay> {
  const ref = collection(
    db,
    'families',
    familyId,
    'trips',
    tripId,
    'itinerary'
  )
  const data = { ...day }
  const docRef = await addDoc(ref, data)
  return { id: docRef.id, ...data }
}

export async function updateDay(
  familyId: string,
  tripId: string,
  dayId: string,
  data: Partial<ItineraryDay>
): Promise<void> {
  await updateDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'itinerary', dayId),
    data
  )
}

export async function deleteDay(
  familyId: string,
  tripId: string,
  dayId: string
): Promise<void> {
  await deleteDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'itinerary', dayId)
  )
}

/**
 * Add an activity to a day by appending to the activities array in Firestore.
 */
export async function addActivity(
  familyId: string,
  tripId: string,
  dayId: string,
  activity: Omit<Activity, 'id'>
): Promise<Activity> {
  const newActivity: Activity = { ...activity, id: crypto.randomUUID() }
  await updateDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'itinerary', dayId),
    { activities: arrayUnion(newActivity) }
  )
  return newActivity
}

/**
 * Update the full activities array for a day (used when editing/deleting an activity).
 */
export async function updateActivities(
  familyId: string,
  tripId: string,
  dayId: string,
  activities: Activity[]
): Promise<void> {
  await updateDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'itinerary', dayId),
    { activities }
  )
}

/**
 * Remove a specific activity from a day using arrayRemove.
 */
export async function removeActivity(
  familyId: string,
  tripId: string,
  dayId: string,
  activity: Activity
): Promise<void> {
  await updateDoc(
    doc(db, 'families', familyId, 'trips', tripId, 'itinerary', dayId),
    { activities: arrayRemove(activity) }
  )
}
