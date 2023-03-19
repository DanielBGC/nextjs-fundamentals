import styles from '../styles/StyledPage.module.css';
import Link from 'next/link'

export default function styledPage() {
  return(
    <div className={styles.purpleDiv}>
      <h1>Styled Page</h1>

      <Link href='/'>Go Back to Home</Link>
    </div>
  )
}