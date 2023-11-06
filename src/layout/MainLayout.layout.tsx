import { FC } from 'react';

interface MainLayoutProps {
  children: string | JSX.Element;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className='h-screen flex'>
      <div className='h-full hidden md:block w-full max-w-[240px] bg-white'></div>
      <div className='w-full bg-slate-50 dark:bg-cyan-900'>{children}</div>
    </main>
  );
};

export default MainLayout;
