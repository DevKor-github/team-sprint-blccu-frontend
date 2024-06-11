import { type ChangeEventHandler, useRef } from 'react';

import { type UseMutationResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

type UseUploadFileProps = {
  uploadMutation: UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    { file: File },
    unknown
  >;
};

const useUploadFile = ({ uploadMutation: { mutate } }: UseUploadFileProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file === undefined) {
      return;
    }

    mutate({ file });
  };

  const trigger = () => {
    ref.current?.click();
  };

  return { ref, handleUpload, trigger };
};

export { useUploadFile };
