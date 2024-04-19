import { type ReactNode } from 'react';

type PropsWithClassName<T = unknown> = T & { className?: string };

type PropsWithTrigger<T = unknown> = T & { trigger: ReactNode };

export type { PropsWithClassName, PropsWithTrigger };
