import { FC, useState } from 'react';

interface SelectProps {
  label: string;
  name?: string;
  options: { id: number; value: string }[];
  helperText?: string;
  errorText?: string;
  onInputChange?: (value: string) => void;
  onBlur?: () => void;
  help?: boolean;
  error?: boolean;
  required?: boolean;
}

const Select: FC<SelectProps> = ({ label, name, options = [], onInputChange, onBlur, helperText, errorText, help = false, error = false, required }) => {
  const [value, setValue] = useState('');
  const inputStyle =
    'w-full h-9 sm:h-7 rounded text-slate-500 bg-slate-100 dark:bg-slate-900 dark:text-slate-300 mb-8 text-base sm:text-sm px-1' + ' ' + (error && 'border border-red-500 dark:border-red-400');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    if (!!onInputChange) {
      onInputChange(event.target.value);
    }
  };

  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='text-sm font-medium text-slate-600 mb-2 dark:text-slate-300'>
        {label}
      </label>

      <div className='relative flex flex-col w-full'>
        <select required={required} className={inputStyle} name={name} value={value} onChange={handleChange} onBlur={onBlur}>
          <option value=''>Escoge una opción...</option>

          {options.map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            );
          })}
        </select>
        {!error && help && <span className='absolute bottom-0 text-sm text-slate-400 mb-2'>{helperText ? helperText : ''}</span>}
        {error && <span className='absolute bottom-0 text-sm text-red-500 dark:text-red-400 mb-2'>{errorText ? errorText : 'Compruebe el campo'}</span>}
      </div>
    </div>
  );
};

export default Select;
