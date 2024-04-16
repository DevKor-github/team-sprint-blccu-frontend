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
      defaultViewport: 'mobile1',
    },
    options: {
      storySort: {
        includeNames: true,
        order: [
          'Components',
          ['*', ['Playground', '*']],
          'Unstable',
          ['*', ['Playground', '*']],
          'Experimental',
          ['*', ['Playground', '*']],
        ],
      },
    },
  },
};

export default preview;
