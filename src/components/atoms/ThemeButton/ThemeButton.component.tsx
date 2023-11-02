import { FC, useEffect, useState } from 'react';
import { IconDark, IconLight } from '../Icons';
import useTheme from '../../../hooks';

type ThemeButtonProps = {
  className?: string;
};

const ThemeButton: FC<ThemeButtonProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { handleChangeTheme } = useTheme();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    handleChangeTheme();
  };

  const colorButton = 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-200';
  const styleButton = 'group p-2 rounded-lg hover:bg-slate-300 duration-100 active:scale-90';
  const styleIcon = 'w-6 h-6 scale-100 duration-100 group-hover:scale-110';

  return (
    <button onClick={handleClick} className={colorButton + ' ' + styleButton + ' ' + className}>
      {isDarkMode ? <IconDark className={styleIcon} /> : <IconLight className={styleIcon} />}
    </button>
  );
};

export default ThemeButton;
