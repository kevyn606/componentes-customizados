import styled from 'styled-components'
import { cores } from '../../styles'

export const Vaga = styled.li`
  border: 1px solid ${cores.principal};
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  a {
    border-color: ${cores.secundaria};
    background-color: ${cores.principal};
    color: ${cores.secundaria};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &:hover {
    background-color: ${cores.principal};
    color: ${cores.secundaria};
  }

  &:hover a {
    border-color: ${cores.principal};
    background-color: ${cores.secundaria};
    color: ${cores.principal};
  }
`
