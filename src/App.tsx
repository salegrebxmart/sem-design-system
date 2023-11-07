import './App.css';
import ThemeButton from './components/atoms/ThemeButton';
import { Buttons, Cards, FormElements } from './pages';

function App() {
  return (
    <>
      <main className=' bg-slate-50 dark:bg-cyan-900 h-full'>
        <div className='w-full max-w-[1536px] m-auto p-6'>
          <header className='w-full flex justify-between'>
            <h1 className='text-lg text-slate-500 dark:text-slate-300 font-medium'>SEM Components</h1>
            <ThemeButton />
          </header>
          {/* <Buttons />
          <Cards /> */}
          <FormElements />
        </div>
      </main>
    </>
  );
}

export default App;
