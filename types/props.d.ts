import { type ReactNode } from 'react';

type PropsWithClassName<T = unknown> = T & { className?: string };

type PropsWithTrigger<T = unknown> = T & { trigger: ReactNode };

type PropsWithOnNext<T = unknown> = T & { onNext?: () => void };

export type { PropsWithClassName, PropsWithOnNext, PropsWithTrigger };
