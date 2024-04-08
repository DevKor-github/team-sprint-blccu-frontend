import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

import '@/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'mobile2',
    },
  },
};

export default preview;
