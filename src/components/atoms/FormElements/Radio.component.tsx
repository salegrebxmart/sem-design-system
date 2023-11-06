import { FC } from 'react';

interface RadioProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const Radio: FC<RadioProps> = ({ label, value, checked, onChange }) => {
  const handleRadioChange = () => {
    !!onChange && onChange(value);
  };

  return (
    <label className='flex items-center space-x-2 cursor-pointer'>
      <input type='radio' value={value} checked={checked} onChange={handleRadioChange} className='h-3.5 w-3.5 accent-green-700 dark:accent-green-400 rounded' />
      <span className='text-sm text-gray-700 dark:text-gray-300'>{label}</span>
    </label>
  );
};

export default Radio;
