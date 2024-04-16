import type { Meta, StoryObj } from '@storybook/react';

import { HorizontalScrollablePostCard } from '@/components/ui-unstable/horizontal-scrollable-post-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const meta: Meta<typeof HorizontalScrollablePostCard> = {
  title: 'Unstable/HorizontalScrollablePostCard',
  component: HorizontalScrollablePostCard,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
    avatar: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    thumbnail: {
      control: {
        type: 'text',
      },
    },
  },
};

type Story = StoryObj<typeof HorizontalScrollablePostCard>;

const Playground: Story = {
  args: {
    username: 'purple LUV',
    avatar:
      'https://contents.lotteon.com/itemimage/_v131313/LO/20/52/07/65/85/_2/05/20/76/58/7/LO2052076585_2052076587_1.jpg/dims/resizef/720X720',
    title: '여름, 복숭아',
    thumbnail:
      'https://lh5.googleusercontent.com/proxy/eIxx4QbdjRmWk5ge_74jLPGNQsgqG34XliuiqM16BcBd-W-WXUBq4o8F7L6LRW9iqLF0Dw1Pm52w_0CisqPBbejh6ke810ccuZhorcglefFJac8wpYCJO-CRNNfBBKxCxhu3ZygU',
  },
};

const exampleData = [
  {
    username: 'purple LUV',
    avatar:
      'https://contents.lotteon.com/itemimage/_v131313/LO/20/52/07/65/85/_2/05/20/76/58/7/LO2052076585_2052076587_1.jpg/dims/resizef/720X720',
    title: '여름, 복숭아',
    thumbnail:
      'https://lh5.googleusercontent.com/proxy/eIxx4QbdjRmWk5ge_74jLPGNQsgqG34XliuiqM16BcBd-W-WXUBq4o8F7L6LRW9iqLF0Dw1Pm52w_0CisqPBbejh6ke810ccuZhorcglefFJac8wpYCJO-CRNNfBBKxCxhu3ZygU',
  },
  {
    username: 'J soo',
    avatar:
      'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20240206075441_1b54f931528a9d36c98db236a5e19d74.jpg',
    title: '영화 추천해요!',
    thumbnail:
      'https://d2k6w3n3qf94c4.cloudfront.net/media/test/main_image/%E1%84%92%E1%85%A2%E1%84%85%E1%85%B5%E1%84%91%E1%85%A9%E1%84%90%E1%85%A5_%E1%84%87%E1%85%B5%E1%84%92%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%B3_%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5__%E1%84%89%E1%85%B3%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
  },
  {
    username: '유파랑',
    avatar:
      'https://www.altius-group.com.au/hs-fs/hubfs/website-2023/services/people-and-employee-services/Altius_Group_People_and_Employee_Services_Employee_Assistance_Program%20.webp?width=800&height=800&name=Altius_Group_People_and_Employee_Services_Employee_Assistance_Program%20.webp',
    title: '비오는 날이 좋아 ☂',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMQ4MLWDwor_EWB2696OajKDKa8Zff1_XAbceJjRduw&s',
  },
];

const Example: Story = {
  render: () => (
    <ScrollArea>
      <div className="flex gap-3 pb-4">
        {exampleData.map((data, index) => (
          <HorizontalScrollablePostCard key={index} {...data} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export { Example, Playground };
export default meta;
