import styles from '../styles/Layout.module.css';
import Header from '@/components/Header';
import NavLink from './NavLink';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header></Header>
        <NavLink href='/' text='Go Back to Home' />
      </div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
}
