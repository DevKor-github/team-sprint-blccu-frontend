'use client';

import {
  type PropsWithChildren,
  createContext,
  forwardRef,
  useContext,
} from 'react';

import { useRefElementList } from '@/components/ui-experimental/responsive-masonry/hooks/use-ref-element-list';
import { useResponsiveMasonry } from '@/components/ui-experimental/responsive-masonry/hooks/use-responsive-masonry';

const MasonryItem = ({ children }: PropsWithChildren) => {
  const context = useContext(MasonryContext);

  if (context === null) {
    throw new Error('MasonryItem must be used inside Masonry');
  }

  const index = context.autoIncrementIndex++;

  return (
    <div
      ref={(element) => context.manageElement(index, element)}
      className="absolute left-0 top-0"
    >
      {children}
    </div>
  );
};

type UpdateElementPositionsParams = {
  columns: number;
  refWidth: number;
  getRefElementList: () => HTMLElement[];
  gap: number;
};

const updateElementPositions = ({
  columns,
  refWidth,
  getRefElementList,
  gap,
}: UpdateElementPositionsParams) => {
  const widthPerColumnIncludingGap = refWidth / columns;
  const widthPerColumn = widthPerColumnIncludingGap - gap;

  const heights = Array(columns).fill(0);

  const elements = getRefElementList();

  elements.forEach((element) => {
    element.style.width = `${widthPerColumn}px`;

    const column = heights.indexOf(Math.min(...heights));

    const x = column * widthPerColumnIncludingGap;
    const y = heights[column];
    heights[column] += element.clientHeight + gap;

    element.style.transform = `translateX(${x}px) translateY(${y}px`;
  });
};

type MasonryContextProps = {
  autoIncrementIndex: number;
  manageElement: (index: number, element: HTMLElement | null) => void;
};

const MasonryContext = createContext<MasonryContextProps | null>(null);

type MasonryProps = {
  columns: number;
  refWidth: number;
  gap: number;
} & PropsWithChildren;

const Masonry = forwardRef<HTMLDivElement, MasonryProps>(
  ({ columns, refWidth, gap, children }, ref) => {
    const { getRefElementList, manageElement } = useRefElementList();

    updateElementPositions({
      columns,
      refWidth,
      getRefElementList,
      gap,
    });

    const contextValue = { autoIncrementIndex: 0, manageElement };

    return (
      <div className="relative" ref={ref}>
        <MasonryContext.Provider value={contextValue}>
          {children}
        </MasonryContext.Provider>
      </div>
    );
  },
);
Masonry.displayName = 'Masonry';

type ResponsiveMasonryBreakpoint = {
  width: number;
  columns: number;
};

type ResponsiveMasonryProps = {
  breakpoints: ResponsiveMasonryBreakpoint[];
  gap: number;
} & PropsWithChildren;

const ResponsiveMasonry__Experimental = ({
  breakpoints,
  gap,
  children,
}: ResponsiveMasonryProps) => {
  const { columns, ref, refWidth } = useResponsiveMasonry({ breakpoints });

  return (
    <Masonry ref={ref} refWidth={refWidth} columns={columns} gap={gap}>
      {children}
    </Masonry>
  );
};

export {
  MasonryItem,
  ResponsiveMasonry__Experimental,
  type ResponsiveMasonryBreakpoint,
};
