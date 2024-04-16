import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const BottomActionSheet = SheetPrimitive.Root;

const BottomActionSheetTrigger = SheetPrimitive.Trigger;

const BottomActionSheetClose = SheetPrimitive.Close;

const BottomActionSheetPortal = SheetPrimitive.Portal;

const BottomActionSheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-blccu-black/40',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
BottomActionSheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const bottomActionSheetVariants = cva(
  cn(
    'fixed z-50 gap-4 mx-6 mb-6 shadow-lg transition',
    'ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    'flex flex-col gap-2',
  ),
  {
    variants: {
      side: {
        bottom: cn(
          'inset-x-0 bottom-0',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ),
      },
    },
    defaultVariants: {
      side: 'bottom',
    },
  },
);

interface BottomActionSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof bottomActionSheetVariants> {}

const BottomActionSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  BottomActionSheetContentProps
>(({ className, children, ...props }, ref) => (
  <BottomActionSheetPortal>
    <BottomActionSheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(bottomActionSheetVariants(), className)}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </BottomActionSheetPortal>
));
BottomActionSheetContent.displayName = SheetPrimitive.Content.displayName;

const BottomActionSheetGroup = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full rounded-lg bg-blccu-neutral-200">{children}</div>
  );
};

type BottomActionSheetItemProps = {
  className?: string;
} & React.PropsWithChildren;

const BottomActionSheetItem = ({
  children,
  className,
}: BottomActionSheetItemProps) => {
  return (
    <BottomActionSheetClose asChild>
      <div
        className={cn(
          'cursor-pointer py-3 text-center text-sm text-blccu-neutral-600',
          className,
        )}
      >
        {children}
      </div>
    </BottomActionSheetClose>
  );
};

const BottomActionSheetSeparator = () => {
  return <div className="h-[0.5px] bg-blccu-black/40" />;
};

export {
  BottomActionSheet,
  BottomActionSheetClose,
  BottomActionSheetContent,
  BottomActionSheetGroup,
  BottomActionSheetItem,
  BottomActionSheetSeparator,
  BottomActionSheetTrigger,
};
