import type { Meta, StoryObj } from '@storybook/react';

import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';

const meta: Meta<typeof StackedPostCard> = {
  title: 'Unstable/StackedPostCard',
  component: StackedPostCard,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    thumbnail: {
      control: {
        type: 'text',
      },
    },
    date: {
      control: {
        type: 'date',
      },
    },
  },
};

type Story = StoryObj<typeof StackedPostCard>;

const Playground: Story = {
  args: {
    username: '유파랑',
    title: '비오는 날이 좋아 ☂',
    description:
      '벚꽃이 떨어지는게 아쉽긴 해도 비오는 날은 역시 좋은 것 같아요! 톡톡 떨어지는 소리가 마음을 편안하게 해주는 것 같아요. 여러분은 어떤 날씨를 좋아하시나요?',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMQ4MLWDwor_EWB2696OajKDKa8Zff1_XAbceJjRduw&s',
    date: new Date(2024, 2, 18),
  },
};

const exampleData = [
  {
    username: '유파랑',
    title: '비오는 날이 좋아 ☂',
    description:
      '벚꽃이 떨어지는게 아쉽긴 해도 비오는 날은 역시 좋은 것 같아요! 톡톡 떨어지는 소리가 마음을 편안하게 해주는 것 같아요. 여러분은 어떤 날씨를 좋아하시나요?',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMQ4MLWDwor_EWB2696OajKDKa8Zff1_XAbceJjRduw&s',
    date: new Date(2024, 2, 18),
  },
  {
    username: '이야옹',
    title: '우리집 고양이 자랑합니다 (*ΦωΦ*)Ψ',
    description:
      '우리집에 고양이 있어용ㅎㅎ 귀엽죠  아직 7개월 애기입니당... 매일 매일 쑥쑥 크네영 너무 귀여워요ㅠㅠ',
    thumbnail:
      'https://species.nibr.go.kr/UPLOAD/digital/species/12000009/120000095823/BIMGMM0000386036_20221116112438319509.jpg',
    date: new Date(2024, 2, 18),
  },
  {
    username: 'zero',
    title: 'ⓑⓘⓡⓣⓗ ⓓⓐⓨ🎂',
    description:
      '저 생일이에요.....🎂 혹시 다른 분도 생일이시라면 축하드립니당ㅎㅎㅎ 오늘 딱히 한 거는 없지만 그래도 기쁩니다! 여러분도 행복하세요~',
    thumbnail:
      'https://image.idus.com/image/files/b7a9639549fa4a2ca9d3aa3ae60496fd_512.jpg',
    date: new Date(2024, 2, 18),
  },
  {
    username: '유파랑',
    title: '비오는 날이 좋아 ☂',
    description:
      '벚꽃이 떨어지는게 아쉽긴 해도 비오는 날은 역시 좋은 것 같아요! 톡톡 떨어지는 소리가 마음을 편안하게 해주는 것 같아요. 여러분은 어떤 날씨를 좋아하시나요?',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMQ4MLWDwor_EWB2696OajKDKa8Zff1_XAbceJjRduw&s',
    date: new Date(2024, 2, 18),
  },
  {
    username: '이야옹',
    title:
      '우리집 고양이 자랑합니다 (*ΦωΦ*)Ψ 우리집 고양이 자랑합니다 (*ΦωΦ*)Ψ',
    description:
      '우리집에 고양이 있어용ㅎㅎ 귀엽죠  아직 7개월 애기입니당... 매일 매일 쑥쑥 크네영 너무 귀여워요ㅠㅠ',
    thumbnail:
      'https://species.nibr.go.kr/UPLOAD/digital/species/12000009/120000095823/BIMGMM0000386036_20221116112438319509.jpg',
    date: new Date(2024, 2, 18),
  },
  {
    username: 'zero',
    title: 'ⓑⓘⓡⓣⓗ ⓓⓐⓨ🎂',
    description:
      '저 생일이에요.....🎂 혹시 다른 분도 생일이시라면 축하드립니당ㅎㅎㅎ 오늘 딱히 한 거는 없지만 그래도 기쁩니다! 여러분도 행복하세요~',
    thumbnail:
      'https://image.idus.com/image/files/b7a9639549fa4a2ca9d3aa3ae60496fd_512.jpg',
    date: new Date(2024, 2, 18),
  },
  {
    username: '유파랑',
    title: '비오는 날이 좋아 ☂',
    description:
      '벚꽃이 떨어지는게 아쉽긴 해도 비오는 날은 역시 좋은 것 같아요! 톡톡 떨어지는 소리가 마음을 편안하게 해주는 것 같아요. 여러분은 어떤 날씨를 좋아하시나요?',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMQ4MLWDwor_EWB2696OajKDKa8Zff1_XAbceJjRduw&s',
    date: new Date(2024, 2, 18),
  },
] as const;

const Example: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {exampleData.map((data, index) => (
        <StackedPostCard key={index} {...data} />
      ))}
    </div>
  ),
};

export { Example, Playground };
export default meta;
