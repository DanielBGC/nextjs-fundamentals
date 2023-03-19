import styles from '../styles/StyledPage.module.css';
import Layout from '@/components/Layout';

export default function styledPage() {
  return(
    <Layout>
      <div className={styles.purpleDiv}>
        <h1>Styled Page</h1>
      </div>
    </Layout>
  )
}