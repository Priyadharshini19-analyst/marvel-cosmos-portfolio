import styles from './Skills.module.css';

const SKILLS = [
  { icon: '🤖', title: 'AI / Machine Learning', desc: 'Building neural networks, training ML models, and deploying AI-powered applications.' },
  { icon: '⚡', title: 'React / JavaScript', desc: 'Modern frontend with React, Next.js, TypeScript and advanced state management.' },
  { icon: '🐍', title: 'Python', desc: 'Data analysis, automation, FastAPI backends, and ML pipelines with Python.' },
  { icon: '🔮', title: 'Three.js / WebGL', desc: 'Immersive 3D web experiences using Three.js, WebGL shaders, and GLSL.' },
];

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.inner}>
        <p className="section-eyebrow">Tech Arsenal</p>
        <h2 className="section-title">Capabilities</h2>
        <div className={styles.grid}>
          {SKILLS.map((skill, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardIcon}>{skill.icon}</span>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardDesc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;