import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { getFollowerDescriptor } from '@/lib/get-descriptor';
import { type User } from '@/types/mocking-entity';

type PostPageAuthorProfileSectionProps = {
  author: User;
};

const PostPageAuthorProfileSection = ({
  author,
}: PostPageAuthorProfileSectionProps) => {
  const { username, description, profileImage, followerCount } = author;

  const followerDescriptor = getFollowerDescriptor(followerCount);

  return (
    <section className="mx-4 mt-12 flex items-center rounded-xl py-4 shadow-xl">
      <div className="flex flex-1 flex-col items-center gap-4">
        <Avatar>
          <AvatarImage src={profileImage} />
          <AvatarFallback className="bg-blccu-neutral-400" />
        </Avatar>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium">{username}</p>
          <p className="max-w-40 text-center text-xs text-blccu-neutral-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center gap-1">
        <Button>팔로우</Button>
        <p className="text-xs text-blccu-neutral-600">{followerDescriptor}</p>
      </div>
    </section>
  );
};

export { PostPageAuthorProfileSection };
