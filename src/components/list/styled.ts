import styled from "styled-components"

export const TableContainer = styled.table`
  width: 100%;
  font-size: 18px;
  padding-bottom: 60px;
  
  & th, & td {
    text-align: left;
    padding: 20px;

    @media (min-width: 768px) {
      padding: 10px 30px 10px 10px;
    }
  }
  & tbody tr:nth-child(2n - 1) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const Name = styled.div`
  font-size: 24px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 0;
  }
`
export const ProfileLinkWithName = styled.div`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Points = styled.td`
  font-size: 32px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`