import { type Meta, type StoryObj } from '@storybook/react';

import {
  MasonryItem,
  ResponsiveMasonry__Experimental,
} from '@/components/ui-experimental/responsive-masonry/responsive-masonry__experimental';
import { AutoHeightImage } from '@/components/ui-unstable/auto-height-image';

const meta: Meta<typeof ResponsiveMasonry__Experimental> = {
  title: 'Experimental/ResponsiveMasonry',
  component: ResponsiveMasonry__Experimental,
  argTypes: {
    breakpoints: {
      control: {
        type: 'object',
      },
    },
    gap: {
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
};

type Story = StoryObj<typeof ResponsiveMasonry__Experimental>;

const examplePhotos = [
  'https://images.unsplash.com/photo-1646187043863-d34d6f85ae93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fCVFQyVBMCU5QyVFQyVBMyVCQyVFQiU4RiU4NHxlbnwwfHx8fDE3MTI4NTY2OTd8MA&ixlib=rb-4.0.3&q=80&w=2000',
  'https://media.licdn.com/dms/image/D5612AQFZIgb14PcZcQ/article-cover_image-shrink_720_1280/0/1712832990937?e=1718841600&v=beta&t=rkC9GhFLLCKpSC_EGubZxcYQfFYfhSDB7cz4_x1UnN0',
  'https://www.lgcns.com/wp-content/uploads/2021/11/276D393458F07A4F04.png',
  'https://thumb.ac-illust.com/37/37405b48206e100357550676fd124a8f_t.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyOevSjb-FLCa7OVwOcPAp7cj4w2gNm2F2K9koBr4uQ&s',
  'https://img.hankyung.com/photo/202009/AA.23690748.1.jpg',
  'https://blog.altair.co.kr/wp-content/uploads/2021/06/large-895567_1920-1024x577.jpg',
  'https://thumb.ac-illust.com/37/37405b48206e100357550676fd124a8f_t.jpeg',
  'https://media.licdn.com/dms/image/D5612AQFZIgb14PcZcQ/article-cover_image-shrink_720_1280/0/1712832990937?e=1718841600&v=beta&t=rkC9GhFLLCKpSC_EGubZxcYQfFYfhSDB7cz4_x1UnN0',
  'https://www.lgcns.com/wp-content/uploads/2021/11/276D393458F07A4F04.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-rainy-sky-background-image_410908.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvFR_pTwpwLHPvcVSfpN1kdh76k78qi01ZqsU3M7CNw&s',
  'https://img.hankyung.com/photo/202009/AA.23690748.1.jpg',
  'https://blog.altair.co.kr/wp-content/uploads/2021/06/large-895567_1920-1024x577.jpg',
  'https://images.unsplash.com/photo-1646187043863-d34d6f85ae93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fCVFQyVBMCU5QyVFQyVBMyVCQyVFQiU4RiU4NHxlbnwwfHx8fDE3MTI4NTY2OTd8MA&ixlib=rb-4.0.3&q=80&w=2000',
  'https://media.licdn.com/dms/image/D5612AQFZIgb14PcZcQ/article-cover_image-shrink_720_1280/0/1712832990937?e=1718841600&v=beta&t=rkC9GhFLLCKpSC_EGubZxcYQfFYfhSDB7cz4_x1UnN0',
  'https://www.lgcns.com/wp-content/uploads/2021/11/276D393458F07A4F04.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-rainy-sky-background-image_410908.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvFR_pTwpwLHPvcVSfpN1kdh76k78qi01ZqsU3M7CNw&s',
  'https://thumb.ac-illust.com/37/37405b48206e100357550676fd124a8f_t.jpeg',
  'https://blog.altair.co.kr/wp-content/uploads/2021/06/large-895567_1920-1024x577.jpg',
  'https://images.unsplash.com/photo-1646187043863-d34d6f85ae93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fCVFQyVBMCU5QyVFQyVBMyVCQyVFQiU4RiU4NHxlbnwwfHx8fDE3MTI4NTY2OTd8MA&ixlib=rb-4.0.3&q=80&w=2000',
  'https://media.licdn.com/dms/image/D5612AQFZIgb14PcZcQ/article-cover_image-shrink_720_1280/0/1712832990937?e=1718841600&v=beta&t=rkC9GhFLLCKpSC_EGubZxcYQfFYfhSDB7cz4_x1UnN0',
  'https://www.lgcns.com/wp-content/uploads/2021/11/276D393458F07A4F04.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-rainy-sky-background-image_410908.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvFR_pTwpwLHPvcVSfpN1kdh76k78qi01ZqsU3M7CNw&s',
  'https://img.hankyung.com/photo/202009/AA.23690748.1.jpg',
  'https://blog.altair.co.kr/wp-content/uploads/2021/06/large-895567_1920-1024x577.jpg',
  'https://images.unsplash.com/photo-1646187043863-d34d6f85ae93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fCVFQyVBMCU5QyVFQyVBMyVCQyVFQiU4RiU4NHxlbnwwfHx8fDE3MTI4NTY2OTd8MA&ixlib=rb-4.0.3&q=80&w=2000',
  'https://media.licdn.com/dms/image/D5612AQFZIgb14PcZcQ/article-cover_image-shrink_720_1280/0/1712832990937?e=1718841600&v=beta&t=rkC9GhFLLCKpSC_EGubZxcYQfFYfhSDB7cz4_x1UnN0',
  'https://www.lgcns.com/wp-content/uploads/2021/11/276D393458F07A4F04.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-rainy-sky-background-image_410908.jpg',
  'https://thumb.ac-illust.com/37/37405b48206e100357550676fd124a8f_t.jpeg',
  'https://img.hankyung.com/photo/202009/AA.23690748.1.jpg',
  'https://thumb.ac-illust.com/37/37405b48206e100357550676fd124a8f_t.jpeg',
  'https://images.unsplash.com/photo-1646187043863-d34d6f85ae93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fCVFQyVBMCU5QyVFQyVBMyVCQyVFQiU4RiU4NHxlbnwwfHx8fDE3MTI4NTY2OTd8MA&ixlib=rb-4.0.3&q=80&w=2000',
  'https://media.licdn.com/dms/image/D5612AQFZIgb14PcZcQ/article-cover_image-shrink_720_1280/0/1712832990937?e=1718841600&v=beta&t=rkC9GhFLLCKpSC_EGubZxcYQfFYfhSDB7cz4_x1UnN0',
  'https://www.lgcns.com/wp-content/uploads/2021/11/276D393458F07A4F04.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-rainy-sky-background-image_410908.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvFR_pTwpwLHPvcVSfpN1kdh76k78qi01ZqsU3M7CNw&s',
  'https://img.hankyung.com/photo/202009/AA.23690748.1.jpg',
  'https://blog.altair.co.kr/wp-content/uploads/2021/06/large-895567_1920-1024x577.jpg',
];

const Playground: Story = {
  args: {
    breakpoints: [
      { width: 0, columns: 1 },
      { width: 240, columns: 2 },
      { width: 360, columns: 3 },
    ],
    gap: 12,
    children: Array(50)
      .fill(null)
      .map((_, index) => {
        const aspectRatio = Math.random() * 0.5 + 0.5;

        return (
          <MasonryItem key={index}>
            <div className="flex flex-col gap-2">
              <div
                className="flex items-center justify-center bg-gray-200"
                style={{
                  aspectRatio,
                }}
              >
                {index}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-200" />
                <div className="h-6 w-6 rounded-full bg-gray-200" />
                <div className="h-6 w-6 rounded-full bg-gray-200" />
              </div>
            </div>
          </MasonryItem>
        );
      }),
  },
};

const Example: Story = {
  render: () => (
    <ResponsiveMasonry__Experimental
      breakpoints={[
        { width: 0, columns: 1 },
        { width: 240, columns: 2 },
        { width: 360, columns: 3 },
      ]}
      gap={8}
    >
      {examplePhotos.map((photo, index) => (
        <MasonryItem key={index}>
          <AutoHeightImage src={photo} alt="photo" className="rounded-md" />
        </MasonryItem>
      ))}
    </ResponsiveMasonry__Experimental>
  ),
};

export { Example, Playground };
export default meta;
