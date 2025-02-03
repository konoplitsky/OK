import { Button } from '@/components/Button/Button.tsx';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: (
      <Button.Group>
        <Button.Label>Что сделать</Button.Label>
      </Button.Group>
    )
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <Button.Group>
        <Button.Label>Что сделать</Button.Label>
      </Button.Group>
    )
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: (
      <Button.Group>
        <Button.Label>Что сделать</Button.Label>
      </Button.Group>
    )
  }
};

export const LabelWithCounter: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    counter: true,
    children: (
      <>
        <Button.Group>
          <Button.Label>Что сделать</Button.Label>
          <Button.Count count={1} />
        </Button.Group>
      </>
    )
  }
};

export const LoadingPrimary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    loading: true,
    children: (
      <>
        <Button.Group>
          <Button.Label>Что сделать</Button.Label>
        </Button.Group>
        <Button.Loader />
      </>
    )
  }
};

export const LoadingSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    loading: true,
    children: (
      <>
        <Button.Group>
          <Button.Label>Что сделать</Button.Label>
        </Button.Group>
        <Button.Loader />
      </>
    )
  }
};

export const Truncate: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    style: { width: 100 },
    children: (
      <>
        <Button.Group>
          <Button.Label>Что сделать</Button.Label>
        </Button.Group>
      </>
    )
  }
};

export const TruncateWithCounter: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    counter: true,
    style: { width: 100 },
    children: (
      <>
        <Button.Group>
          <Button.Label>Что сделать</Button.Label>
          <Button.Count count={1} />
        </Button.Group>
      </>
    )
  }
};
