import type { Meta, StoryObj } from '@storybook/react';

import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof StackedUserCard> = {
  title: 'Unstable/StackedUserCard',
  component: StackedUserCard,
  argTypes: {
    avatar: {
      control: {
        type: 'text',
      },
    },
    username: {
      control: {
        type: 'text',
      },
    },
    userHandle: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: {
      exclude: ['right'],
    },
  },
};

type Story = StoryObj<typeof StackedUserCard>;

const Playground: Story = {
  args: {
    avatar:
      'https://preview.free3d.com/img/2018/04/2269230414092568255/4t4ll0dg.jpg',
    username: '이오리',
    userHandle: 'lee-ori',
    description:
      '인테리어나 집꾸미기에 관심이 많아요! 여러분의 집도 함께 꾸며드릴까요?',
    right: (
      <Button size="sm" radius="full">
        팔로우
      </Button>
    ),
  },
};

const exampleData = [
  {
    avatar:
      'https://preview.free3d.com/img/2018/04/2269230414092568255/4t4ll0dg.jpg',
    username: '이오리',
    userHandle: 'lee-ori',
    description:
      '인테리어나 집꾸미기에 관심이 많아요! 여러분의 집도 함께 꾸며드릴까요?',
    right: (
      <Button size="sm" radius="full">
        팔로우
      </Button>
    ),
  },
  {
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Loutre_g%C3%A9ante_gros_plan.jpg/1200px-Loutre_g%C3%A9ante_gros_plan.jpg',
    username: '김수달',
    userHandle: 'kim-sudal',
    description: '여러분과 함께 즐거운 시간을 보내고 싶어요.',
    right: (
      <Button size="sm" variant="secondary" radius="full">
        팔로잉
      </Button>
    ),
  },
  {
    avatar:
      'https://images.chosun.com/resizer/ebyov8zMQwFBKMq6NLp3W0MAtCs=/500x475/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NRVFQKTQC5DCXNDXPJMTONFHJA.jpg',
    username: '양가람',
    userHandle: 'yang-garam',
    description: '여행을 좋아하는 양가람입니다.',
  },
  {
    avatar:
      'https://preview.free3d.com/img/2018/04/2269230414092568255/4t4ll0dg.jpg',
    username: '이오리',
    userHandle: 'lee-ori',
    description:
      '인테리어나 집꾸미기에 관심이 많아요! 여러분의 집도 함께 꾸며드릴까요?',
    right: (
      <Button size="sm" radius="full">
        팔로우
      </Button>
    ),
  },
  {
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Loutre_g%C3%A9ante_gros_plan.jpg/1200px-Loutre_g%C3%A9ante_gros_plan.jpg',
    username: '김수달',
    userHandle: 'kim-sudal',
    description: '여러분과 함께 즐거운 시간을 보내고 싶어요.',
    right: (
      <Button size="sm" variant="secondary" radius="full">
        팔로잉
      </Button>
    ),
  },
  {
    avatar:
      'https://images.chosun.com/resizer/ebyov8zMQwFBKMq6NLp3W0MAtCs=/500x475/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NRVFQKTQC5DCXNDXPJMTONFHJA.jpg',
    username: '양가람',
    userHandle: 'yang-garam',
    description: '여행을 좋아하는 양가람입니다.',
    right: (
      <Button size="sm" radius="full">
        팔로우
      </Button>
    ),
  },
  {
    avatar:
      'https://preview.free3d.com/img/2018/04/2269230414092568255/4t4ll0dg.jpg',
    username: '이오리',
    userHandle: 'lee-ori',
    description:
      '인테리어나 집꾸미기에 관심이 많아요! 여러분의 집도 함께 꾸며드릴까요?',
  },
] as const;

const Example: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {exampleData.map((data, index) => (
        <StackedUserCard key={index} {...data} />
      ))}
    </div>
  ),
};

export { Example, Playground };
export default meta;
