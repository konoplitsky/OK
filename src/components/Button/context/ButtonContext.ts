import { createContext } from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonContextProps {
  variant: ButtonVariant;
  size: ButtonSize;
  loading?: boolean;
  counter: boolean;
}

export const ButtonContext = createContext<ButtonContextProps>({
  variant: 'primary',
  size: 'medium',
  loading: false,
  counter: false
});
