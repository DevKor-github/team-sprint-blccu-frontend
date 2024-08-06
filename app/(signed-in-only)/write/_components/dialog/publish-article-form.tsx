'use client';

import { useRouter } from 'next/navigation';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  type ArticleCreateRequestDto,
  type ImageUploadRequestDto,
} from '@/__generated__/data-contracts';
import {
  PUBLISH_POST_ALLOW_COMMENT_TYPE,
  PUBLISH_POST_NAME,
  PUBLISH_POST_SCOPE_TYPE,
  usePublishArticleForm,
} from '@/app/(signed-in-only)/write/_hooks/use-publish-article-form';
import { capture } from '@/app/(signed-in-only)/write/_lib/utils';
import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { useCurrentImageIdStore } from '@/app/(signed-in-only)/write/_store/use-current-image-id-store';
import { useEditorContentsStore } from '@/app/(signed-in-only)/write/_store/use-editor-contents-store';
import { useReprImageStore } from '@/app/(signed-in-only)/write/_store/use-repr-image-store';
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

const PublishArticleForm = () => {
  const router = useRouter();

  const { isSignedIn, me } = useMeQuery();

  const { reprImageSrc } = useReprImageStore();
  const { setCaptureMode } = useCaptureModeStore();
  const { background, titleContents, bodyContents, mainContainerElement } =
    useEditorContentsStore();
  const { currentImageId } = useCurrentImageIdStore(); // FIXME: wip

  const { data: categoriesData } = useQuery({
    ...queries.users.categories(me?.id),
    enabled: isSignedIn,
  });

  const categories = categoriesData?.data ?? [];

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

  const { mutate } = useMutation({
    mutationFn: (dto: ArticleCreateRequestDto) =>
      api.articles.articlesCreateControllerPublishArticle(dto),
    onSuccess: ({ data }) => {
      toast.success(TOAST_MESSAGES.PUBLISH_POST_SUCCESS);

      if (me === undefined) {
        return;
      }

      router.push(ROUTES.ARTICLE_OF(me.handle, data.articleData.id));
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.PUBLISH_POST_FAIL);
    },
  });

  const imgUrlMutation = useMutation({
    mutationFn: async (file: ImageUploadRequestDto) => {
      const response =
        await api.stickers.stickersControllerCreatePrivateSticker(file);
      return response.data.imageUrl;
    },
    onSuccess: async (imageUrl) => {
      console.log(imageUrl);
    },
    onError: () => {
      toast.error('이미지 업로드에 실패했습니다.');
    },
  });

  const { form, onSubmit } = usePublishArticleForm({
    defaultValues: {
      title: stripHtml(titleContents),
      mainDescription: stripHtml(bodyContents),
      allowComment: PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE,
      scope: PUBLISH_POST_SCOPE_TYPE.PUBLIC,
    },
    onSubmit: async (values) => {
      values.mainDescription = stripHtml(bodyContents);
      if (mainContainerElement === null) {
        return;
      }
      await setCaptureMode(true);

      const dataUrl = await capture(mainContainerElement);
      const file = base64ToFile(dataUrl, 'capture.png');
      const imageUrl = await imgUrlMutation.mutateAsync({ file: file });

      mutate({
        ...values,
        allowComment:
          values.allowComment === PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE,
        articleBackgroundId: background?.id ?? null,
        htmlTitle: titleContents,
        content: bodyContents,
        imageUrl, // TODO: capture upload 이미지
        mainImageUrl: reprImageSrc,
        currentImageId,
        stickerBlocks: [], // wip
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
              {/* <div className="w-24 h-24 rounded-2xl bg-blccu-neutral-400" /> */}
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
                  name={PUBLISH_POST_NAME.ARTICLE_CATEGORY_ID}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md font-medium">
                        카테고리
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          value={field.value?.toString()}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="카테고리를 선택하세요." />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category.categoryId}
                                value={category.categoryId.toString()}
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

export { PublishArticleForm };
