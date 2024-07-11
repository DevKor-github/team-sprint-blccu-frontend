import { useQuery } from '@tanstack/react-query';

import { type ArticleDto } from '@/__generated__/data-contracts';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import { AppBarBack } from '@/components/ui-unstable/app-bar';
import { DialogClose } from '@/components/ui/dialog';
import { noop } from '@/lib/utils';
import { queries } from '@/queries';

const SaveForm = () => {
  const { isLoading, data } = useQuery(queries.articles.tempPosts);

  const tempPosts = data?.data ?? [];
  const { setTitleContents, setBodyContents } = useEditorContentsStore(
    (state) => state,
  );

  const onClickHandler = async (temp: ArticleDto) => {
    setTitleContents(temp.title);
    setBodyContents(temp.content || '');
    noop;
  };

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
          <div key={temp.id} onClick={() => onClickHandler(temp)}>
            <p>{temp.title}</p>
            <p>{temp.dateUpdated}</p>
          </div>
        );
      })}
    </div>
  );
};

export { SaveForm };
