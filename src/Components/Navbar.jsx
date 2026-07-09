import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>STARK.DEV</div>
      <div className={styles.links}>
        <span className={styles.link}>Home</span>
        <span className={styles.link}>Skills</span>
        <span className={styles.link}>Projects</span>
        <span className={styles.link}>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;