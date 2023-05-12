import styles from './styles.ts'
const Header = () => {
  return (
    <div css={styles.main}>
      <div css={styles.logo}>
        <img src="/vercel.svg" alt="logo" />
      </div>

      <h1 className="title">React App2</h1>
    </div>
  )
}

export default Header
