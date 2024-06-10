'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import {
  Children,
  type PropsWithChildren,
  type ReactElement,
  isValidElement,
  useCallback,
  useMemo,
} from 'react';

import { QUERY_PARAMS } from '@/constants/constants';
import { type NonEmptyArray } from '@/types/util';

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
 * TargetFunnel
 */
type TargetFunnelProps<Steps extends NonEmptyArray<string>> = {
  steps: Steps;
  step: Steps[number];
  children:
    | ReactElement<FunnelStepProps<Steps>>
    | ReactElement<FunnelStepProps<Steps>>[];
};

const TargetFunnel = <Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: TargetFunnelProps<Steps>) => {
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

type FunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  TargetFunnelProps<Steps>,
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

  const Funnel = useMemo(
    () =>
      Object.assign(
        function (props: FunnelProps<Steps>) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const searchParams = useSearchParams();

          const step =
            searchParams.get(QUERY_PARAMS.FUNNEL_STEP) ?? initialStep;

          return <TargetFunnel<Steps> steps={steps} step={step} {...props} />;
        },
        {
          Step: FunnelStep,
        },
      ),

    /**
     * @note useMemo를 사용하지 않으면 입력 변경 시마다 새로 컴포넌트가 생성되어 input focus를 잃어버립니다.
     * @see https://github.com/toss/slash/blob/0a9a89e0dd6a3d8f86264d0ec4bb062d075337ea/packages/react/use-funnel/src/useFunnel.tsx#L57
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const setStep = (step: Steps[number]) => {
    const queryString = createQueryString(QUERY_PARAMS.FUNNEL_STEP, step);

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
    Funnel,
    setStep,
  } as const;
};

export { useFunnel };
