/**
 * @reference
 * https://react-svgr.com/docs/next/#typescript
 */
declare module '*.svg' {
  import { type FC, type SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}
