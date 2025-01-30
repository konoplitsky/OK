import { ComponentProps } from 'react';
import { cn } from '../../lib/cn.ts';
import styles from './Button.module.css';
import LoaderIcon from '../../shared/assets/icons/loader.svg?react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonState = 'enabled' | 'pressed' | 'loading' | 'disabled';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  count: number;
  counter?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  focused?: boolean;
}

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => (
  <button
    className={cn(
      styles.button,
      styles[variant],
      styles[size],
      {
        [styles.loading]: props.loading
      },
      props.className
    )}
    type='button'
    {...props}
  >
    <span className={styles.label}>{props.label}</span>
    {props.counter && <span className={styles.count}>{props.count}</span>}
    {props.loading && <LoaderIcon height={20} width={20} className={styles.loader} />}
  </button>
);
