import { data } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {data.available && (
          <div className={styles.badge}>
            <span className={styles.dot} />
            Disponible pour missions
          </div>
        )}

        <h1 className={styles.h1}>
          <span>Bonjour, je suis</span>
          <span className={styles.gradName}>{data.name}.</span>
          <span className={styles.gradTitle}>{data.title}</span>
        </h1>

        <p className={styles.sub}>
          Développeur fullstack <strong>{data.subtitle}</strong>, passionné par l'IA.
          Je construis des applications modernes, performantes et intelligentes.
        </p>

        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary}>
            Voir mes projets
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.ring}>
          <div className={styles.inner}>👨‍💻</div>
        </div>
        <div className={`${styles.floatTag} ${styles.t1}`}>React & Node.js</div>
        <div className={`${styles.floatTag} ${styles.t2}`}>IA & ML</div>
        <div className={`${styles.floatTag} ${styles.t3}`}>Fullstack</div>
      </div>
    </section>
  )
}
