import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ButtonProps } from './Button.tsx';
import { buttonVariants } from './variants.ts';

// https://storybook.js.org/docs/react/writing-tests/test-runner
// https://storybook.js.org/docs/react/writing-tests/interaction-testing

interface ButtonStoryTestsArgs {
  canvasElement: HTMLElement;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  disabled?: ButtonProps['disabled'];
  children?: string;
}

const checkDisabled = async (button: HTMLElement, disabled: boolean) => {
  if (disabled) {
    await expect(button).toHaveAttribute('disabled');
  } else {
    await expect(button).not.toHaveAttribute('disabled');
  }
};

const checkVariantAndSize = async (
  button: HTMLElement,
  variant: ButtonProps['variant'],
  size: ButtonProps['size'],
) => {
  const expectedClass = buttonVariants({ variant, size });
  await expect(button).toHaveClass(expectedClass);
};

const checkInteraction = async (button: HTMLElement, disabled: boolean) => {
  // Click test
  button.click();
  await expect(button).not.toHaveFocus();

  // Keyboard interaction test
  button.focus();
  const keyDownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
  button.dispatchEvent(keyDownEvent);
  if (disabled) {
    await expect(button).not.toHaveFocus();
  } else {
    await expect(button).toHaveFocus();
  }
};

const ButtonStoryTests = async ({
  canvasElement,
  variant,
  size,
  disabled = false,
  children = 'Button',
}: ButtonStoryTestsArgs) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByText(children);

  await checkDisabled(button, disabled);
  await checkVariantAndSize(button, variant, size);
  await checkInteraction(button, disabled);
};

export { ButtonStoryTests };
