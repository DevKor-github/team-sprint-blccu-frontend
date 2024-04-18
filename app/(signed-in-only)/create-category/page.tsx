'use client';

import { useRouter } from 'next/navigation';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ROUTES } from '@/constants/routes';

const CreateCategoryPage = () => {
  /**
   * @note
   * - 개발 시 Link와 Button을 구분하고 있습니다. (Button 모양이라도 단순 페이지 이동인 경우 Link 사용)
   * - 이 경우에는,생성 버튼 클릭 시 API 호출로 변경될 예정이라 예외적으로 Link가 아닌 router.push()를 사용합니다.
   */
  const router = useRouter();

  return (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle align="center">카테고리 생성</AppBarTitle>
      </AppBar>
      <div className="flex h-dvh flex-col justify-between px-4 pb-4 pt-14">
        <div className="mt-6 flex flex-col gap-4">
          <Label htmlFor="category-title">카테고리 제목</Label>
          <Input
            id="category-title"
            placeholder="카테고리 제목을 입력하세요."
          />
        </div>
        <Button onClick={() => router.push(ROUTES.UPDATE_CATEGORY)}>
          카테고리 생성
        </Button>
      </div>
    </>
  );
};

export default CreateCategoryPage;
