export type User = {
  name: string
  username: string
  url?: string
}

export type KataRank = {
  id: number 
  name: string
  color: string
}

export type Kata = {
  id: string
  name: string
  completedAt: string
  rank: KataRank
  url: string
}

export type Katas = (Kata | null)[]

export type UserResponse = {
  name: string
  username: string
  url?: string
  katas: Katas
}