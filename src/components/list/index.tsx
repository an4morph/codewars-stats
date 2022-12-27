import { UserResponse } from "../../helpers/types"
import { Name, Points, TableContainer } from "./styled"

type Props = {
  users: UserResponse[]
}

export const Table = ({ users }: Props): JSX.Element => {
  return (
    <TableContainer cellSpacing="0">
      <thead>
        <tr>
          <th>Имя</th>
          <th className="d-xs-none d-md-block">Юзернэйм</th>
          <th>Очки</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(({ username, name, url, totalPoints }) => {
            const profileLink = url ? (<a href={url}>{username}</a>) : username
            return (
              <tr key={username}>
                <td>
                  <Name>{name}</Name>
                  <div className="d-md-none">{profileLink}</div>
                </td>
                <td className="d-xs-none d-md-block">
                  {profileLink}
                </td>
                <Points>{totalPoints}</Points>
              </tr>
            )
          })
        }
      </tbody>
    </TableContainer>
  )
}

