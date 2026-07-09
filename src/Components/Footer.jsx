import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>STARK.DEV</div>
      <p className={styles.copy}>
        &copy; 2025 // ALL SYSTEMS NOMINAL // BUILT WITH REACT + THREE.JS
      </p>
      <div className={styles.socials}>
        <button className={styles.socialBtn}>⭐</button>
        <button className={styles.socialBtn}>🐙</button>
        <button className={styles.socialBtn}>💼</button>
      </div>
    </footer>
  );
}

export default Footer;