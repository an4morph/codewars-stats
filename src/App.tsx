import { ChangeEvent, useEffect, useState } from "react"

import { Dates } from "./components/dates"
import { Table } from "./components/list"
import { api } from "./helpers/api"
import { DEFAULT_DATES } from "./helpers/data"
import { UserResponse } from "./helpers/types"
import { recalcUserPoints, sortByPoints } from "./helpers/utils"
import { Container } from "./styles/App.styled"
import { Theme } from "./styles/theme"

const App = (): JSX.Element => {
  const [users, setUsers] = useState<UserResponse[]>([])
  const [startDate, setStartDate] = useState<Date>(DEFAULT_DATES.start)
  const [endDate, setEndDate] = useState<Date>(DEFAULT_DATES.end)

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const isStartDate = e.target.name === 'startDate'
    const newDate = new Date(e.target.value)
    const currStartDate = isStartDate ? newDate : startDate
    const currEndDate = isStartDate ? endDate : newDate
    
    setUsers(sortByPoints(recalcUserPoints(users, currStartDate, currEndDate)))
    const setter = isStartDate ? setStartDate : setEndDate
    setter(newDate)
  }

  useEffect(() => {
    api.getUsers()
      .then((data) => {
        setUsers(sortByPoints(recalcUserPoints(data, DEFAULT_DATES.start, DEFAULT_DATES.end)))
      })
  }, [])
  
  return (
    <Theme>
      <Container>
        <h1>Codify Codewars Stats</h1>
        <Dates
          endDate={endDate}
          onChange={handleChangeDate}
          startDate={startDate}
        />
        <Table users={users} />
      </Container>
    </Theme>
  )
}

export default App
