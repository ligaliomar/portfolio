import { data } from '../data'
import styles from './Projects.module.css'

const themeMap = {
  orange: styles.themeOrange,
  teal: styles.themeTeal,
  purple: styles.themePurple,
  green: styles.themeGreen,
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.label}>Ce que j'ai construit</div>
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.divider} />

        <div className={styles.grid}>
          {data.projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={`${styles.thumb} ${themeMap[p.theme]}`}>
                <span>{p.emoji}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
