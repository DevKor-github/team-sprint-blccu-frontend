import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const stickers = createQueryKeys('stickers', {
  categories: {
    queryKey: null,
    queryFn: () => api.stickers.stickerCategoriesControllerFetchCategories(),
  },
  category: (id: number) => ({
    queryKey: [id],
    queryFn: () =>
      api.stickers.stickerCategoriesControllerFetchStickersByCategoryName(id),
  }),
  private: {
    queryKey: null,
    queryFn: () => api.stickers.stickersControllerFetchPrivateStickers(),
  },
});

export { stickers };
