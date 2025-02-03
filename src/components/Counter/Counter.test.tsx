import { render, screen } from '@testing-library/react';

import { Counter } from './Counter.tsx';

describe('Counter', () => {
  it('renders with quantity props', () => {
    render(<Counter quantity={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Counter quantity={5} className='custom-class' />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with different sizes', () => {
    render(<Counter quantity={5} size='xl' />);

    const button = screen.getByTestId('counter');
    expect(button.className).toContain('xl');
  });

  it('renders with different variants', () => {
    render(<Counter quantity={5} variant='secondary' />);

    const button = screen.getByTestId('counter');
    expect(button.className).toContain('secondary');
  });

  it('renders pulse animation when pulse is true', () => {
    render(<Counter quantity={5} pulse />);

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByTestId('dot')).toBeInTheDocument();
    expect(screen.getByTestId('pulse-1')).toBeInTheDocument();
    expect(screen.getByTestId('pulse-2')).toBeInTheDocument();
  });

  it('does not render pulse elements when pulse is false', () => {
    const { container } = render(<Counter quantity={5} pulse={false} />);

    expect(container.querySelector('.pulse')).toBeNull();
  });
});
