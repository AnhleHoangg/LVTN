import React from 'react';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import '@blocknote/react/style.css';
function EditorBlog() {
  const editor = useCreateBlockNote();
  return (
    <div className='h-[200px]'>
      <BlockNoteView editor={editor} />
    </div>
  );
}
export default EditorBlog;
