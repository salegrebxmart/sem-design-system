import { FC, ReactNode } from 'react';
import { IconLoading } from '../Icons';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Terciary = 'terciary',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: Variant;
  icon?: JSX.Element;
  iconOnly?: boolean;
}

type variantsT = {
  [clave: string]: string;
};

const variants: variantsT = {
  primary: 'bg-cyan-900 text-green-400 hover:bg-green-400 hover:text-cyan-900 focus:outline-none focus:ring focus:ring-green-400',
  secondary: 'border border-green-600 text-green-600 hover:border-green-400 hover:bg-green-400 hover:text-cyan-900 focus:outline-none focus:ring focus:ring-green-300',
  terciary: 'text-blue-500 hover:underline',
};

const variantsDark: variantsT = {
  primary: 'dark:bg-green-400 dark:text-green-950 dark:font-medium dark:hover:bg-slate-950 dark:hover:text-green-400',
  secondary: 'dark:border-green-400 dark:text-green-400 dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-cyan-900',
  terciary: 'dark:text-cyan-300',
};

const variantsDisabled: variantsT = {
  primary: 'bg-slate-300/25 text-slate-400 dark:bg-cyan-900/50 dark:text-cyan-700 active:scale-100',
  secondary: 'border border-slate-300 text-slate-300 dark:border-cyan-700 dark:text-cyan-700 active:scale-100',
  terciary: 'text-slate-400 dark:text-cyan-700 active:scale-100',
};

function getStyle(loading: boolean, iconOnly: boolean, disabled: boolean, variant: string) {
  if (loading) {
    return (iconOnly ? 'px-1 w-7' : 'px-4') + ' ' + 'relative h-7 text-sm py-1 rounded-full' + ' ' + variantsDisabled.primary;
  }
  return (
    (iconOnly ? 'px-0 w-7' : 'px-4') +
    ' ' +
    'h-7 flex flex-shrink-0 gap-2 items-center justify-center rounded-full text-sm scale-100 transition-transform duration-100 active:scale-95' +
    ' ' +
    (disabled ? variantsDisabled[variant] : variants[variant] + ' ' + variantsDark[variant])
  );
}

const Button: FC<ButtonProps> = ({ type = 'button', children, onClick, disabled = false, loading = false, variant = 'primary', fullWidth = false, icon, iconOnly = false }) => {
  const buttonStyle = getStyle(loading, iconOnly, disabled, variant);

  return (
    <>
      {loading ? (
        <button disabled className={(fullWidth ? 'w-full' : 'w-auto') + ' ' + 'flex justify-center items-center'}>
          <div className={buttonStyle}>
            <div className='animate-spin text-xl'>{<IconLoading />}</div>
            {icon && iconOnly ? '' : <span className='hidden'>{children}</span>}
          </div>
        </button>
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={fullWidth ? 'w-full' : 'w-auto' + ' ' + 'flex flex-shrink-0 items-center justify-center'}>
          <div className={buttonStyle}>
            {icon ? icon : null}
            {icon && iconOnly ? '' : children}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
