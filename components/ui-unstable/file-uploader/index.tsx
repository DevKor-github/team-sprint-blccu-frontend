import { Slot } from '@radix-ui/react-slot';
import { type UseMutationResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { useFileUploader } from '@/components/ui-unstable/file-uploader/hooks/use-file-uploader';
import { type PropsWithTrigger } from '@/types/util';

type FileUploaderProps = {
  uploadMutation: UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    { file: File },
    unknown
  >;
} & PropsWithTrigger;

const FileUploader = ({ uploadMutation, trigger }: FileUploaderProps) => {
  const { ref, onUpload, onClickTrigger } = useFileUploader({
    uploadMutation,
  });

  const Comp = Slot;

  return (
    <>
      <Comp onClick={onClickTrigger}>{trigger}</Comp>
      <input ref={ref} type="file" className="hidden" onChange={onUpload} />
    </>
  );
};

export { FileUploader };
