import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  component: Counter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Counter>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    quantity: 1,
    size: 'xl'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    quantity: 1,
    size: 'xl'
  }
};

export const PulseXs: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    pulse: true,
    quantity: 1
  }
};

export const PulseSm: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    pulse: true,
    quantity: 1
  }
};

export const MaxNumber: Story = {
  args: {
    variant: 'primary',
    quantity: 100,
    size: 'xl'
  }
};

export const MaxSymbols: Story = {
  args: {
    variant: 'primary',
    quantity: 'действие',
    size: 'xl'
  }
};
