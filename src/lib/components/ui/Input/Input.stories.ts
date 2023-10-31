import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input.tsx';
import { InputStoryTests } from './Input.test.ts';

// TODO: stories and tests I should add:
// - [ ] states
// -- [ ] disabled
// -- [ ] placeholder
// -- [ ] value
// - [ ] hooks
// -- [ ] onChange
// -- [ ] onBlur
// -- [ ] onFocus
// -- [ ] onKeyDown

const meta: Meta<InputProps & { 'data-testid': string }> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'search', 'tel'],
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
const testArgs = {
  'data-testid': 'input',
};

export const Default: Story = {
  args: {
    ...testArgs,
  },
  play: (args) => InputStoryTests({ ...args }),
};

export const Password: Story = {
  args: {
    ...testArgs,
    type: 'password',
  },
  play: (args) => InputStoryTests({ ...args, type: 'password' }),
};

export const Email: Story = {
  args: {
    ...testArgs,
    type: 'email',
  },
  play: (args) => InputStoryTests({ ...args, type: 'email' }),
};

export const Number: Story = {
  args: {
    ...testArgs,
    type: 'number',
  },
  play: (args) => InputStoryTests({ ...args, type: 'number' }),
};

export const Search: Story = {
  args: {
    ...testArgs,
    type: 'search',
  },
  play: (args) => InputStoryTests({ ...args, type: 'search' }),
};

export const Tel: Story = {
  args: {
    ...testArgs,
    type: 'tel',
  },
  play: (args) => InputStoryTests({ ...args, type: 'tel' }),
};

export const Disabled: Story = {
  args: {
    ...testArgs,
    disabled: true,
  },
  play: (args) => InputStoryTests({ ...args, disabled: true }),
};
