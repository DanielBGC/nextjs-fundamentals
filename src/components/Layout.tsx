import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import Header from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header></Header>
        <Link href='/'>Go Back to Home</Link>
      </div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
}
