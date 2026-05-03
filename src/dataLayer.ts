import { isFirebaseEnabled, db } from './firebase'
import * as local from './store'
import * as remote from './firestore'
import { Trip, Photo, ItineraryDay, Activity } from './types'

type Unsub = () => void

// ── Local-mode subscriber registry ───────────────────────────────────────────

const tripsSubs = new Set<(trips: Trip[]) => void>()
const tripSubs = new Map<string, Set<(trip: Trip | null) => void>>()
const photosSubs = new Map<string, Set<(photos: Photo[]) => void>>()
const itinerarySubs = new Map<string, Set<(days: ItineraryDay[]) => void>>()

function notify(set: Set<(v: any) => void>, value: any) {
  set.forEach((cb) => cb(value))
}

function notifyTrips() {
  notify(tripsSubs, local.getTrips())
}
function notifyTrip(tripId: string) {
  tripSubs.get(tripId)?.forEach((cb) => cb(local.getTrip(tripId) ?? null))
}
function notifyPhotos(tripId: string) {
  photosSubs.get(tripId)?.forEach((cb) => cb(local.getPhotosByTrip(tripId)))
}
function notifyItinerary(tripId: string) {
  itinerarySubs.get(tripId)?.forEach((cb) => cb(local.getItineraryByTrip(tripId)))
}

// ── Trips ─────────────────────────────────────────────────────────────────────

export function subscribeTrips(_familyId: string, callback: (trips: Trip[]) => void): Unsub {
  if (!isFirebaseEnabled) {
    tripsSubs.add(callback)
    callback(local.getTrips())
    return () => tripsSubs.delete(callback)
  }
  return remote.subscribeTrips(_familyId, callback)
}

export function subscribeTrip(familyId: string, tripId: string, callback: (trip: Trip | null) => void): Unsub {
  if (!isFirebaseEnabled) {
    if (!tripSubs.has(tripId)) tripSubs.set(tripId, new Set())
    tripSubs.get(tripId)!.add(callback)
    callback(local.getTrip(tripId) ?? null)
    return () => tripSubs.get(tripId)?.delete(callback)
  }
  const { doc, onSnapshot } = require('firebase/firestore') as typeof import('firebase/firestore')
  const ref = doc(db, 'families', familyId, 'trips', tripId)
  return onSnapshot(ref, (snap: any) => {
    callback(snap.exists() ? ({ id: snap.id, ...snap.data() } as Trip) : null)
  })
}

export async function addTrip(familyId: string, trip: Omit<Trip, 'id' | 'createdAt'>, uid: string): Promise<Trip> {
  if (!isFirebaseEnabled) {
    const t = local.createTrip(trip)
    notifyTrips()
    notifyTrip(t.id)
    return t
  }
  return remote.addTrip(familyId, trip, uid)
}

export async function deleteTrip(familyId: string, tripId: string): Promise<void> {
  if (!isFirebaseEnabled) {
    local.deleteTrip(tripId)
    notifyTrips()
    notifyTrip(tripId)
    return
  }
  return remote.deleteTrip(familyId, tripId)
}

// ── Photos ────────────────────────────────────────────────────────────────────

export function subscribePhotos(familyId: string, tripId: string, callback: (photos: Photo[]) => void): Unsub {
  if (!isFirebaseEnabled) {
    if (!photosSubs.has(tripId)) photosSubs.set(tripId, new Set())
    photosSubs.get(tripId)!.add(callback)
    callback(local.getPhotosByTrip(tripId))
    return () => photosSubs.get(tripId)?.delete(callback)
  }
  return remote.subscribePhotos(familyId, tripId, callback)
}

export async function addPhoto(familyId: string, tripId: string, photo: Omit<Photo, 'id' | 'createdAt'>): Promise<Photo> {
  if (!isFirebaseEnabled) {
    const p = local.addPhoto(photo)
    notifyPhotos(tripId)
    return p
  }
  return remote.addPhoto(familyId, tripId, photo)
}

export async function deletePhoto(familyId: string, tripId: string, photoId: string): Promise<void> {
  if (!isFirebaseEnabled) {
    local.deletePhoto(photoId)
    notifyPhotos(tripId)
    return
  }
  return remote.deletePhoto(familyId, tripId, photoId)
}

export async function updatePhoto(familyId: string, tripId: string, photoId: string, data: Partial<Photo>): Promise<void> {
  if (!isFirebaseEnabled) {
    local.updatePhoto(photoId, data)
    notifyPhotos(tripId)
    return
  }
  return remote.updatePhoto(familyId, tripId, photoId, data)
}

// ── Itinerary ─────────────────────────────────────────────────────────────────

export function subscribeItinerary(familyId: string, tripId: string, callback: (days: ItineraryDay[]) => void): Unsub {
  if (!isFirebaseEnabled) {
    if (!itinerarySubs.has(tripId)) itinerarySubs.set(tripId, new Set())
    itinerarySubs.get(tripId)!.add(callback)
    callback(local.getItineraryByTrip(tripId))
    return () => itinerarySubs.get(tripId)?.delete(callback)
  }
  return remote.subscribeItinerary(familyId, tripId, callback)
}

export async function addDay(familyId: string, tripId: string, day: Omit<ItineraryDay, 'id'>): Promise<ItineraryDay> {
  if (!isFirebaseEnabled) {
    const d = local.addItineraryDay(tripId, day)
    notifyItinerary(tripId)
    return d
  }
  return remote.addDay(familyId, tripId, day)
}

export async function deleteDay(familyId: string, tripId: string, dayId: string): Promise<void> {
  if (!isFirebaseEnabled) {
    local.deleteItineraryDay(tripId, dayId)
    notifyItinerary(tripId)
    return
  }
  return remote.deleteDay(familyId, tripId, dayId)
}

export async function addActivity(familyId: string, tripId: string, dayId: string, activity: Omit<Activity, 'id'>): Promise<Activity> {
  if (!isFirebaseEnabled) {
    local.addActivity(tripId, dayId, activity)
    const days = local.getItineraryByTrip(tripId)
    const day = days.find((d) => d.id === dayId)!
    const newAct = day.activities[day.activities.length - 1]
    notifyItinerary(tripId)
    return newAct
  }
  return remote.addActivity(familyId, tripId, dayId, activity)
}

export async function updateActivities(familyId: string, tripId: string, dayId: string, activities: Activity[]): Promise<void> {
  if (!isFirebaseEnabled) {
    local.updateItineraryDay(tripId, dayId, { activities })
    notifyItinerary(tripId)
    return
  }
  return remote.updateActivities(familyId, tripId, dayId, activities)
}
