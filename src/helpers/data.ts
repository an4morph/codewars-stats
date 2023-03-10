import { Kyu, User } from "./types"

export const DEFAULT_DATES = {
  start: new Date(2023, 2, 9),
  end: new Date(),
}

export const USERS: User[] = [
  {
    name: 'Абай Тургунбай уулу',
    username: 'abaikb',
    url: 'https://www.codewars.com/users/abaikb'
  },
  {
    name: 'Абдульазиз Лансаров',
    username: 'lansarov-aziz',
    url: 'https://www.codewars.com/users/lansarov-aziz'
  },
  {
    name: 'Азиз Чидеров',
    username: 'Aziz%20Chiderov',
    url: 'https://www.codewars.com/users/Aziz%20Chiderov'
  },
  {
    name: 'Айпери Жороева',
    username: 'Aiperiwa',
    url: 'https://www.codewars.com/users/Aiperiwa'
  },
  {
    name: 'Аида Токтомушова',
    username: 'Toktomushova',
    url: 'https://www.codewars.com/users/Toktomushova'
  },
  {
    name: 'Виталий Воробьев',
    username: 'sparrowkg',
    url: 'https://www.codewars.com/users/sparrowkg'
  },
  {
    name: 'Асель Жанибекова',
    username: 'Aixiel',
    url: 'https://www.codewars.com/users/Aixiel'
  },
  {
    name: 'Женишгул Абдулдаханова',
    username: 'Abduldahanova',
    url: 'https://www.codewars.com/users/Abduldahanova'
  },
  {
    name: 'Саматбек Байызов',
    username: 'Samy4-byte',
    url: 'https://www.codewars.com/users/Samy4-byte'
  },
  {
    name: 'Суусара Матаева',
    username: 'suusara',
    url: 'https://www.codewars.com/users/suusara'
  },
  {
    name: 'Тансу Бактыбаева',
    username: 'tansubva',
    url: 'https://www.codewars.com/users/tansubva'
  },
  {
    name: 'Улукбек Сеитмамбетов',
    username: 'usb5858',
    url: 'https://www.codewars.com/users/usb5858'
  },
  {
    name: 'Эдиль Эргешов',
    username: 'klaus1233213',
    url: 'https://www.codewars.com/users/klaus1233213'
  },
  {
    name: 'Эсен Азимов',
    username: 'Esenaz',
    url: 'https://www.codewars.com/users/Esenaz'
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