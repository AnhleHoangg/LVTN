import React from 'react';
import { Listblog } from '@/components/ListBlog';
import { useEffect } from 'react';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const ArticleBlog = ({ data }: { data: Listblog }) => {
  const editor = useCreateBlockNote();
  const initialHTML = data.html;
  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseHTMLToBlocks(initialHTML);
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, [editor]);

  return (
    <div className='my-3'>
      <article className=' col-span-1 mb-[10px] flex'>
        <div className='group relative'>
          <img
            className='h-[150px] w-[150px] rounded-lg object-cover'
            src={data.avatar}
          ></img>
          <div className='absolute right-1 top-1'>
            <IoIosCloseCircleOutline
              onClick={async () => {
                const id = data?.id;
                if (id) {
                  await deleteDoc(doc(db, 'listBlog', id));
                }
              }}
              className='text-primary hidden text-[24px] group-hover:block group-hover:cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col px-3'>
          <span className='my-[5px] pb-[5px] font-semibold uppercase hover:border-b'>
            {data.nameBlog}
          </span>
          <span className='my-[5px] text-[14px]'>
            {data?.date.toDate().getDate() +
              '/' +
              (data?.date.toDate().getMonth() + 1) +
              '/' +
              data?.date.toDate().getFullYear()}{' '}
            -
            <span className='ml-1'>
              {data?.date.toDate().getHours() +
                ':' +
                data?.date.toDate().getMinutes()}
            </span>
          </span>
          <div className='my-[5px] line-clamp-2 h-[50px]'>
            <BlockNoteView editor={editor} editable={false} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleBlog;
