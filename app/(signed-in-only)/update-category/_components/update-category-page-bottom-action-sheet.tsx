import Link from 'next/link';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  BottomActionSheet,
  BottomActionSheetContent,
  BottomActionSheetGroup,
  BottomActionSheetItem,
  BottomActionSheetSeparator,
  BottomActionSheetTrigger,
} from '@/components/ui-unstable/bottom-action-sheet';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { api } from '@/lib/api';
import { queries } from '@/queries';
import { type PropsWithTrigger } from '@/types/util';

type UpdateCategoryPageBottomActionSheetProps = {
  id: number;
} & PropsWithTrigger;

const UpdateCategoryPageBottomActionSheet = ({
  id,
  trigger,
}: UpdateCategoryPageBottomActionSheetProps) => {
  const queryClient = useQueryClient();

  const { me } = useMeQuery();

  const { mutate } = useMutation({
    mutationFn: (categoryId: number) =>
      api.users.articleCategoriesControllerDeleteArticleCategory(categoryId),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.DELETE_CATEGORY_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.users.categories(me?.id).queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.DELETE_CATEGORY_FAIL);
    },
  });

  return (
    <BottomActionSheet>
      <BottomActionSheetTrigger asChild>{trigger}</BottomActionSheetTrigger>
      <BottomActionSheetContent>
        <BottomActionSheetGroup>
          <Link href={ROUTES.CATEGORY_ID_EDIT_OF(id)}>
            <BottomActionSheetItem>수정하기</BottomActionSheetItem>
          </Link>
          <BottomActionSheetSeparator />
          <div onClick={() => mutate(id)}>
            <BottomActionSheetItem className="text-blccu-red">
              삭제하기
            </BottomActionSheetItem>
          </div>
        </BottomActionSheetGroup>
        <BottomActionSheetGroup>
          <BottomActionSheetItem>취소하기</BottomActionSheetItem>
        </BottomActionSheetGroup>
      </BottomActionSheetContent>
    </BottomActionSheet>
  );
};

export { UpdateCategoryPageBottomActionSheet };
