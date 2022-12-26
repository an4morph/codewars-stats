import { useEffect, useState } from "react"

import { Dates } from "./components/dates"
import { Table } from "./components/list"
import { api } from "./helpers/api"
import { UserResponse } from "./helpers/types"
import { Container } from "./styles/App.styled"
import { Theme } from "./styles/theme"

const App = (): JSX.Element => {
  const [users, setUsers] = useState<UserResponse[]>([])

  useEffect(() => {
    api.getUsers().then(setUsers)
  }, [])
  
  return (
    <Theme>
      <Container>
        <Dates />
        <Table users={users} />
      </Container>
    </Theme>
  )
}

export default App
