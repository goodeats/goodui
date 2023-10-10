import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { ButtonStoryTests } from './Button.test';

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'destructive',
          'outline',
          'secondary',
          'ghost',
          'link',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
  play: ButtonStoryTests,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
  play: (args) => ButtonStoryTests({ ...args, variant: 'secondary' }),
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
  play: (args) => ButtonStoryTests({ ...args, size: 'lg' }),
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
  play: (args) => ButtonStoryTests({ ...args, size: 'sm' }),
};

export const Warning: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete now',
  },
  play: (args) =>
    ButtonStoryTests({
      ...args,
      variant: 'destructive',
      children: 'Delete now',
    }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
  play: (args) =>
    ButtonStoryTests({ ...args, variant: 'outline', children: 'Outline' }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
  play: (args) =>
    ButtonStoryTests({ ...args, variant: 'ghost', children: 'Ghost' }),
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
  play: (args) =>
    ButtonStoryTests({ ...args, variant: 'link', children: 'Link' }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  play: (args) =>
    ButtonStoryTests({ ...args, disabled: true, children: 'Disabled' }),
};
