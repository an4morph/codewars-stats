import { useEffect, useState } from "react"

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

  console.log(users)
  
  return (
    <Theme>
      <Container>
        <Table />
      </Container>
    </Theme>
  )
}

export default App
