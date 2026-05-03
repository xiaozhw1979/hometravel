import { Trip, Photo, ItineraryDay, Activity } from './types';

const TRIPS_KEY = 'hometravel_trips';
const PHOTOS_KEY = 'hometravel_photos';
const ITINERARY_KEY = 'hometravel_itinerary';

// ── Trips ────────────────────────────────────────────────────────────────────

export function getTrips(): Trip[] {
  try {
    const raw = localStorage.getItem(TRIPS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTrips(trips: Trip[]): void {
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
}

export function getTrip(id: string): Trip | undefined {
  return getTrips().find(t => t.id === id);
}

export function createTrip(trip: Omit<Trip, 'id' | 'createdAt'>): Trip {
  const newTrip: Trip = {
    ...trip,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const trips = getTrips();
  trips.unshift(newTrip);
  saveTrips(trips);
  return newTrip;
}

export function updateTrip(id: string, updates: Partial<Trip>): Trip | null {
  const trips = getTrips();
  const idx = trips.findIndex(t => t.id === id);
  if (idx === -1) return null;
  trips[idx] = { ...trips[idx], ...updates };
  saveTrips(trips);
  return trips[idx];
}

export function deleteTrip(id: string): void {
  saveTrips(getTrips().filter(t => t.id !== id));
  // Cascade delete photos and itinerary
  savePhotos(getPhotos().filter(p => p.tripId !== id));
  const itinerary = getItinerary();
  delete itinerary[id];
  saveItinerary(itinerary);
}

// ── Photos ───────────────────────────────────────────────────────────────────

export function getPhotos(): Photo[] {
  try {
    const raw = localStorage.getItem(PHOTOS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePhotos(photos: Photo[]): void {
  localStorage.setItem(PHOTOS_KEY, JSON.stringify(photos));
}

export function getPhotosByTrip(tripId: string): Photo[] {
  return getPhotos().filter(p => p.tripId === tripId);
}

export function addPhoto(photo: Omit<Photo, 'id' | 'createdAt'>): Photo {
  const newPhoto: Photo = {
    ...photo,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const photos = getPhotos();
  photos.push(newPhoto);
  savePhotos(photos);
  return newPhoto;
}

export function updatePhoto(id: string, updates: Partial<Photo>): void {
  const photos = getPhotos();
  const idx = photos.findIndex(p => p.id === id);
  if (idx !== -1) {
    photos[idx] = { ...photos[idx], ...updates };
    savePhotos(photos);
  }
}

export function deletePhoto(id: string): void {
  savePhotos(getPhotos().filter(p => p.id !== id));
}

// ── Itinerary ────────────────────────────────────────────────────────────────
// Stored as a map: { [tripId]: ItineraryDay[] }

type ItineraryMap = Record<string, ItineraryDay[]>;

export function getItinerary(): ItineraryMap {
  try {
    const raw = localStorage.getItem(ITINERARY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveItinerary(map: ItineraryMap): void {
  localStorage.setItem(ITINERARY_KEY, JSON.stringify(map));
}

export function getItineraryByTrip(tripId: string): ItineraryDay[] {
  const map = getItinerary();
  return (map[tripId] || []).sort((a, b) => a.date.localeCompare(b.date));
}

export function saveItineraryForTrip(tripId: string, days: ItineraryDay[]): void {
  const map = getItinerary();
  map[tripId] = days;
  saveItinerary(map);
}

export function addItineraryDay(tripId: string, day: Omit<ItineraryDay, 'id'>): ItineraryDay {
  const newDay: ItineraryDay = { ...day, id: crypto.randomUUID() };
  const days = getItineraryByTrip(tripId);
  days.push(newDay);
  saveItineraryForTrip(tripId, days);
  return newDay;
}

export function updateItineraryDay(tripId: string, dayId: string, updates: Partial<ItineraryDay>): void {
  const days = getItineraryByTrip(tripId);
  const idx = days.findIndex(d => d.id === dayId);
  if (idx !== -1) {
    days[idx] = { ...days[idx], ...updates };
    saveItineraryForTrip(tripId, days);
  }
}

export function deleteItineraryDay(tripId: string, dayId: string): void {
  const days = getItineraryByTrip(tripId).filter(d => d.id !== dayId);
  saveItineraryForTrip(tripId, days);
}

export function addActivity(tripId: string, dayId: string, activity: Omit<Activity, 'id'>): void {
  const days = getItineraryByTrip(tripId);
  const day = days.find(d => d.id === dayId);
  if (day) {
    day.activities.push({ ...activity, id: crypto.randomUUID() });
    saveItineraryForTrip(tripId, days);
  }
}

export function updateActivity(tripId: string, dayId: string, activityId: string, updates: Partial<Activity>): void {
  const days = getItineraryByTrip(tripId);
  const day = days.find(d => d.id === dayId);
  if (day) {
    const aIdx = day.activities.findIndex(a => a.id === activityId);
    if (aIdx !== -1) {
      day.activities[aIdx] = { ...day.activities[aIdx], ...updates };
      saveItineraryForTrip(tripId, days);
    }
  }
}

export function deleteActivity(tripId: string, dayId: string, activityId: string): void {
  const days = getItineraryByTrip(tripId);
  const day = days.find(d => d.id === dayId);
  if (day) {
    day.activities = day.activities.filter(a => a.id !== activityId);
    saveItineraryForTrip(tripId, days);
  }
}

// ── Sample Data ──────────────────────────────────────────────────────────────

export function seedSampleData(): void {
  if (getTrips().length > 0) return; // already seeded

  const trip1Id = crypto.randomUUID();
  const trip2Id = crypto.randomUUID();
  const trip3Id = crypto.randomUUID();

  const trips: Trip[] = [
    {
      id: trip1Id,
      name: '京都赏樱之旅',
      destination: '日本·京都',
      startDate: '2024-03-28',
      endDate: '2024-04-03',
      coverPhoto: 'gradient-rose',
      description: '春天的京都樱花盛开，我们一家人漫步在岚山和祇园，感受日本传统文化的魅力。金阁寺、伏见稻荷、岚山竹林……每一处都美得令人窒息。',
      createdAt: '2024-03-20T08:00:00Z',
    },
    {
      id: trip2Id,
      name: '云南大理洱海假期',
      destination: '中国·云南·大理',
      startDate: '2024-07-10',
      endDate: '2024-07-17',
      coverPhoto: 'gradient-blue',
      description: '洱海边的慢时光，骑行环湖，看苍山雪，品白族美食。孩子们在沙滩上追逐嬉戏，是这个夏天最美好的记忆。',
      createdAt: '2024-07-01T08:00:00Z',
    },
    {
      id: trip3Id,
      name: '厦门鼓浪屿周末游',
      destination: '中国·福建·厦门',
      startDate: '2024-10-01',
      endDate: '2024-10-04',
      coverPhoto: 'gradient-amber',
      description: '国庆假期，带孩子来厦门感受海风，鼓浪屿的老建筑和小巷子让人流连忘返。海鲜、沙茶面、土笋冻，一次舌尖上的旅行。',
      createdAt: '2024-09-25T08:00:00Z',
    },
  ];

  saveTrips(trips);

  // Itinerary for trip1
  const day1Id = crypto.randomUUID();
  const day2Id = crypto.randomUUID();
  const day3Id = crypto.randomUUID();

  saveItineraryForTrip(trip1Id, [
    {
      id: day1Id,
      date: '2024-03-28',
      activities: [
        { id: crypto.randomUUID(), title: '抵达京都', notes: '乘坐新干线从东京到京都，入住民宿', location: '京都站', time: '14:00' },
        { id: crypto.randomUUID(), title: '祇园散步', notes: '傍晚漫步祇园花见小路，运气好能遇到艺伎', location: '祇园·花见小路', time: '17:00' },
        { id: crypto.randomUUID(), title: '抹茶料理晚餐', notes: '预约了一家百年老铺的怀石料理', location: '先斗町', time: '19:30' },
      ],
    },
    {
      id: day2Id,
      date: '2024-03-29',
      activities: [
        { id: crypto.randomUUID(), title: '岚山竹林', notes: '早起避开人流，竹林晨光美极了，孩子们非常兴奋', location: '嵐山·竹林小径', time: '08:00' },
        { id: crypto.randomUUID(), title: '天龙寺庭园', notes: '世界文化遗产，枯山水庭园配上樱花绝美', location: '天龙寺', time: '10:00' },
        { id: crypto.randomUUID(), title: '岚山渡月桥赏樱', notes: '樱花与保津川的完美组合，拍了很多全家福', location: '渡月桥', time: '13:00' },
      ],
    },
    {
      id: day3Id,
      date: '2024-03-30',
      activities: [
        { id: crypto.randomUUID(), title: '伏见稻荷大社', notes: '千本鸟居太震撼了！爬到山顶俯瞰京都全景', location: '伏见稻荷大社', time: '09:00' },
        { id: crypto.randomUUID(), title: '金阁寺', notes: '金光闪闪的金阁倒映在镜湖池上，如梦如幻', location: '金阁寺', time: '14:00' },
      ],
    },
  ]);

  // Itinerary for trip2
  saveItineraryForTrip(trip2Id, [
    {
      id: crypto.randomUUID(),
      date: '2024-07-10',
      activities: [
        { id: crypto.randomUUID(), title: '抵达大理古城', notes: '入住洱海边的精品民宿，推开窗就能看到海', location: '大理古城', time: '15:00' },
        { id: crypto.randomUUID(), title: '古城夜市', notes: '品尝乳饼、米线和各种云南特色小吃', location: '大理古城洋人街', time: '19:00' },
      ],
    },
    {
      id: crypto.randomUUID(),
      date: '2024-07-11',
      activities: [
        { id: crypto.randomUUID(), title: '环洱海骑行', notes: '骑行全程约100公里，我们选了南线精华段约40公里', location: '洱海·才村码头出发', time: '07:30' },
        { id: crypto.randomUUID(), title: '双廊古镇', notes: '靠海的小镇，客栈林立，傍晚看洱海落日', location: '双廊古镇', time: '16:00' },
      ],
    },
  ]);

  // Itinerary for trip3
  saveItineraryForTrip(trip3Id, [
    {
      id: crypto.randomUUID(),
      date: '2024-10-01',
      activities: [
        { id: crypto.randomUUID(), title: '南普陀寺', notes: '香火鼎盛，素斋也很好吃', location: '南普陀寺', time: '09:00' },
        { id: crypto.randomUUID(), title: '厦门大学散步', notes: '校园美如画，建筑典雅，孩子们很喜欢', location: '厦门大学', time: '11:00' },
        { id: crypto.randomUUID(), title: '曾厝垵文艺街区', notes: '文青风小店林立，各种创意伴手礼', location: '曾厝垵', time: '15:00' },
      ],
    },
    {
      id: crypto.randomUUID(),
      date: '2024-10-02',
      activities: [
        { id: crypto.randomUUID(), title: '渡轮前往鼓浪屿', notes: '国庆期间游客多，提前买好船票', location: '厦门轮渡码头', time: '08:30' },
        { id: crypto.randomUUID(), title: '日光岩', notes: '登上最高点俯瞰整个鼓浪屿和厦门岛', location: '日光岩', time: '10:00' },
        { id: crypto.randomUUID(), title: '菽庄花园', notes: '依海而建，小桥流水，非常适合拍照', location: '菽庄花园', time: '14:00' },
      ],
    },
  ]);
}
