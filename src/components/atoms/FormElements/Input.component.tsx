import { FC, useState } from 'react';
import { IconEye, IconEyeSlash } from '../Icons';
interface InputProps {
  label: string;
  type?: 'text' | 'password';
  name?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  onInputChange?: (value: string) => void;
  onBlur?: () => void;
  help?: boolean;
  error?: boolean;
  required?: boolean;
}

const Input: FC<InputProps> = ({ label, type = 'text', name, placeholder, helperText, errorText, onInputChange, onBlur, error = false, help = false, required = false }) => {
  const [value, setValue] = useState('');
  const [inputType, setInputType] = useState(type);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (!!onInputChange) {
      onInputChange(event.target.value);
    }
  };

  const handlePasswordClick = () => {
    if (inputType === 'password') {
      setPasswordIsVisible(true);
      setInputType('text');
    }
    if (inputType === 'text') {
      setPasswordIsVisible(false);
      setInputType('password');
    }
  };

  const textStyle = 'text-base sm:text-sm p-2';
  const passwordStyle = !passwordIsVisible ? 'text-xl pb-1 pl-2 tracking-wider' : 'text-base sm:text-sm p-2';
  const inputStyle =
    'w-full h-9 sm:h-7 rounded text-slate-500 bg-slate-100 dark:bg-slate-900 dark:text-slate-300' +
    ' ' +
    (type === 'password' ? passwordStyle : textStyle) +
    ' ' +
    (error && 'border border-red-500 dark:border-red-400') +
    ' ' +
    (error || help ? 'mb-2 sm:mb-8' : 'mb-8');
  return (
    <>
      <div className='relative flex flex-col w-full'>
        <label htmlFor={name} className='text-sm font-medium text-slate-600 mb-2 dark:text-slate-300'>
          {label}
        </label>
        <div className='relative flex flex-row-reverse'>
          {type === 'password' && (
            <button onClick={handlePasswordClick} className='absolute py-2.5 sm:py-1.5 pr-2 opacity-60 hover:opacity-100'>
              {passwordIsVisible ? <IconEyeSlash className='text-slate-400' /> : <IconEye className='text-slate-400' />}
            </button>
          )}
          <input required={required} name={name} placeholder={placeholder} className={inputStyle} type={inputType} value={value} onChange={handleChange} onBlur={onBlur} />
        </div>
        {!error && help && <span className='sm:absolute sm:bottom-0 text-sm text-slate-400 mb-6 sm:mb-2'>{helperText ? helperText : ''}</span>}
        {error && <span className='sm:absolute sm:bottom-0 text-sm text-red-500 dark:text-red-400 mb-6 sm:mb-2'>{errorText ? errorText : 'Compruebe el campo'}</span>}
      </div>
    </>
  );
};

export default Input;
