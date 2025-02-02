import type { ReactNode } from 'react';

import { useButtonContext } from '@/components/Button/context';
import { cn } from '@/lib/cn.ts';

import styles from './Group.module.css';

interface GroupProps {
  children: ReactNode;
}

export const Group = ({ children }: GroupProps) => {
  const { loading, size } = useButtonContext();

  return (
    <div className={cn(styles.container, styles[size], { [styles.hideContent]: loading })}>
      {children}
    </div>
  );
};
