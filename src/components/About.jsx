import { data } from '../data'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.label}>Qui suis-je ?</div>
        <h2 className={styles.title}>À propos de moi</h2>
        <div className={styles.divider} />

        <div className={styles.grid}>
          <div className={styles.bio}>
            {data.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={styles.stats}>
            {data.stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
