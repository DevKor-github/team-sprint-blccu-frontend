'use client';

import { useRouter } from 'next/navigation';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  type ImageUploadDto,
  type PublishPostInput,
} from '@/__generated__/data-contracts';
import {
  PUBLISH_POST_ALLOW_COMMENT_TYPE,
  PUBLISH_POST_NAME,
  PUBLISH_POST_SCOPE_TYPE,
  usePublishPostForm,
} from '@/app/(signed-in-only)/write/hooks/use-publish-post-form';
import useCaptureModeStore from '@/app/(signed-in-only)/write/store/captureMode';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useReprImageStore from '@/app/(signed-in-only)/write/store/reprImage';
import { capture } from '@/app/(signed-in-only)/write/utils/capture';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import {
  ButtonRadioGroup,
  ButtonRadioGroupItem,
} from '@/components/ui-unstable/button-radio-group';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { api } from '@/lib/api';
import { noop } from '@/lib/utils';
import { queries } from '@/queries';

const PublishPostForm = () => {
  const { isSignedIn, me } = useMeQuery();

  const reprImageSrc = useReprImageStore((state: any) => state.reprImageSrc);
  const setCaptureMode = useCaptureModeStore(
    (state: any) => state.setCaptureMode,
  );

  const { data: categoriesData } = useQuery({
    ...queries.users.categories(me?.kakaoId),
    enabled: isSignedIn,
  });

  const categories = categoriesData?.data ?? [];

  const { background, titleContents, bodyContents, mainContainerElement } =
    useEditorContentsStore((state) => state);

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const base64ToFile = (data: string, fileName: string) => {
    const arr = data.split(',');
    const mime = arr[0]?.match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (dto: PublishPostInput) =>
      api.posts.postsControllerPublishPost(dto),
    onSuccess: ({ data }) => {
      toast.success(TOAST_MESSAGES.PUBLISH_POST_SUCCESS);

      if (me === undefined) {
        return;
      }

      router.push(ROUTES.POST_OF(me.handle, data.id));
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.PUBLISH_POST_FAIL);
    },
  });

  const imgUrlMutation = useMutation({
    mutationFn: async (file: ImageUploadDto) => {
      const response =
        await api.posts.postsControllerCreatePrivateSticker(file);
      return response.data.image_url;
    },
    onSuccess: async (image_url) => {
      console.log(image_url);
    },
    onError: () => {
      toast.error('이미지 업로드에 실패했습니다.');
    },
  });

  const { form, onSubmit } = usePublishPostForm({
    defaultValues: {
      title: stripHtml(titleContents),
      main_description: stripHtml(bodyContents),
      allow_comment: PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE,
      scope: PUBLISH_POST_SCOPE_TYPE.PUBLIC,
    },
    onSubmit: async (values) => {
      values.main_description = stripHtml(bodyContents);
      if (mainContainerElement === null) {
        return;
      }
      await setCaptureMode(true);

      const dataUrl = await capture(mainContainerElement);
      const file = base64ToFile(dataUrl, 'capture.png');
      const image_url = await imgUrlMutation.mutateAsync({ file: file });

      mutate({
        ...values,
        allow_comment:
          values.allow_comment === PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE,
        postBackgroundId: background?.id ?? '', // FIXME: 빈 내지일 경우 현재 에러 발생
        title_html: titleContents,
        content: bodyContents,
        image_url: image_url, // TODO: capture upload 이미지
        main_image_url: reprImageSrc,
      });
    },
  });

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <AppBar className="justify-between border-none bg-transparent">
          <DialogClose>
            <AppBarBack
              onClick={() => {
                noop;
                setCaptureMode(false);
              }}
            />
          </DialogClose>
          <AppBarTitle align="center">글 게시</AppBarTitle>
          <Button
            type="submit"
            variant="ghost"
            disabled={isSubmitting || !isValid}
          >
            올리기
          </Button>
        </AppBar>
        <div className="flex flex-col gap-4 pt-16">
          <section className="w-full px-4">
            <div className="flex gap-4 rounded-3xl bg-blccu-white p-4 shadow-blccu-secondary">
              {/* TODO: 대표 이미지 미리보기 */}
              {/* <div className="h-24 w-24 rounded-2xl bg-blccu-neutral-400" /> */}
              <div className="flex flex-1 flex-col gap-2">
                <FormField
                  control={form.control}
                  name={PUBLISH_POST_NAME.TITLE}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          {...field}
                          placeholder="제목을 입력하세요"
                          className="w-full text-lg"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={PUBLISH_POST_NAME.MAIN_DESCRIPTION}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          {...field}
                          placeholder="내용을 입력하세요"
                          className="h-16 w-full text-lg"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </section>
          <section className="w-full px-4">
            <div className="flex flex-col gap-8 rounded-3xl bg-blccu-white p-4 shadow-blccu-secondary">
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name={PUBLISH_POST_NAME.POST_CATEGORY_ID}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md font-medium">
                        카테고리
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="카테고리를 선택하세요." />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category.categoryId}
                                value={category.categoryId}
                              >
                                {category.categoryName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={PUBLISH_POST_NAME.SCOPE}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium">
                      공개 범위
                    </FormLabel>
                    <FormControl>
                      <ButtonRadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-2"
                      >
                        <ButtonRadioGroupItem
                          value={PUBLISH_POST_SCOPE_TYPE.PUBLIC}
                          className="flex-1"
                        >
                          공개
                        </ButtonRadioGroupItem>
                        <ButtonRadioGroupItem
                          value={PUBLISH_POST_SCOPE_TYPE.PROTECTED}
                          className="flex-1"
                        >
                          팔로워 공개
                        </ButtonRadioGroupItem>
                        <ButtonRadioGroupItem
                          value={PUBLISH_POST_SCOPE_TYPE.PRIVATE}
                          className="flex-1"
                        >
                          비공개
                        </ButtonRadioGroupItem>
                      </ButtonRadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={PUBLISH_POST_NAME.ALLOW_COMMENT}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium">
                      댓글 설정
                    </FormLabel>
                    <FormControl>
                      <ButtonRadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-2"
                      >
                        <ButtonRadioGroupItem
                          value={PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE}
                          className="flex-1"
                        >
                          댓글 허용
                        </ButtonRadioGroupItem>
                        <ButtonRadioGroupItem
                          value={PUBLISH_POST_ALLOW_COMMENT_TYPE.FALSE}
                          className="flex-1"
                        >
                          댓글 비허용
                        </ButtonRadioGroupItem>
                      </ButtonRadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </section>
        </div>
      </form>
    </Form>
  );
};

export { PublishPostForm };
