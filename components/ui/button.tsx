import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center whitespace-nowrap',
    'text-sm font-medium',
    'transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ),
  {
    variants: {
      variant: {
        default: 'bg-blccu-neutral-800 text-blccu-white',
        secondary: 'bg-blccu-neutral-200 text-blccu-neutral-600',
        destructive: 'bg-blccu-neutral-200 text-blccu-red',
        ghost: 'text-blccu-neutral-600',
      },
      size: {
        default: 'h-10 px-6',
        sm: 'h-9 text-xs px-5',
        lg: 'h-12 px-7',
        none: 'h-auto px-0' /* it is only used for ghost variant */,
      },
      radius: {
        default: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, radius }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
