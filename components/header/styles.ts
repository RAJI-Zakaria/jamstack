import { css } from '@emotion/react'

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`

const description = css`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);
`

const logo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export default {
  main,
  description,
  logo,
}
