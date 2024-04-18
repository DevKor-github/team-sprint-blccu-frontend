'use client';

import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

import { IconButton } from '@/components/ui/icon-button';
import { TOAST_MESSAGES } from '@/constants/messages';
import { copyCurrentUrl } from '@/lib/utils';

const UsernamePageShareAction = () => {
  const handleClick = () => {
    copyCurrentUrl();

    toast(TOAST_MESSAGES.LINK_COPY_SUCCESS);
  };

  return (
    <IconButton size="lg" onClick={handleClick}>
      <Share2 className="h-5 w-5" />
    </IconButton>
  );
};

export { UsernamePageShareAction };
