export type User = {
  name: string
  username: string
  url?: string
}

export type Kyu = '1 kyu' | '2 kyu' | '3 kyu' | '4 kyu' | '5 kyu' | '6 kyu' | '7 kyu' | '8 kyu'

export type KataRank = {
  id: number 
  name: Kyu
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
  katas: Katas,
  totalKatas: number
  totalPoints: number
}