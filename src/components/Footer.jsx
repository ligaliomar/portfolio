import { data } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.logo}>K.</span>
        <span className={styles.copy}>© 2025 Karim — Développeur Fullstack</span>
      </div>
      <div className={styles.links}>
        <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        )}
        <a href={`mailto:${data.email}`}>Email</a>
      </div>
    </footer>
  )
}
