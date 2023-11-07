import './App.css';
import ThemeButton from './components/atoms/ThemeButton';
import { H1, H2, H3 } from './components/atoms/Titles';
import { Buttons, Cards, FormElements, Tables } from './pages';

function App() {
  return (
    <>
      <main className=' bg-slate-50 dark:bg-cyan-900 h-full'>
        <div className='w-full max-w-[1536px] m-auto p-6'>
          <header className='w-full flex justify-between'>
            <h1 className='text-lg text-slate-500 dark:text-slate-300 font-medium'>SEM Components</h1>
            <ThemeButton />
          </header>
          <Buttons />
          <Cards />
          <FormElements />
          <div className='pt-12'>
            <H1>Titular 01</H1>
            <H2>Titular 02</H2>
            <H3>Titular 03</H3>
          </div>
          <Tables />
        </div>
      </main>
    </>
  );
}

export default App;
