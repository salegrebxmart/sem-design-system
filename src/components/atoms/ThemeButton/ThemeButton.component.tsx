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

  const colorButton = 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-900';
  const styleButton = 'flex items-center justify-center rounded-lg hover:bg-slate-300 duration-100 active:scale-90';
  const styleIcon = 'w-8 h-8 p-1.5';

  return (
    <button onClick={handleClick} className={colorButton + ' ' + styleButton + ' ' + className}>
      {isDarkMode ? <IconDark className={styleIcon} /> : <IconLight className={styleIcon} />}
    </button>
  );
};

export default ThemeButton;
