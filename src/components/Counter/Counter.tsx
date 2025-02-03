import { cn } from '@/lib/cn.ts';
import { formatQuantity } from '@/lib/formatQuantity.ts';

import styles from './Counter.module.css';

type CounterSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type CounterVariant = 'primary' | 'secondary';

interface CounterProps {
  size?: CounterSize;
  variant?: CounterVariant;
  className?: string;
  quantity: string | number;
  pulse?: boolean;
}

export const Counter = (props: CounterProps) => {
  const { size = 'lg', variant = 'primary', className, quantity, pulse = false } = props;

  return (
    <div className={cn(styles.counter, styles[size], styles[variant], className)}>
      <span className={styles.count}>{formatQuantity(quantity)}</span>
      {pulse && (
        <>
          <div className={styles.dot}></div>
          <div className={cn(styles.pulse)}></div>
          <div className={cn(styles.pulse, styles.two)}></div>
        </>
      )}
    </div>
  );
};
