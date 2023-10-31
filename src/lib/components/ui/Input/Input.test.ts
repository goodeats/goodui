import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { InputProps } from './Input.tsx';

// https://storybook.js.org/docs/react/writing-tests/test-runner
// https://storybook.js.org/docs/react/writing-tests/interaction-testing

interface InputStoryTestsArgs {
  canvasElement: HTMLElement;
  type?: InputProps['type'];
  disabled?: InputProps['disabled'];
}

const checkDisabled = async (input: HTMLInputElement, disabled: boolean) => {
  if (disabled) {
    await expect(input).toHaveAttribute('disabled');
  } else {
    await expect(input).not.toHaveAttribute('disabled');
  }
};

const checkType = async (input: HTMLInputElement, type: InputProps['type']) => {
  if (type) {
    await expect(input).toHaveAttribute('type', type);
  } else {
    await expect(input).not.toHaveAttribute('type');
  }
};

const checkInteraction = async (input: HTMLInputElement, disabled: boolean) => {
  // focus test
  await userEvent.type(input, 'test123');
  if (disabled) {
    await expect(input).not.toHaveFocus();
  } else {
    await expect(input).toHaveFocus();
  }
};

const InputStoryTests = async ({
  canvasElement,
  type,
  disabled = false,
}: InputStoryTestsArgs) => {
  const canvas = within(canvasElement);
  const input: HTMLInputElement = canvas.getByTestId('input');

  if (!input) throw new Error('Input not found');

  console.log('butthead type: ', type);

  await checkDisabled(input, disabled);
  await checkType(input, type);
  await checkInteraction(input, disabled);
};

export { InputStoryTests };
