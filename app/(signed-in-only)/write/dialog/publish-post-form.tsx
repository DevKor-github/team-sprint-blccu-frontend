'use client';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import { type PublishPostInput } from '@/__generated__/data-contracts';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
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
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { api } from '@/lib/api';
import { getValues, noop } from '@/lib/utils';
import { queries } from '@/queries';

const PUBLISH_POST_SCOPE_TYPE = {
  PUBLIC: 'PUBLIC',
  PROTECTED: 'PROTECTED',
  PRIVATE: 'PRIVATE',
} as const;

const PUBLISH_POST_ALLOW_COMMENT_TYPE = {
  TRUE: String(true),
  FALSE: String(false),
} as const;

const publishPostFormSchema = z.object({
  title: z.string().min(1).max(80),
  postCategoryId: z.string(),
  allow_comment: z.enum(getValues(PUBLISH_POST_ALLOW_COMMENT_TYPE)), // ButtonRadioGroup을 사용하려면 String 타입이어야 해서 어쩔 수 없이 사용
  scope: z.enum(getValues(PUBLISH_POST_SCOPE_TYPE)),
  main_description: z.string().min(1),
});

type PublishPostFormValues = z.infer<typeof publishPostFormSchema>;

/**
 * @note publishPostFormSchema의 key와 일치해야 합니다.
 */
const PUBLISH_POST_NAME = {
  TITLE: 'title',
  POST_CATEGORY_ID: 'postCategoryId',
  ALLOW_COMMENT: 'allow_comment',
  SCOPE: 'scope',
  MAIN_DESCRIPTION: 'main_description',
} as const;

const PublishPostForm = () => {
  const { isSignedIn, me } = useFetchMe();

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

  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (publishPostInput: PublishPostInput) =>
      api.posts.postsControllerPublishPost(publishPostInput),
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

  const form = useForm<PublishPostFormValues>({
    resolver: zodResolver(publishPostFormSchema),
    defaultValues: {
      title: stripHtml(titleContents), // FIXME: html element까지 들어가는 문제
      allow_comment: PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE,
      scope: PUBLISH_POST_SCOPE_TYPE.PUBLIC,
    },
  });

  const onSubmit = async (values: PublishPostFormValues) => {
    if (mainContainerElement === null) {
      return;
    }

    const dataUrl = await capture(mainContainerElement);

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'capture.png';
    link.click();
    console.log(dataUrl); // TODO: dataUrl -> File -> 서버에 업로드한 뒤 url을 받아온 뒤 image_url에 넣기

    mutate({
      ...values,
      allow_comment:
        values.allow_comment === PUBLISH_POST_ALLOW_COMMENT_TYPE.TRUE,
      postBackgroundId: background?.id ?? '', // FIXME: 빈 내지일 경우 현재 에러 발생
      title_html: titleContents,
      content: bodyContents,
      image_url: '', // TODO: capture upload 이미지
      main_image_url: '', // TODO: 대표 이미지 로직 제작 이후 채워넣기
    });
  };

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AppBar className="justify-between border-none bg-transparent">
          <DialogClose>
            <AppBarBack onClick={noop} />
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
              <div className="h-24 w-24 rounded-2xl bg-blccu-neutral-400" />
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
