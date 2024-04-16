import { usePreservedCallback } from '@/components/ui-experimental/responsive-masonry/hooks/@toss/react/use-preserved-callback';
import { useRefEffect } from '@/components/ui-experimental/responsive-masonry/hooks/@toss/react/use-ref-effect';

type OnResize = (entry: ResizeObserverEntry) => void;

/**
 * @reference
 * https://github.com/toss/slash/blob/main/packages/react/react/src/hooks/useResizeObserver.ts
 */
const useResizeObserver = <E extends HTMLElement = HTMLElement>(
  onResize: OnResize,
) => {
  const resizeCallback = usePreservedCallback(onResize);
  const ref = useRefEffect<E>(
    (elem) => {
      const observer = new ResizeObserver((entries) => {
        if (entries[0] != null) {
          resizeCallback(entries[0]);
        }
      });
      observer.observe(elem);

      return () => {
        observer.unobserve(elem);
      };
    },
    [resizeCallback],
  );

  return ref;
};

export { useResizeObserver };
