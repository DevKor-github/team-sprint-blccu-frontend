'use client';

import Link from 'next/link';

import { type ReactNode } from 'react';

import {
  BottomActionSheet,
  BottomActionSheetContent,
  BottomActionSheetGroup,
  BottomActionSheetItem,
  BottomActionSheetSeparator,
  BottomActionSheetTrigger,
} from '@/components/ui-unstable/bottom-action-sheet';
import { ROUTES } from '@/constants/routes';
import { generateUuid } from '@/lib/utils';

const categoryId = generateUuid();

type UpdateCategoryPageBottomActionSheetProps = {
  trigger: ReactNode;
};

const UpdateCategoryPageBottomActionSheet = ({
  trigger,
}: UpdateCategoryPageBottomActionSheetProps) => {
  return (
    <BottomActionSheet>
      <BottomActionSheetTrigger asChild>{trigger}</BottomActionSheetTrigger>
      <BottomActionSheetContent>
        <BottomActionSheetGroup>
          <Link href={ROUTES.CATEGORY_ID_EDIT_OF(categoryId)}>
            <BottomActionSheetItem>수정하기</BottomActionSheetItem>
          </Link>
          <BottomActionSheetSeparator />
          <BottomActionSheetItem className="text-blccu-red">
            삭제하기
          </BottomActionSheetItem>
          <BottomActionSheetSeparator />
        </BottomActionSheetGroup>
        <BottomActionSheetGroup>
          <BottomActionSheetItem>취소하기</BottomActionSheetItem>
        </BottomActionSheetGroup>
      </BottomActionSheetContent>
    </BottomActionSheet>
  );
};

export { UpdateCategoryPageBottomActionSheet };
