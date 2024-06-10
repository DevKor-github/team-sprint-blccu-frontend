import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const kakaoButtonVariants = cva(
  cn(
    'inline-flex items-center justify-center whitespace-nowrap',
    'font-medium',
    'transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'rounded-[12px] bg-blccu-kakao-background px-7 py-3 text-blccu-kakao-foreground/85',
    'shadow-lg',
  ),
);

export interface KakaoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof kakaoButtonVariants> {
  asChild?: boolean;
}

const KakaoButton = React.forwardRef<HTMLButtonElement, KakaoButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(kakaoButtonVariants({ className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
KakaoButton.displayName = 'Button';

export { KakaoButton, kakaoButtonVariants };
