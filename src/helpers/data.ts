import { Kyu, User } from "./types"

export const DEFAULT_DATES = {
  start: new Date(2022, 11, 27),
  end: new Date(),
}

export const USERS: User[] = [
  {
    name: 'Адиль',
    username: 'Usubaliev',
    url: 'https://www.codewars.com/users/Usubaliev'
  },
  {
    name: 'Азат',
    username: 'Azakee',
    url: 'https://www.codewars.com/users/Azakee'
  },
  {
    name: 'Айганыш',
    username: 'Aiganysh%20',
    url: 'https://www.codewars.com/users/Azakee'
  },
  {
    name: 'Аким',
    username: 'myrzabekovv',
    url: 'https://www.codewars.com/users/myrzabekovv'
  },
  {
    name: 'Байэла',
    username: 'bayellaisss',
    url: 'https://www.codewars.com/users/bayellaisss'
  },
  {
    name: 'Бегали',
    username: 'begali099',
    url: 'https://www.codewars.com/users/begali099'
  },
  {
    name: 'Нурэл',
    username: 'billbeymm',
    url: 'https://www.codewars.com/users/billbeymm'
  },
  {
    name: 'Владимир',
    username: 'MrFarEast',
    url: 'https://www.codewars.com/users/MrFarEast'
  },
  {
    name: 'Жанболот',
    username: 'ZhanbolotAbdrasilov17',
    url: 'https://www.codewars.com/users/ZhanbolotAbdrasilov17'
  },
  {
    name: 'Эрбол',
    username: 'ErbolSh',
    url: 'https://www.codewars.com/users/ErbolSh'
  },
  {
    name: 'Эмир',
    username: 'Orzbkv_5',
    url: 'https://www.codewars.com/users/Orzbkv_5'
  },
  {
    name: 'Акжол',
    username: 'aaidarov',
    url: 'https://www.codewars.com/users/aaidarov'
  },
  {
    name: 'Жибек',
    username: 'ZhibekTalipova',
    url: 'https://www.codewars.com/users/ZhibekTalipova'
  },
]

export const POINTS: Record<Kyu, number> = {
  '8 kyu': 1,
  '7 kyu': 4,
  '6 kyu': 8,
  '5 kyu': 12,
  '4 kyu': 20,
  '3 kyu': 30,
  '2 kyu': 50,
  '1 kyu': 70,
}