import type React from 'react';
import styles from './styles.module.css';

//Props objetos
type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
