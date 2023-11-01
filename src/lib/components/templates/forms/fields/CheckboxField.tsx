// copying checkbox field from epic stack
// https://github.com/epicweb-dev/epic-stack/blob/main/app/components/forms.tsx#L90
// I am getting typescript errors here that are not showing there
// resetting my dependencies does not fix this
// setting new types to force the lint errors to resolve is growing cumbersome
// rather than spend more time debugging I'll trust this works
// and update later if I feel like it

import { useInputEvent } from '@conform-to/react';
import { useId, useRef } from 'react';
import {
  Checkbox,
  ErrorList,
  type CheckboxProps,
  type ListOfErrors,
} from '@/lib/components/index.ts';

export function CheckboxField({
  labelProps,
  buttonProps,
  errors,
  className,
}: {
  labelProps: JSX.IntrinsicElements['label'];
  buttonProps: CheckboxProps;
  errors?: ListOfErrors;
  className?: string;
}) {
  const fallbackId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  // To emulate native events that Conform listen to:
  // See https://conform.guide/integrations

  // eslint-disable-next-line
  const control = useInputEvent({
    // Retrieve the checkbox element by name instead as Radix does not expose the internal checkbox element
    // See https://github.com/radix-ui/primitives/discussions/874
    ref: () =>
      buttonRef.current?.form?.elements.namedItem(buttonProps.name ?? ''),

    onFocus: () => buttonRef.current?.focus(),
  });

  const id = buttonProps.id ?? buttonProps.name ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <div className="flex gap-2">
        <Checkbox
          id={id}
          ref={buttonRef}
          aria-invalid={errorId ? true : undefined}
          aria-describedby={errorId}
          {...buttonProps}
          onCheckedChange={(state) => {
            // eslint-disable-next-line
            control.change(Boolean(state.valueOf()));
            buttonProps.onCheckedChange?.(state);
          }}
          onFocus={(event) => {
            // eslint-disable-next-line
            control.focus();
            buttonProps.onFocus?.(event);
          }}
          onBlur={(event) => {
            // eslint-disable-next-line
            control.blur();
            buttonProps.onBlur?.(event);
          }}
          type="button"
        />
        <label
          htmlFor={id}
          {...labelProps}
          className="text-body-xs self-center text-muted-foreground"
        />
      </div>
      <div className="px-4 pb-3 pt-1">
        {errorId ? <ErrorList id={errorId} errors={errors} /> : null}
      </div>
    </div>
  );
}
