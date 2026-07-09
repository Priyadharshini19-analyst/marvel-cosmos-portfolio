import styles from './Projects.module.css';

const PROJECTS = [
  {
    emoji: '🤖',
    tag: 'AI Research',
    title: 'JARVIS-CORE — Autonomous AI Agent',
    desc: 'Multi-modal AI agent capable of reasoning, planning, and executing complex tasks using tool-use and memory systems.',
    techs: ['GPT-4', 'LangChain', 'Python', 'FastAPI'],
  },
  {
    emoji: '🌌',
    tag: '3D Web',
    title: 'NEXUS PORTAL — 3D Data Visualizer',
    desc: 'Real-time 3D knowledge graph visualization with 100k+ nodes rendered at 60fps using custom WebGL shaders.',
    techs: ['Three.js', 'WebGL', 'D3.js', 'React'],
  },
  {
    emoji: '📊',
    tag: 'Data Science',
    title: 'STARK ANALYTICS — AI Dashboard',
    desc: 'Predictive analytics platform with AI-powered anomaly detection and real-time streaming data pipelines.',
    techs: ['Python', 'Pandas', 'TensorFlow', 'Next.js'],
  },
];

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.inner}>
        <p className="section-eyebrow">Deployed Systems</p>
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardThumb}>
                {project.emoji}
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardTag}>{project.tag}</p>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.techList}>
                  {project.techs.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;