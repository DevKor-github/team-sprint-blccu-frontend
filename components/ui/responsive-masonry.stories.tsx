import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { type Meta, type StoryObj } from '@storybook/react';

import { AutoHeightImage } from '@/components/ui-unstable/auto-height-image';

const meta: Meta<typeof ResponsiveMasonry> = {
  title: 'Components/ResponsiveMasonry',
  component: ResponsiveMasonry,
};

type Story = StoryObj<typeof ResponsiveMasonry>;

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

const Example: Story = {
  render: () => (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        0: 1,
        240: 2,
        360: 3,
      }}
    >
      <Masonry gutter="10px">
        {examplePhotos.map((photo, index) => (
          <AutoHeightImage
            key={index}
            src={photo}
            alt="photo"
            className="rounded-md"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  ),
};

export { Example };
export default meta;
