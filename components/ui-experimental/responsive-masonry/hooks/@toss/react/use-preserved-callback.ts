import { useCallback, useEffect, useRef } from 'react';

/**
 * @reference
 * https://github.com/toss/slash/blob/main/packages/react/react/src/hooks/usePreservedCallback.ts
 */
const usePreservedCallback = <Callback extends (...args: any[]) => any>(
  callback: Callback,
) => {
  const callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: any[]) => {
    return callbackRef.current(...args);
  }, []) as Callback;
};

export { usePreservedCallback };
