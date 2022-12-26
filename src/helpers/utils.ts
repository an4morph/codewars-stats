import { POINTS } from './data'
import { Katas, UserResponse } from './types'

export const calcPoints = (katas: Katas, startDate?: Date, endDate?: Date) => {
  return katas.reduce((acc, curr) => {
    if (!curr) return acc
    if (!startDate || !endDate) return acc + POINTS[curr.rank.name]
    const isInRange = startDate >= new Date(curr.completedAt) && endDate <= new Date(curr.completedAt)
    return acc + (isInRange ? POINTS[curr.rank.name] : 0)
  }, 0)
}

export const formatDateForInput = (yourDate: Date) => {
  const offset = yourDate.getTimezoneOffset()
  const newDate = new Date(yourDate.getTime() - (offset * 60 * 1000))
  return newDate.toISOString().split('T')[0]
}

export const sortByPoints = (data: UserResponse[]) => data.sort((a, b) => b.totalPoints - a.totalPoints)