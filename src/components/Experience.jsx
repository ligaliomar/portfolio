import { data } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.xp}>
      <div className={styles.inner}>
        <div className={styles.label}>Mon parcours</div>
        <h2 className={styles.title}>Expériences</h2>
        <div className={styles.divider} />

        <div className={styles.timeline}>
          {data.experiences.map((e, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.date}>{e.date}</div>
              <div className={styles.role}>{e.role}</div>
              <div className={styles.company}>{e.company}</div>
              <p className={styles.desc}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
