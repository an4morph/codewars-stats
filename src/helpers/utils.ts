import { POINTS } from './data'
import { Katas } from './types'

export const calcPoints = (katas: Katas) => {
  return katas.reduce((acc, curr) => {
    if (!curr) return acc
    return acc + POINTS[curr.rank.name]
  }, 0)
}