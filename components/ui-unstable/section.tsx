import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import { type PropsWithClassName } from '@/types/util';

const Section = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) => {
  return (
    <section
      className={cn(
        'py-3',
        'bg-gradient-to-b from-blccu-neutral-200/20 to-transparent',
        className,
      )}
    >
      {children}
    </section>
  );
};

const SectionTitle = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) => {
  return <div className={cn('text-lg font-bold', className)}>{children}</div>;
};

const SectionContent = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) => {
  return <div className={cn('mt-4', className)}>{children}</div>;
};

export { Section, SectionContent, SectionTitle };
