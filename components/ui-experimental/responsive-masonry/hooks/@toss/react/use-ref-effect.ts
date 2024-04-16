import { type DependencyList, useCallback, useRef } from 'react';

import { usePreservedCallback } from './use-preserved-callback';

const noop = () => {};

type EffectRef<E extends HTMLElement = HTMLElement> = (
  element: E | null,
) => void;

type CleanupCallback = () => void;
type RefCallback<E extends HTMLElement = HTMLElement> = (
  element: E,
) => CleanupCallback | void;

/**
 * @reference
 * https://github.com/toss/slash/blob/main/packages/react/react/src/hooks/useResizeObserver.ts
 */
const useRefEffect = <E extends HTMLElement = HTMLElement>(
  callback: RefCallback<E>,
  deps: DependencyList,
): EffectRef<E> => {
  const preservedCallback = usePreservedCallback(callback);
  const disposeRef = useRef<CleanupCallback>(noop);

  const effect = useCallback(
    (element: E | null) => {
      disposeRef.current();
      disposeRef.current = noop;

      if (element != null) {
        const cleanup = callback(element);

        if (typeof cleanup === 'function') {
          disposeRef.current = cleanup;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [preservedCallback, ...deps],
  );

  return effect;
};

export { useRefEffect };
