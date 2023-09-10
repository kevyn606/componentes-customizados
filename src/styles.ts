import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#a7727d',
  secundaria: '#f9f5e7'
}

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 20px;
}

`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
