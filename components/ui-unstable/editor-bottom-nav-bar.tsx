import { type PropsWithChildren } from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const EditorBottomNavBar = ({ children }: PropsWithChildren) => {
  return (
    <nav
      className={cn(
        'fixed bottom-0 left-1/2 w-full max-w-screen-sm -translate-x-1/2',
        'bg-blccu-black text-blccu-white',
      )}
    >
      <ul className="flex h-full items-center justify-evenly">{children}</ul>
    </nav>
  );
};

const EditorBottomNavBarItem = ({ children }: PropsWithChildren) => {
  return <li>{children}</li>;
};

type EditorBottomNavBarItemButtonProps = {
  isSelected?: boolean;
} & ButtonProps;

/**
 * @note
 * 적절한 추상화가 아닐 수 있습니다.
 */
const EditorBottomNavBarItemButton = ({
  isSelected = false,
  ...props
}: EditorBottomNavBarItemButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="none"
      className={cn(
        'flex flex-col items-center gap-0.5 px-4 py-3',
        isSelected ? 'text-blccu-white' : 'text-blccu-neutral-400',
      )}
      {...props}
    />
  );
};

export {
  EditorBottomNavBar,
  EditorBottomNavBarItem,
  EditorBottomNavBarItemButton,
};
