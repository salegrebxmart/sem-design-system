import { FC, ReactNode } from 'react';
import { IconDelete, IconLoading, IconMinus, IconPlus, IconRefresh } from '../Icons';

export enum Icon {
  Refresh = 'refresh',
  Delete = 'delete',
  Plus = 'plus',
  Minus = 'minus',
  None = 'none',
}

type iconsT = {
  [clave: string]: JSX.Element;
};

const icons: iconsT = {
  refresh: <IconRefresh />,
  delete: <IconDelete />,
  loading: <IconLoading />,
  plus: <IconPlus />,
  minus: <IconMinus />,
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: Icon;
  iconOnly?: boolean;
}

type variantsT = {
  [clave: string]: string;
};

const variants: variantsT = {
  primary:
    'bg-cyan-900 text-green-400 hover:bg-green-400 hover:text-cyan-900 active:bg-cyan-900 active:text-green-400 active:scale-90 focus:outline-none focus:ring focus:ring-green-400 dark:bg-green-400 dark:text-green-950 dark:font-medium dark:hover:bg-slate-950 dark:hover:text-green-400 dark:active:bg-green-400 dark:active:text-green-950',
  secondary:
    'border border-green-500 text-green-500 hover:border-green-400 hover:bg-green-400 hover:text-cyan-900 active:bg-cyan-900 active:text-green-400 active:scale-90 focus:outline-none focus:ring focus:ring-green-400 dark:border-green-400',
  disabled: 'bg-slate-300/25 text-slate-400 dark:bg-cyan-900/50 dark:text-cyan-700',
};

const Button: FC<ButtonProps> = ({ type = 'button', children, onClick, disabled = false, loading = false, variant = 'primary', fullWidth = false, icon = 'none', iconOnly = false }) => {
  const buttonStyle =
    (iconOnly ? 'px-0 w-7' : 'px-4') +
    ' ' +
    'h-7 flex flex-shrink-0 gap-2 items-center justify-center rounded-full text-sm scale-100 transition-transform duration-200' +
    ' ' +
    (disabled ? variants['disabled'] : variants[variant]);
  const loadingStyle = (iconOnly ? 'px-1 w-7' : 'px-4') + ' ' + 'relative h-7 bg-slate-200 text-slate-400 text-sm py-1 rounded-full dark:bg-cyan-950/50 dark:text-cyan-800';
  return (
    <>
      {loading ? (
        <button disabled className={fullWidth ? 'w-full' : 'w-auto' + ' ' + 'flex justify-center items-center'}>
          <div className={loadingStyle}>
            <div className='animate-spin text-xl'>{icons.loading}</div>
            {icon && iconOnly ? '' : <span className='hidden'>{children}</span>}
          </div>
        </button>
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={fullWidth ? 'w-full' : 'w-auto' + ' ' + 'flex flex-shrink-0 items-center justify-center'}>
          <div className={buttonStyle}>
            {icon ? icons[icon] : null}
            {icon && iconOnly ? '' : children}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
