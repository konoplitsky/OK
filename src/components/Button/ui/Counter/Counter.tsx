import { cn } from '@/lib/cn.ts';

import { useButtonContext } from '../../context';

import styles from './Counter.module.css';

interface ButtonCountProps {
  count: number;
}

export const Counter = ({ count }: ButtonCountProps) => {
  const { counter, size, variant } = useButtonContext();

  return (
    <>
      {counter && (
        <span data-variant={variant} className={cn(styles.count, styles[size])}>
          {count}
        </span>
      )}
    </>
  );
};
