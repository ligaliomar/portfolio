import { data } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div className={styles.label}>Ce que je maîtrise</div>
        <h2 className={styles.title}>Compétences</h2>
        <div className={styles.divider} />

        <div className={styles.grid}>
          {data.skills.map((skill) => (
            <div key={skill.name} className={styles.card}>
              <span className={styles.icon}>{skill.icon}</span>
              <div className={styles.name}>{skill.name}</div>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className={styles.pct}>{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
