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

  const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file === undefined) {
      return;
    }

    mutate({ file });
  };

  const onClickTrigger = () => {
    ref.current?.click();
  };

  return { ref, onUpload, onClickTrigger };
};

export { useUploadFile };
