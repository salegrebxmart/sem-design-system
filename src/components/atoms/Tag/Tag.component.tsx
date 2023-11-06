import { FC } from 'react';
import { IconClose } from '../Icons';

interface TagProps {
  text: string;
  onClose?: () => void;
}

const Tag: FC<TagProps> = ({ text, onClose }) => {
  const handleClick = () => {
    !!onClose && onClose();
  };
  return (
    <>
      <div className='inline-flex gap-1 p-y-auto bg-slate-200 text-slate-500 dark:bg-cyan-900 dark:text-cyan-400 font-medium text-sm rounded-full pl-4 pr-2 py-1 w-auto hover:bg-slate-300 duration-100 hover:cursor-pointer'>
        <span className='mb-[1px]'>{text}</span>
        <button onClick={handleClick}>
          <IconClose className='w-4 h-4 opacity-40 hover:opacity-100' />
        </button>
      </div>
    </>
  );
};

export default Tag;
