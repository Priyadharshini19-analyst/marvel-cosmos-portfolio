import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>
        AI Engineer &middot; Full Stack Developer
      </p>
      <h1 className={styles.title}>
        I Build Intelligent Systems
      </h1>
      <p className={styles.subtitle}>
        Welcome to my Marvel-themed portfolio. I create AI-powered
        applications and immersive 3D web experiences.
      </p>
      <div className={styles.buttonGroup}>
        <button className={styles.btnPrimary}>View Projects</button>
        <button className={styles.btnOutline}>Download CV</button>
      </div>
    </section>
  );
}

export default Hero;