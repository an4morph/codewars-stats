import { ChangeEvent, useState } from "react"

import { formatDateForInput } from "../../helpers/utils"
import { Container } from "./styled"

export const Dates = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date(2022, 11, 10))
  const [endDate, setEndDate] = useState<Date>(new Date())

  const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value))
  }

  const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value))
  }

  return (
    <Container>
      <label htmlFor="startDate">
        <div>Дата начала</div>
        <input 
          id="startDate"
          name="startDate"
          onChange={handleChangeStartDate}
          type="date"
          value={formatDateForInput(startDate)}
        />
      </label>
      <label htmlFor="endDate">
        <div>Дата завершения</div>
        <input 
          id="endDate"
          name="endDate"
          onChange={handleChangeEndDate}
          type="date"
          value={formatDateForInput(endDate)}
        />
      </label>
    </Container>
  )
}

