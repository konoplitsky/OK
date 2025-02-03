import { vi } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button.tsx';

describe('Button', () => {
  it('renders correctly', () => {
    render(
      <Button>
        <Button.Group>
          <Button.Label>TEST</Button.Label>
        </Button.Group>
      </Button>
    );

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Button className='custom-class'>
        <Button.Group>
          <Button.Label>TEST</Button.Label>
        </Button.Group>
      </Button>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick}>
        <Button.Group>
          <Button.Label>TEST</Button.Label>
        </Button.Group>
      </Button>
    );

    fireEvent.click(screen.getByText('TEST'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders counter when enabled', () => {
    render(
      <Button counter>
        <Button.Group>
          <Button.Count count={5} />
        </Button.Group>
      </Button>
    );

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    render(
      <Button size='large'>
        <Button.Group>
          <Button.Label>TEST</Button.Label>
        </Button.Group>
      </Button>
    );

    const button = screen.getByTestId('button');
    expect(button.className).toContain('large');
  });

  it('renders with different variants', () => {
    render(
      <Button variant='secondary'>
        <Button.Group>
          <Button.Label>TEST</Button.Label>
        </Button.Group>
      </Button>
    );

    const button = screen.getByTestId('button');
    expect(button.className).toContain('secondary');
  });

  it('disables the button when disabled prop is set', () => {
    render(
      <Button disabled>
        <Button.Group>
          <Button.Label>TEST</Button.Label>
        </Button.Group>
      </Button>
    );

    const button = screen.getByTestId('button');
    expect(button).toBeDisabled();
  });
});
