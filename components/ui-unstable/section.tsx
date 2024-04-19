import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import { type PropsWithClassName } from '@/types/props';

const Section = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) => {
  return <section className={cn('mt-8', className)}>{children}</section>;
};

const SectionTitle = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) => {
  return (
    <div className={cn('ml-1 text-lg font-bold', className)}>{children}</div>
  );
};

const SectionContent = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) => {
  return <div className={cn('mt-4', className)}>{children}</div>;
};

export { Section, SectionContent, SectionTitle };
