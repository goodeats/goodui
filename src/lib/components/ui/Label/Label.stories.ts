import type { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from './Label';

const meta: Meta<LabelProps & { 'data-testid': string }> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<LabelProps & { 'data-testid': string }>;

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
