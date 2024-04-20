import type { Meta, StoryObj } from '@storybook/react';
import { List, Users } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      options: ['default'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      exclude: ['asChild', 'children'],
    },
  },
};

type Story = StoryObj<typeof IconButton>;

const Playground: Story = {
  args: {
    children: <Users className="h-5 w-5" />,
  },
};

const example_profile_image_src =
  'https://www.altius-group.com.au/hs-fs/hubfs/website-2023/services/people-and-employee-services/Altius_Group_People_and_Employee_Services_Employee_Assistance_Program%20.webp?width=800&height=800&name=Altius_Group_People_and_Employee_Services_Employee_Assistance_Program%20.webp';

const example_profile_background_image_src =
  'https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Example: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="relative flex flex-col items-center gap-8">
      <div
        className="absolute top-0 h-32 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${example_profile_background_image_src})`,
        }}
      />
      <Avatar size="xl" className="mt-[96px]">
        <AvatarImage src={example_profile_image_src} />
        <AvatarFallback className="bg-blccu-neutral-400" />
      </Avatar>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold">블꾸</h2>
        <div className="flex flex-col items-center gap-1">
          <div className="break-all text-xs text-blccu-neutral-400">
            <span>팔로워 145</span>
            <span>&nbsp;·&nbsp;</span>
            <span>팔로잉 61</span>
          </div>
          <p className="text-sm text-blccu-neutral-600">치피치피차파차파</p>
        </div>
        <div className="flex items-center gap-2">
          <Button radius="full">팔로우</Button>
          <IconButton>
            <List className="h-5 w-5" />
          </IconButton>
          <IconButton>
            <Users className="h-5 w-5" />
          </IconButton>
        </div>
      </div>
    </div>
  ),
};

export { Example, Playground };

export default meta;
