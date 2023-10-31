import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label.tsx';

interface ArgsType {
  'data-testid': string;
  children?: React.ReactNode;
}

const meta: Meta<ArgsType> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<ArgsType>;

export default meta;
type Story = StoryObj<typeof meta>;
const testArgs = {
  'data-testid': 'label',
};

export const Default: Story = {
  args: {
    ...testArgs,
    children: 'Label',
  },
};
