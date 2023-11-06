import { FC, useState } from 'react';
import { Radio } from '../../atoms/FormElements';

interface RadioGroupProps {
  options: RadioOption[];
  className?: string;
  onSelectionChange?: (selectedValue: string) => void;
}

export type RadioOption = {
  label: string;
  value: string;
};

const RadioGroup: FC<RadioGroupProps> = ({ options, className, onSelectionChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    !!onSelectionChange && onSelectionChange(value);
  };

  return (
    <div className={className}>
      {options.map((option) => (
        <Radio key={option.value} label={option.label} value={option.value} checked={selectedValue === option.value} onChange={handleRadioChange} />
      ))}
    </div>
  );
};

export default RadioGroup;
