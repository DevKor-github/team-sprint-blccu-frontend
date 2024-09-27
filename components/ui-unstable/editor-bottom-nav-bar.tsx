import { type PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const EditorBottomNavBar = ({ children }: PropsWithChildren) => {
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const updateViewport = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const windowHeight = window.innerHeight;
        const keyboardHeight =
          windowHeight - viewportHeight - window.visualViewport.offsetTop;
        setBottomOffset(keyboardHeight > 0 ? keyboardHeight : 0);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewport);
      window.visualViewport.addEventListener('scroll', updateViewport);
    }

    // 초기화
    updateViewport();

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewport);
        window.visualViewport.removeEventListener('scroll', updateViewport);
      }
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed left-1/2 w-full max-w-screen-sm -translate-x-1/2',
        'z-30 bg-blccu-black text-blccu-white',
      )}
      style={{ bottom: `${bottomOffset}px` }}
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
