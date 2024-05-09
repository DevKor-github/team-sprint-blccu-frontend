'use client';

import Link from 'next/link';

import {
  BottomActionSheet,
  BottomActionSheetContent,
  BottomActionSheetGroup,
  BottomActionSheetItem,
  BottomActionSheetSeparator,
  BottomActionSheetTrigger,
} from '@/components/ui-unstable/bottom-action-sheet';
import { ROUTES } from '@/constants/routes';
import { generateId } from '@/lib/utils';
import { type PropsWithTrigger } from '@/types/props';

const id = generateId();

const ReportCommentBottomActionSheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <BottomActionSheet>
      <BottomActionSheetTrigger asChild>{trigger}</BottomActionSheetTrigger>
      <BottomActionSheetContent>
        <BottomActionSheetGroup>
          <Link href={ROUTES.REPORT_COMMENT_ID_OF(id)}>
            <BottomActionSheetItem className="text-blccu-red">
              신고하기
            </BottomActionSheetItem>
          </Link>
          <BottomActionSheetSeparator />
        </BottomActionSheetGroup>
        <BottomActionSheetGroup>
          <BottomActionSheetItem>취소하기</BottomActionSheetItem>
        </BottomActionSheetGroup>
      </BottomActionSheetContent>
    </BottomActionSheet>
  );
};

export { ReportCommentBottomActionSheet };
