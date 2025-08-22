import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

// desestruturacao js
export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
