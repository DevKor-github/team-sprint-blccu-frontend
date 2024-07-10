import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { getValues } from '@/lib/utils';

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
  articleCategoryId: z.number(),
  allowComment: z.enum(getValues(PUBLISH_POST_ALLOW_COMMENT_TYPE)), // ButtonRadioGroup을 사용하려면 String 타입이어야 해서 어쩔 수 없이 사용
  scope: z.enum(getValues(PUBLISH_POST_SCOPE_TYPE)),
  mainDescription: z.string().min(1),
});

type PublishPostFormValues = z.infer<typeof publishPostFormSchema>;

/**
 * @note publishPostFormSchema의 key와 일치해야 합니다.
 */
const PUBLISH_POST_NAME = {
  TITLE: 'title',
  ARTICLE_CATEGORY_ID: 'articleCategoryId',
  ALLOW_COMMENT: 'allowComment',
  SCOPE: 'scope',
  MAIN_DESCRIPTION: 'mainDescription',
} as const;

type UsePublishArticleFormProps = {
  defaultValues?: UseFormProps<PublishPostFormValues>['defaultValues'];
  onSubmit: (values: PublishPostFormValues) => void;
};

const usePublishArticleForm = ({
  defaultValues,
  onSubmit,
}: UsePublishArticleFormProps) => {
  const form = useForm<PublishPostFormValues>({
    resolver: zodResolver(publishPostFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  PUBLISH_POST_ALLOW_COMMENT_TYPE,
  PUBLISH_POST_NAME,
  PUBLISH_POST_SCOPE_TYPE,
  usePublishArticleForm,
  type PublishPostFormValues,
};
