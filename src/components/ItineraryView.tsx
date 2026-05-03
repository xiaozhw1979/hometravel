import { useState } from 'react'
import {
  Plus, Trash2, Pencil, Check, MapPin, Clock, CalendarPlus, ChevronDown, ChevronUp,
} from 'lucide-react'
import { ItineraryDay, Activity } from '../types'
import { useAuth } from '../contexts/AuthContext'
import {
  addDay,
  deleteDay,
  addActivity,
  updateActivities,
} from '../firestore'

interface ItineraryViewProps {
  tripId: string
  days: ItineraryDay[]
  onDaysChange: (days: ItineraryDay[]) => void
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（周${weekdays[d.getDay()]}）`
}

// ─── Activity form (inline edit / create) ────────────────────────────────────
interface ActivityFormProps {
  initial?: Partial<Activity>
  onSave: (data: Omit<Activity, 'id'>) => void
  onCancel: () => void
}

function ActivityForm({ initial, onSave, onCancel }: ActivityFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [notes, setNotes] = useState(initial?.notes ?? '')
  const [location, setLocation] = useState(initial?.location ?? '')
  const [time, setTime] = useState(initial?.time ?? '')
  const [titleErr, setTitleErr] = useState('')

  function handleSave() {
    if (!title.trim()) { setTitleErr('请输入活动名称'); return }
    onSave({ title: title.trim(), notes: notes.trim(), location: location.trim(), time: time.trim() })
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3 mt-2">
      <div>
        <input
          autoFocus
          type="text"
          value={title}
          onChange={(e) => { setTitle(e.target.value); setTitleErr('') }}
          placeholder="活动名称 *"
          className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white ${titleErr ? 'border-red-400' : 'border-gray-200'}`}
        />
        {titleErr && <p className="text-red-500 text-xs mt-0.5">{titleErr}</p>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="地点"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white"
        />
      </div>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="备注（可选）"
        rows={2}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white resize-none"
      />
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          取消
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-1.5 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors flex items-center gap-1.5"
        >
          <Check size={14} />
          保存
        </button>
      </div>
    </div>
  )
}

// ─── Single activity row ──────────────────────────────────────────────────────
interface ActivityItemProps {
  activity: Activity
  familyId: string
  tripId: string
  dayId: string
  allActivities: Activity[]
  onUpdated: (a: Activity) => void
  onDeleted: (id: string) => void
}

function ActivityItem({ activity, familyId, tripId, dayId, allActivities, onUpdated, onDeleted }: ActivityItemProps) {
  const [editing, setEditing] = useState(false)

  async function handleSave(data: Omit<Activity, 'id'>) {
    const updated = { ...activity, ...data }
    // Optimistic
    onUpdated(updated)
    setEditing(false)
    const newList = allActivities.map((a) => a.id === activity.id ? updated : a)
    await updateActivities(familyId, tripId, dayId, newList)
  }

  async function handleDelete() {
    if (!window.confirm(`确认删除「${activity.title}」？`)) return
    // Optimistic
    onDeleted(activity.id)
    const newList = allActivities.filter((a) => a.id !== activity.id)
    await updateActivities(familyId, tripId, dayId, newList)
  }

  if (editing) {
    return (
      <ActivityForm
        initial={activity}
        onSave={handleSave}
        onCancel={() => setEditing(false)}
      />
    )
  }

  return (
    <div className="flex gap-3 group py-2">
      {/* Time bubble */}
      <div className="flex flex-col items-center flex-shrink-0 w-12">
        {activity.time ? (
          <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full whitespace-nowrap">
            {activity.time}
          </span>
        ) : (
          <div className="w-2 h-2 rounded-full bg-amber-300 mt-1" />
        )}
        <div className="flex-1 w-px bg-amber-200 mt-1" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-2">
        <div className="flex items-start justify-between gap-2">
          <p className="font-medium text-gray-900 text-sm leading-snug">{activity.title}</p>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
            <button
              onClick={() => setEditing(true)}
              className="p-1 hover:bg-amber-100 rounded-lg text-gray-400 hover:text-amber-600 transition-colors"
              title="编辑"
            >
              <Pencil size={13} />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
              title="删除"
            >
              <Trash2 size={13} />
            </button>
          </div>
        </div>
        {activity.location && (
          <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-500">
            <MapPin size={11} className="text-amber-400 flex-shrink-0" />
            <span className="truncate">{activity.location}</span>
          </div>
        )}
        {activity.notes && (
          <p className="mt-1 text-xs text-gray-500 leading-relaxed">{activity.notes}</p>
        )}
      </div>
    </div>
  )
}

// ─── Single day card ─────────────────────────────────────────────────────────
interface DayCardProps {
  day: ItineraryDay
  familyId: string
  tripId: string
  dayNumber: number
  onDayUpdated: (day: ItineraryDay) => void
  onDayDeleted: (id: string) => void
}

function DayCard({ day, familyId, tripId, dayNumber, onDayUpdated, onDayDeleted }: DayCardProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [addingActivity, setAddingActivity] = useState(false)

  async function handleAddActivity(data: Omit<Activity, 'id'>) {
    const newActivity = await addActivity(familyId, tripId, day.id, data)
    const updated: ItineraryDay = {
      ...day,
      activities: [...day.activities, newActivity],
    }
    onDayUpdated(updated)
    setAddingActivity(false)
  }

  function handleActivityUpdated(updated: Activity) {
    onDayUpdated({
      ...day,
      activities: day.activities.map((a) => (a.id === updated.id ? updated : a)),
    })
  }

  function handleActivityDeleted(id: string) {
    onDayUpdated({ ...day, activities: day.activities.filter((a) => a.id !== id) })
  }

  async function handleDeleteDay() {
    if (!window.confirm(`确认删除第 ${dayNumber} 天的行程？`)) return
    // Optimistic
    onDayDeleted(day.id)
    await deleteDay(familyId, tripId, day.id)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden fade-in">
      {/* Day header */}
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-amber-50 transition-colors"
        onClick={() => setCollapsed((c) => !c)}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D{dayNumber}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">第 {dayNumber} 天</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Clock size={11} />
              {formatDate(day.date)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {day.activities.length} 项活动
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); handleDeleteDay() }}
            className="p-1.5 hover:bg-red-50 text-gray-300 hover:text-red-400 rounded-lg transition-colors"
            title="删除这一天"
          >
            <Trash2 size={14} />
          </button>
          {collapsed ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronUp size={16} className="text-gray-400" />}
        </div>
      </div>

      {/* Activities */}
      {!collapsed && (
        <div className="px-4 pb-4">
          {day.activities.length === 0 && !addingActivity && (
            <p className="text-sm text-gray-400 py-3 text-center">暂无活动，点击下方添加</p>
          )}
          {day.activities.map((act) => (
            <ActivityItem
              key={act.id}
              activity={act}
              familyId={familyId}
              tripId={tripId}
              dayId={day.id}
              allActivities={day.activities}
              onUpdated={handleActivityUpdated}
              onDeleted={handleActivityDeleted}
            />
          ))}

          {addingActivity ? (
            <ActivityForm
              onSave={handleAddActivity}
              onCancel={() => setAddingActivity(false)}
            />
          ) : (
            <button
              onClick={() => setAddingActivity(true)}
              className="mt-2 w-full flex items-center justify-center gap-1.5 text-sm text-amber-600 hover:text-amber-700 border border-dashed border-amber-300 hover:border-amber-400 rounded-xl py-2 transition-colors"
            >
              <Plus size={15} />
              添加活动
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Add Day Form ─────────────────────────────────────────────────────────────
interface AddDayFormProps {
  onAdd: (date: string) => void
  onCancel: () => void
  existingDates: string[]
}

function AddDayForm({ onAdd, onCancel, existingDates }: AddDayFormProps) {
  const [date, setDate] = useState('')
  const [err, setErr] = useState('')

  function handleAdd() {
    if (!date) { setErr('请选择日期'); return }
    if (existingDates.includes(date)) { setErr('该日期已存在'); return }
    onAdd(date)
  }

  return (
    <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-4 flex items-end gap-3 slide-up">
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-600 mb-1">选择日期</label>
        <input
          autoFocus
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); setErr('') }}
          className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${err ? 'border-red-400' : 'border-gray-200'}`}
        />
        {err && <p className="text-red-500 text-xs mt-0.5">{err}</p>}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onCancel}
          className="px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors"
        >
          取消
        </button>
        <button
          onClick={handleAdd}
          className="px-4 py-2.5 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-colors"
        >
          添加
        </button>
      </div>
    </div>
  )
}

// ─── Main ItineraryView ───────────────────────────────────────────────────────
export default function ItineraryView({ tripId, days, onDaysChange }: ItineraryViewProps) {
  const { family } = useAuth()
  const [addingDay, setAddingDay] = useState(false)

  async function handleAddDay(date: string) {
    if (!family) return
    const newDay = await addDay(family.id, tripId, { date, activities: [] })
    const updated = [...days, newDay].sort((a, b) => a.date.localeCompare(b.date))
    onDaysChange(updated)
    setAddingDay(false)
  }

  function handleDayUpdated(updated: ItineraryDay) {
    onDaysChange(days.map((d) => (d.id === updated.id ? updated : d)))
  }

  function handleDayDeleted(id: string) {
    onDaysChange(days.filter((d) => d.id !== id))
  }

  if (days.length === 0 && !addingDay) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <CalendarPlus size={48} className="mb-4 opacity-40" />
        <p className="text-base font-medium mb-1">还没有行程安排</p>
        <p className="text-sm mb-6">添加每天的行程，规划完美旅行</p>
        <button
          onClick={() => setAddingDay(true)}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          添加第一天
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Day cards */}
      {days.map((day, idx) => (
        <DayCard
          key={day.id}
          day={day}
          familyId={family?.id ?? ''}
          tripId={tripId}
          dayNumber={idx + 1}
          onDayUpdated={handleDayUpdated}
          onDayDeleted={handleDayDeleted}
        />
      ))}

      {/* Add day */}
      {addingDay ? (
        <AddDayForm
          onAdd={handleAddDay}
          onCancel={() => setAddingDay(false)}
          existingDates={days.map((d) => d.date)}
        />
      ) : (
        <button
          onClick={() => setAddingDay(true)}
          className="w-full flex items-center justify-center gap-2 text-sm text-amber-600 hover:text-amber-700 border border-dashed border-amber-300 hover:border-amber-400 rounded-2xl py-3.5 bg-white hover:bg-amber-50 transition-all shadow-sm"
        >
          <Plus size={16} />
          添加行程天
        </button>
      )}
    </div>
  )
}
