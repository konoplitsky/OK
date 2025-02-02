import type { ReactNode } from 'react';

import { cn } from '@/lib/cn.ts';

import { useButtonContext } from '../../context';

import styles from './Label.module.css';

interface ButtonLabelProps {
  children: ReactNode;
}

export const Label = ({ children }: ButtonLabelProps) => {
  const { size } = useButtonContext();

  return <span className={cn(styles.label, styles[size])}>{children}</span>;
};
