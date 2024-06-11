import { type ChangeEventHandler, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { type PropsWithTrigger } from '@/types/util';

type FileUploaderProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
  onClickTrigger: () => void;
} & PropsWithTrigger;

const FileUploader = forwardRef<HTMLInputElement, FileUploaderProps>(
  ({ onUpload, onClickTrigger, trigger }, ref) => {
    const Comp = Slot;

    return (
      <>
        <Comp onClick={onClickTrigger}>{trigger}</Comp>
        <input ref={ref} type="file" className="hidden" onChange={onUpload} />
      </>
    );
  },
);

FileUploader.displayName = 'FileUploader';

export { FileUploader };
