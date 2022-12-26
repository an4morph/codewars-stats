import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & input {
    margin-right: 20px;
    margin-bottom: 20px;
    min-width: 200px;
  }
  & label div {
    font-weight: 700;
    margin-bottom: 8px;
  }
`