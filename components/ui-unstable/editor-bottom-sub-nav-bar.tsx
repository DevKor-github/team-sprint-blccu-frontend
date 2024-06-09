import { type PropsWithChildren } from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type EditorBottomSubNavBarProps = {
  align?: 'left' | 'center' | 'right';
} & PropsWithChildren;

const EditorBottomSubNavBar = ({
  children,
  align = 'center',
}: EditorBottomSubNavBarProps) => {
  return (
    <div
      className={cn(
        'fixed bottom-20 z-50 max-w-[calc(448px-32px)] bg-blccu-white',
        'rounded-xl px-1 shadow-blccu-secondary',
        align === 'left' &&
          'left-4 over-blccu-screen-width:left-[calc(50%-224px+16px)]',
        align === 'center' && 'left-1/2 -translate-x-1/2',
        align === 'right' &&
          'right-4 over-blccu-screen-width:right-[calc(50%-224px+16px)]',
      )}
    >
      <ul className="flex items-center">{children}</ul>
    </div>
  );
};

const EditorBottomSubNavBarItem = ({ children }: PropsWithChildren) => {
  return <li className="flex flex-1 justify-center">{children}</li>;
};

type EditorBottomSubNavBarItemButtonProps = ButtonProps;

/**
 * @note
 * 적절한 추상화가 아닐 수 있습니다.
 */
const EditorBottomSubNavBarItemButton = (
  props: EditorBottomSubNavBarItemButtonProps,
) => {
  return (
    <Button
      variant="ghost"
      size="none"
      className="flex flex-col items-center gap-0.5 px-2 py-3"
      {...props}
    />
  );
};

export {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
};
