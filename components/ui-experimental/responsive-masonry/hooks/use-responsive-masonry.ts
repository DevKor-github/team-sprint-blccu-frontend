import { useState } from 'react';

import { useResizeObserver } from '@/components/ui-experimental/responsive-masonry/hooks/@toss/react/use-resize-observer';
import { type ResponsiveMasonryBreakpoint } from '@/components/ui-experimental/responsive-masonry/responsive-masonry__experimental';

type GetColumnsParams = {
  refWidth: number;
  breakpoints: ResponsiveMasonryBreakpoint[];
};

const getColumns = ({ refWidth, breakpoints }: GetColumnsParams) => {
  const reverseSortedBreakpoints = breakpoints
    .slice()
    .sort((a, b) => b.width - a.width);

  for (const breakpoint of reverseSortedBreakpoints) {
    if (refWidth >= breakpoint.width) {
      return breakpoint.columns;
    }
  }

  // when smallest width in breakpoints is not 0
  return reverseSortedBreakpoints[reverseSortedBreakpoints.length - 1].columns;
};

type UseResponsiveMansoryParams = {
  breakpoints: ResponsiveMasonryBreakpoint[];
};

const useResponsiveMasonry = ({ breakpoints }: UseResponsiveMansoryParams) => {
  const [refWidth, setRefWidth] = useState(0);
  const [columns, setColumns] = useState(1);

  const onResize = (entry: ResizeObserverEntry) => {
    const { width: refWidth } = entry.contentRect;

    const columns = getColumns({ refWidth, breakpoints });

    setRefWidth(refWidth);
    setColumns(columns);
  };

  const ref = useResizeObserver<HTMLDivElement>(onResize);

  return { columns, ref, refWidth };
};

export { useResponsiveMasonry };
