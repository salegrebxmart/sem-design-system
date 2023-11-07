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
    <div className={'flex flex-col sm:flex-row' + ' ' + className}>
      {options.map((item, index) => {
        let style = 'min-w-[7.5rem] h-9 sm:h-7 font-medium px-6 duration-100 border-b sm:border-l sm:border-b-0 border-slate-200 dark:border-slate-800 truncate ';
        if (index === selected) {
          style += ' ' + 'bg-cyan-900 text-green-400';
        } else {
          style += ' ' + 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-900/75';
        }
        if (index === 0) {
          style += ' ' + 'rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md border-none';
        }
        if (index === options.length - 1) {
          style += ' ' + 'rounded-bl-md rounded-br-md sm:rounded-bl-none sm:rounded-tr-md';
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
