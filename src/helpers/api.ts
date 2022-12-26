import { USERS } from "./data"
import { KataRank, Katas, UserResponse } from "./types"

const API = 'https://www.codewars.com/api/v1/'

const getUserKatas = (username: string, page = 0): Promise<{ data: { id: string, name: string, completedAt: string }[] }> => {
  const url = `${API}users/${username}/code-challenges/completed?page=${page}`
  return fetch(url).then(res => res.json())
}

const getKataInfo = (id: string): Promise<{ id: string, rank: KataRank, url: string }> => {
  const url = `${API}code-challenges/${id}`
  return fetch(url).then(res => res.json())
}

const getUserInfo = async (username: string): Promise<Katas> => {
  const katas = await getUserKatas(username)
  const ids: string[] = katas.data.map((kata) => kata.id)
  const data = katas.data.map(({ id, name, completedAt }) => ({ id, name, completedAt }))
  const kataInfo = await Promise.all(ids.map(id => getKataInfo(id)))

  return data.map((item) => {
    const kataItemInfo = kataInfo.find(kata => kata.id === item.id)
    if (!kataItemInfo) return null
    return { ...item, rank: kataItemInfo.rank, url: kataItemInfo.url }    
  })
}

const getUsers = async (): Promise<UserResponse[]> => {  
  const users = USERS.map(({ username }) => getUserInfo(username))
  
  return Promise.all(users)
    .then((arr) => {
      return arr.map((katas, i) => ({
        katas,
        ...USERS[i]
      }))
    })
}

export const api = {
  getUsers
}