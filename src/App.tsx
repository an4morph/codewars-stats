import { ChangeEvent, useEffect, useState } from "react"

import { Dates } from "./components/dates"
import { Table } from "./components/list"
import { api } from "./helpers/api"
import { UserResponse } from "./helpers/types"
import { sortByPoints } from "./helpers/utils"
import { Container } from "./styles/App.styled"
import { Theme } from "./styles/theme"

const App = (): JSX.Element => {
  const [users, setUsers] = useState<UserResponse[]>([])
  const [startDate, setStartDate] = useState<Date>(new Date(2022, 11, 10))
  const [endDate, setEndDate] = useState<Date>(new Date())

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const setter = e.target.name === 'startDate' ? setStartDate : setEndDate
    setter(new Date(e.target.value))
  }

  useEffect(() => {
    api.getUsers()
      .then((data) => {
        setUsers(sortByPoints(data))
      })
  }, [startDate, endDate])
  
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
