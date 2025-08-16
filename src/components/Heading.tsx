import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
}

// desestruturacao js
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
