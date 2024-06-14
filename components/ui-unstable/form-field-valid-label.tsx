import { type PropsWithChildren } from 'react';

import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

type FormFieldValidLabelProps = {
  isValid: boolean;
} & PropsWithChildren;

const FormFieldValidLabel = ({
  isValid,
  children,
}: FormFieldValidLabelProps) => {
  return (
    <div className="flex items-center gap-1">
      <Check
        className={cn(
          'h-4 w-4',
          isValid ? 'text-green-500' : 'text-blccu-neutral-500',
        )}
      />
      <p
        className={cn(
          'text-xs',
          isValid ? 'text-green-500' : 'text-blccu-neutral-500',
        )}
      >
        {children}
      </p>
    </div>
  );
};

export { FormFieldValidLabel };
