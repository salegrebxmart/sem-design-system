import { FC, useState } from 'react';

export type TabsOptions = {
  id: number;
  icon?: JSX.Element;
  value: string;
};
interface TabsProps {
  options: TabsOptions[];
  onChangeTab?: (index: number) => void;
  className?: string;
}

const Tabs: FC<TabsProps> = ({ options, onChangeTab, className }) => {
  const [selected, setSelected] = useState(0);

  const handleChange = (index: number) => {
    setSelected(index);
    !!onChangeTab && onChangeTab(index);
  };
  return (
    <div className={'flex' + ' ' + className}>
      {options.map((item, index) => {
        let style = 'min-w-[7.5rem] h-7 font-medium px-6 duration-100 border-l border-slate-200 dark:border-slate-800';
        if (index === selected) {
          style += ' ' + 'bg-cyan-900 text-green-400';
        } else {
          style += ' ' + 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-900';
        }
        if (index === 0) {
          style += ' ' + 'rounded-s-md border-none';
        }
        if (index === options.length - 1) {
          style += ' ' + 'rounded-e-md';
        }
        return (
          <button disabled={selected === index} key={index} className={style} onClick={() => handleChange(index)}>
            <span className='flex items-center justify-center gap-2'>
              {item.icon ? item.icon : <></>}
              {item.value}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
