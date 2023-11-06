import { FC, useState } from 'react';

interface CheckboxProps {
  label: string;
  onCheckboxChange?: (isChecked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const updatedValue = !isChecked;
    setIsChecked(updatedValue);
    !!onCheckboxChange && onCheckboxChange(updatedValue);
  };

  return (
    <label className='flex items-center space-x-2 cursor-pointer'>
      <input type='checkbox' checked={isChecked} onChange={toggleCheckbox} className='h-3 w-3 accent-green-700 dark:accent-green-500 rounded' />
      <span className='text-sm text-slate-700 dark:text-slate-300'>{label}</span>
    </label>
  );
};

export default Checkbox;
