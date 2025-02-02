import type { ComponentProps, ReactNode } from 'react';
import { useMemo } from 'react';

import { cn } from '@/lib/cn.ts';

import { ButtonContext } from './context/ButtonContext.ts';
import styles from './Button.module.css';
import type { ButtonSize, ButtonVariant } from './context';
import { Counter, Group, Label, Loader } from './ui';

interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean;
  counter?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    loading = false,
    counter = false,
    size = 'medium',
    variant = 'primary',
    className,
    children,
    ...rest
  } = props;

  const value = useMemo(
    () => ({
      loading,
      counter,
      size,
      variant
    }),
    [loading, counter, size, variant]
  );

  return (
    <ButtonContext.Provider value={value}>
      <button
        className={cn(styles.button, styles[variant], styles[size], className)}
        type='button'
        {...rest}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
};

Button.Label = Label;
Button.Count = Counter;
Button.Group = Group;
Button.Loader = Loader;
