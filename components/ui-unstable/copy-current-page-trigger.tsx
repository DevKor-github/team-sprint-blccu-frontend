'use client';

import { type PropsWithChildren } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { toast } from 'sonner';

import { TOAST_MESSAGES } from '@/constants/messages';
import { copyCurrentUrl } from '@/lib/utils';

type CopyCurrentPageTriggerProps = {
  asChild?: boolean;
} & PropsWithChildren;

/**
 * @note
 * it was developed for the purpose of separating CSR
 */
const CopyCurrentPageTrigger = ({
  asChild = false,
  children,
}: CopyCurrentPageTriggerProps) => {
  /**
   * @reference
   * https://www.radix-ui.com/primitives/docs/utilities/slot
   */
  const Comp = asChild ? Slot : 'button';

  const handleShareButtonClick = () => {
    copyCurrentUrl();

    toast(TOAST_MESSAGES.LINK_COPY_SUCCESS);
  };

  return <Comp onClick={handleShareButtonClick}>{children}</Comp>;
};

export { CopyCurrentPageTrigger };
