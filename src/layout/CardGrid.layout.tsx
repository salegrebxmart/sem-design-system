import { FC } from 'react';

interface CardGridProps {
  children: JSX.Element | JSX.Element[];
}

const CardGrid: FC<CardGridProps> = ({ children }) => {
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-5'>{children}</section>
    </>
  );
};

export default CardGrid;
