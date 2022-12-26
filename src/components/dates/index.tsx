import { ChangeEvent } from "react"

import { formatDateForInput } from "../../helpers/utils"
import { Container } from "./styled"

type Props = {
  startDate: Date
  endDate: Date
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Dates = ({ startDate, endDate, onChange }: Props): JSX.Element => {
  return (
    <Container>
      <label htmlFor="startDate">
        <div>Дата начала</div>
        <input 
          id="startDate"
          name="startDate"
          onChange={onChange}
          type="date"
          value={formatDateForInput(startDate)}
        />
      </label>
      <label htmlFor="endDate">
        <div>Дата завершения</div>
        <input 
          id="endDate"
          name="endDate"
          onChange={onChange}
          type="date"
          value={formatDateForInput(endDate)}
        />
      </label>
    </Container>
  )
}

