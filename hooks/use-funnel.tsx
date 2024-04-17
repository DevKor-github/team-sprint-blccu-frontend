'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import {
  Children,
  type PropsWithChildren,
  type ReactElement,
  isValidElement,
  useCallback,
} from 'react';

import { QUERY_KEY } from '@/constants/query';
import { type NonEmptyArray } from '@/types/utility-types';

/**
 * FunnelStep
 */
type FunnelStepProps<Steps extends NonEmptyArray<string>> = {
  name: Steps[number];
} & PropsWithChildren;

const FunnelStep = <Steps extends NonEmptyArray<string>>({
  children,
}: FunnelStepProps<Steps>) => {
  return <>{children}</>;
};

/**
 * Funnel
 */
type FunnelProps<Steps extends NonEmptyArray<string>> = {
  steps: Steps;
  step: Steps[number];
  children:
    | ReactElement<FunnelStepProps<Steps>>
    | ReactElement<FunnelStepProps<Steps>>[];
};

const Funnel = <Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((child) =>
      steps.includes(
        (child.props as Partial<FunnelStepProps<Steps>>).name ?? '',
      ),
    ) as ReactElement<FunnelStepProps<Steps>>[];

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep}</>;
};

/**
 * UseFunnel
 */
type UseFunnelParams<Steps extends NonEmptyArray<string>> = {
  steps: Steps;
  initialStep: Steps[number];
};

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  'steps' | 'step'
>;

/**
 * @reference
 * https://github.com/toss/slash/blob/main/packages/react/use-funnel/src/useFunnel.tsx
 *
 * @note
 * setStep을 prop으로 컴포넌트 안으로 주입하여 Imperative하게 스텝을 전환하지 마세요.
 */
const useFunnel = <Steps extends NonEmptyArray<string>>({
  steps,
  initialStep,
}: UseFunnelParams<Steps>) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const RouteFunnel = (props: RouteFunnelProps<Steps>) => {
    const searchParams = useSearchParams();

    const step = searchParams.get(QUERY_KEY.FUNNEL_STEP) ?? initialStep;

    return <Funnel<Steps> steps={steps} step={step} {...props} />;
  };

  const setStep = (step: Steps[number]) => {
    const queryString = createQueryString(QUERY_KEY.FUNNEL_STEP, step);

    router.push('?' + queryString);
  };

  /**
   * @reference
   * https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
   */
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return {
    Funnel: RouteFunnel,
    setStep,
  } as const;
};

export { FunnelStep, useFunnel };
