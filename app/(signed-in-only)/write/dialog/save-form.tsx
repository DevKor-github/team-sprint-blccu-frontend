import { useQuery } from '@tanstack/react-query';

import { AppBarBack } from '@/components/ui-unstable/app-bar';
import { DialogClose } from '@/components/ui/dialog';
import { api } from '@/lib/api';
import { noop } from '@/lib/utils';
import { queries } from '@/queries';

const SaveForm = () => {
  const { isLoading, data } = useQuery(queries.posts.tempPosts);

  const tempPosts = data?.data ?? [];

  return (
    <div>
      <DialogClose>
        <AppBarBack
          onClick={() => {
            noop;
          }}
        />
      </DialogClose>
      {tempPosts.map((temp) => {
        return (
          <div key={temp.id}>
            <p>{temp.title}</p>
            <p>{temp.date_updated}</p>
          </div>
        );
      })}
    </div>
  );
};

export { SaveForm };
