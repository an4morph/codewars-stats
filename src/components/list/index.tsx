import { UserResponse } from "../../helpers/types"
import { TableContainer } from "./styled"

type Props = {
  users: UserResponse[]
}

export const Table = ({ users }: Props): JSX.Element => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Юзернэйм</th>
          <th>Ссылка на профиль</th>
          <th>Очки</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(({ username, name, url }) => (
            <tr key={username}>
              <td>{name}</td>
              <td>{username}</td>
              <td>{url ? (<a href={url}>Cсылка</a>) : 'Отсутствует'}</td>
              <td>X</td>
            </tr>
          ))
        }
      </tbody>
    </TableContainer>
  )
}

