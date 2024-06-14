import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-md px-4 py-3 text-[16px] transition',
          'border border-blccu-input bg-blccu-input/20',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-blccu-neutral-600',
          'focus-visible:border-blccu-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
