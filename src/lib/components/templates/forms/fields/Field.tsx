import { Input, Label } from '@/lib/components';
import React, { useId } from 'react';
import { ErrorList, ListOfErrors } from './Errors';

export function Field({
  labelProps,
  inputProps,
  errors,
  className,
}: {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  errors?: ListOfErrors;
  className?: string;
}) {
  const fallbackId = useId();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps} />
      <Input
        id={id}
        aria-invalid={errorId ? true : undefined}
        aria-describedby={errorId}
        {...inputProps}
      />
      <div className="min-h-[32px] px-4 pb-3 pt-1">
        {errorId ? <ErrorList id={errorId} errors={errors} /> : null}
      </div>
    </div>
  );
}
