import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const iconButtonVariants = cva(
  cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg',
    'text-sm font-medium',
    'transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ),
  {
    variants: {
      size: {
        default: 'h-8 w-8',
        lg: 'h-11 w-11',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(iconButtonVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = 'Button';

export { IconButton, iconButtonVariants };
