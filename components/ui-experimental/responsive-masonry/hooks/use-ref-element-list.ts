import { useRef } from 'react';

/**
 * @reference
 * https://ko.react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback
 */
const useRefElementList = () => {
  const ref = useRef<Map<number, HTMLElement>>();

  const getMap = () => {
    if (!ref.current) {
      ref.current = new Map<number, HTMLElement>();
    }

    return ref.current;
  };

  const getRefElementList = () => {
    return Array.from(getMap().values());
  };

  const manageElement = (index: number, element: HTMLElement | null) => {
    const map = getMap();

    if (element !== null) {
      map.set(index, element);
    } else {
      map.delete(index);
    }
  };

  return { getRefElementList, manageElement };
};

export { useRefElementList };
