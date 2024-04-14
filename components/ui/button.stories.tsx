import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'ghost'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'sm'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      exclude: ['asChild'],
    },
  },
};

type Story = StoryObj<typeof Button>;

const Playground: Story = {
  args: {
    children: '팔로잉',
    variant: 'secondary',
  },
};

const Example: Story = {
  render: () => (
    <div className="flex h-[400px] flex-col justify-between">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">
          안녕하세요,
          <br />
          블로그 꾸미기 서비스 '블꾸'입니다.
        </h1>
        <p className="text-sm text-blccu-neutral-600">
          지금 블로그 기본 프로필을 설정해보세요.
        </p>
      </div>
      <Button>계속 프로필 설정하기</Button>
    </div>
  ),
};

const Example2: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="h-[400px]">
      <div className="flex h-12 w-full items-center bg-blccu-neutral-200 px-4">
        <p className="font-bold">계정 관리</p>
      </div>
      <div className="flex h-full flex-col justify-between px-4 pt-4">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <h2 className="font-medium">계정 정보</h2>
            <div className="rounded-lg bg-blccu-neutral-200 p-4">
              <p className="text-sm text-blccu-neutral-600">
                가입 방법: 카카오톡 로그인
              </p>
              <p className="text-sm text-blccu-neutral-600">
                가입 일자: 2024.04.14.
              </p>
            </div>
          </section>
          <section>
            <h2 className="font-medium">로그아웃</h2>
          </section>
        </div>
        <Button variant="ghost">회원 탈퇴</Button>
      </div>
    </div>
  ),
};

export { Example, Example2, Playground };

export default meta;
