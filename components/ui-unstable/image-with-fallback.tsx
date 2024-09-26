import Image from 'next/image';

import { useCallback, useState } from 'react';

type ImageWithFallbackProps = Omit<
  React.ComponentProps<typeof Image>,
  'onError'
> & {
  fallbackSrc: React.ComponentProps<typeof Image>['src'];
};

const ImageWithFallback = ({
  fallbackSrc,
  src,
  alt,
  ...rest
}: ImageWithFallbackProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleError: React.ReactEventHandler<HTMLImageElement> =
    useCallback(() => {
      setIsError(true);
    }, []);

  return (
    <Image
      src={!isError ? src : fallbackSrc}
      onError={handleError}
      alt={alt}
      {...rest}
    />
  );
};

export { ImageWithFallback };
