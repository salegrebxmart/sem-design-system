import { FC } from 'react';

export enum Color {
  White = 'bg-white dark:bg-cyan-950',
}

const colors = {
  white: 'bg-white dark:bg-cyan-950 shadow-lg',
  green: 'bg-green-400',
  gray: 'bg-slate-200',
};

interface CardProps {
  color?: 'white' | 'green' | 'gray';
  children: JSX.Element | JSX.Element[] | string;
}

const Card: FC<CardProps> = ({ color = 'white', children }) => {
  const CardStyle = colors[color] + ' ' + 'w-full rounded-3xl p-6 min-h-[200px]';
  return <section className={CardStyle}>{children}</section>;
};

export default Card;
