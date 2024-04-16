import Image, { type ImageProps } from 'next/image';

import { cn } from '@/lib/utils';

/**
 * @reference
 * https://stackoverflow.com/questions/69230343/nextjs-image-component-with-fixed-witdth-and-auto-height
 */
const AutoHeightImage = ({ className, ...props }: ImageProps) => {
  return (
    <Image
      width="0"
      height="0"
      sizes="100vw"
      className={cn('w-full object-cover', className)}
      {...props}
    />
  );
};

export { AutoHeightImage };
