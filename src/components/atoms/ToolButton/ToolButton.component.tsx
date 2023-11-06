import { FC } from 'react';

interface ToolButtonProps {
  handleClick?: () => void;
  icon: JSX.Element;
}

const colorButton = 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-900';
const styleButton = 'flex items-center justify-center rounded-lg hover:bg-slate-300 duration-100 active:scale-90';
const styleIcon = 'w-8 h-8';

function getStyle() {
  return colorButton + ' ' + styleButton + ' ' + styleIcon;
}

const ToolButton: FC<ToolButtonProps> = ({ handleClick, icon }) => {
  return (
    <button onClick={handleClick} className={getStyle()}>
      {icon}
    </button>
  );
};

export default ToolButton;
