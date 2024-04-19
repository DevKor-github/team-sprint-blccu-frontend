'use client';

import * as React from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { type VariantProps, cva } from 'class-variance-authority';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContentContext);

  if (context === null) {
    throw new Error(
      'AlertDialogOverlay must be used inside AlertDialogContent',
    );
  }

  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        context.variant === 'default' && 'bg-blccu-black/80',
        context.variant === 'destructive' && 'bg-blccu-white/80',
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const alertDialogVariants = cva(
  /**
   * @note
   * - mx-8이 먹히지 않아, 임시로 w-[calc(100vw-32px)]를 사용하였습니다.
   * - {@link BottomActionSheetContent}에서는 mx-4가 잘 작동한 바 있습니다.
   */
  cn(
    'fixed z-50 bg-blccu-background shadow-lg rounded-lg w-[calc(100vw-32px)]',
    'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2',
    'flex flex-col',
  ),
  {
    variants: {
      side: {
        center: cn(
          'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]',
        ),
        bottom: cn(
          'left-1/2 bottom-0 -translate-x-1/2 -translate-y-[32px]',
          'data-[state=closed]:slide-out-to-top-[30%] data-[state=open]:slide-in-from-top-[30%]',
        ),
      },
      variant: {
        default: 'bg-blccu-white text-blccu-neutral-800',
        destructive: 'bg-blccu-neutral-800 text-blccu-neutral-400',
      },
    },
    defaultVariants: {
      side: 'center',
      variant: 'default',
    },
  },
);

type AlertDialogContentContextProps = {
  variant: VariantProps<typeof alertDialogVariants>['variant'];
};

const AlertDialogContentContext =
  React.createContext<AlertDialogContentContextProps | null>(null);

interface AlertDialogContentProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>,
    VariantProps<typeof alertDialogVariants> {}

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(({ side = 'center', variant = 'default', className, ...props }, ref) => {
  const contextValue = { variant };

  return (
    <AlertDialogContentContext.Provider value={contextValue}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
          ref={ref}
          className={cn(alertDialogVariants({ side, variant }), className)}
          {...props}
        />
      </AlertDialogPortal>
    </AlertDialogContentContext.Provider>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col p-6 text-center', className)} {...props} />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center', className)} {...props} />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContentContext);

  if (context === null) {
    throw new Error(
      'AlertDialogOverlay must be used inside AlertDialogContent',
    );
  }

  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'destructive' }),
        'flex-1 rounded-none rounded-br-lg border bg-transparent py-4',
        'focus-visible:ring-inset focus-visible:ring-offset-0',
        context.variant === 'default' && 'border-blccu-neutral-200',
        context.variant === 'destructive' && 'border-blccu-neutral-600',
        className,
      )}
      {...props}
    />
  );
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContentContext);

  if (context === null) {
    throw new Error('AlertDialogCancel must be used inside AlertDialogContent');
  }

  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'secondary' }),
        'flex-1 rounded-none rounded-bl-lg border border-r-0 bg-transparent py-4',
        'focus-visible:ring-inset focus-visible:ring-offset-0',
        context.variant === 'default' && 'border-blccu-neutral-200',
        context.variant === 'destructive' &&
          'border-blccu-neutral-600 text-blccu-neutral-200',
        className,
      )}
      {...props}
    />
  );
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
