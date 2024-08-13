import { useEffect, useState } from 'react';

import { removeBackground } from '@imgly/background-removal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  type ImageUploadRequestDto,
  type StickerPatchRequestDto,
} from '@/__generated__/data-contracts';
import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

type PatchStickerProps = {
  id: number;
  dto: StickerPatchRequestDto;
};

type CreatePrivateStickerDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  file: File | null;
};

const CreatePrivateStickerDialog = ({
  isOpen,
  setIsOpen,
  file,
}: CreatePrivateStickerDialogProps) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [fileForUpload, setFileForUpload] = useState<File | null>(null);

  const queryClient = useQueryClient();

  const { mutate: patchStickerMutate } = useMutation({
    mutationFn: ({ id, dto }: PatchStickerProps) =>
      api.stickers.stickersControllerPatchSticker(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.stickers.private.queryKey,
      });
    },

    onError: () => {
      toast.error(TOAST_MESSAGES.PATCH_STICKER_FAIL);
    },
  });

  const { mutate } = useMutation({
    mutationFn: (dto: ImageUploadRequestDto) =>
      api.stickers.stickersControllerCreatePrivateSticker(dto),
    onSuccess: ({ data }) => {
      // FIXME: 원 기획과 다릅니다. 자동 재사용 설정을 하지 않습니다.
      patchStickerMutate({
        id: data.id,
        dto: { isReusable: true },
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UPLOAD_STICKER_FAIL);
    },
  });

  const handleRemoveBackground = async () => {
    if (imageUrl === undefined) {
      return;
    }
    const img = new Image();
    img.src = imageUrl;
    const blob = await removeBackground(img.src);

    const newImageUrl = URL.createObjectURL(blob);
    setImageUrl(newImageUrl);

    const newFileForUpload = new File([blob], 'sticker-remove-bg.png');
    setFileForUpload(newFileForUpload);
  };

  useEffect(() => {
    if (file) {
      setImageUrl(URL.createObjectURL(file));
      setFileForUpload(file);
    }
  }, [file]);

  if (file === null) {
    return null;
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent
        fullScreen
        className="flex h-full w-full max-w-screen-sm flex-col border-black/50 bg-black/50 p-0 backdrop-blur-lg"
      >
        <AppBar className="justify-between border-none bg-transparent text-white">
          <AppBarBack onClick={() => setIsOpen(false)} />
          <Button
            type="submit"
            variant="ghost"
            className="text-white"
            onClick={() => {
              if (fileForUpload !== null) {
                mutate({ file: fileForUpload });
              }
              setIsOpen(false);
            }}
          >
            완료
          </Button>
        </AppBar>
        <div className="my-auto flex justify-center bg-neutral-900">
          <img
            src={imageUrl}
            alt="스티커"
            className="max-h-[60dvh] max-w-full"
          />
        </div>
        <div className="flex justify-evenly pb-10">
          <Button disabled>사각형 자르기</Button>
          <Button variant="secondary" onClick={handleRemoveBackground}>
            외곽선 자르기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { CreatePrivateStickerDialog };
