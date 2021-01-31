import styles from './css/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src="/zot-court-logo.svg" className={styles.zotLogo} />
    </div>
  );
}

export default Logo;