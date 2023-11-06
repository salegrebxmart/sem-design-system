import { FC } from 'react';

export enum Color {
  White = 'bg-white dark:bg-cyan-950',
}

interface CardProps {
  color?: Color;
  children: string | JSX.Element;
}

const Card: FC<CardProps> = ({ color = Color.White, children }) => {
  const CardStyle = color + ' ' + 'w-full rounded-3xl p-6 min-h-[200px] shadow-lg';
  return <section className={CardStyle}>{children}</section>;
};

export default Card;
