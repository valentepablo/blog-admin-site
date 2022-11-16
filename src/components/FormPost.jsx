import { useRef } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const FormPost = () => {
  const title = useRef();
  const text = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: title.current.value,
      text: text.current.value,
    };

    const db = getFirestore();
    addDoc(collection(db, 'posts'), post);

    title.current.value = '';
    text.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
      <input
        ref={title}
        type='text'
        placeholder='Titulo del post...'
        className='bg-slate-100 w-full p-4 rounded-md placeholder:text-slate-400 focus:outline-none focus:ring-2'
      />
      <textarea
        ref={text}
        className='bg-slate-100 rounded-md placeholder:text-slate-400 w-full min-h-[200px] p-4 focus:outline-none focus:ring-2'
        placeholder='Texto del post...'></textarea>
      <button
        type='submit'
        className='bg-cyan-500 text-white w-full rounded-md py-3 font-semibold text-lg cursor-pointer'>
        Post
      </button>
    </form>
  );
};

export default FormPost;
