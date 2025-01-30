import { createContext } from 'react';

interface ButtonContextProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  loading?: boolean;
}

export const ButtonContext = createContext<ButtonContextProps>({
  variant: 'primary',
  size: 'medium',
  loading: false
});
