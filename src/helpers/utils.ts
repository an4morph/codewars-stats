import { POINTS } from './data'
import { Katas } from './types'

export const calcPoints = (katas: Katas) => {
  return katas.reduce((acc, curr) => {
    if (!curr) return acc
    return acc + POINTS[curr.rank.name]
  }, 0)
}

export const formatDateForInput = (yourDate: Date) => {
  const offset = yourDate.getTimezoneOffset()
  const newDate = new Date(yourDate.getTime() - (offset*60*1000))
  return newDate.toISOString().split('T')[0]
}