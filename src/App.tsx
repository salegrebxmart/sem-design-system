import './App.css';
import Button, { Icon } from './components/atoms/Button';
import ThemeButton from './components/atoms/ThemeButton';

function App() {
  return (
    <main className='w-screen h-screen bg-slate-50 dark:bg-cyan-900'>
      <div className='w-[1000px] m-auto p-6'>
        <header className='w-full flex justify-between'>
          <h1 className='text-lg text-slate-500 dark:text-slate-300 font-medium'>SEM Components</h1>
          <ThemeButton />
        </header>

        <section className=''>
          <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Buttons</h2>
          <h3 className='text-sm text-slate-500 dark:text-slate-300 mb-2'>Primary</h3>
          <div className='flex gap-2 bg-white dark:bg-slate-900 p-4'>
            <Button>Hola</Button>
            <Button icon={Icon.Refresh}>Refrescar</Button>
            <Button disabled icon={Icon.Refresh}>
              Refrescar
            </Button>
          </div>
          <div className='flex gap-2 bg-slate:50 dark:bg-cyan-950 p-4'>
            <Button>Hola</Button>
            <Button icon={Icon.Refresh}>Refrescar</Button>
            <Button disabled icon={Icon.Refresh}>
              Refrescar
            </Button>
            {/* <Button icon={Icon.Minus}>Refrescar</Button>
            <Button icon={Icon.None}>Refrescar</Button>
            <Button icon={Icon.Plus}>Refrescar</Button>
            <Button icon={Icon.Delete}>Refrescar</Button>
            <Button iconOnly icon={Icon.Plus} />

            <Button iconOnly icon={Icon.Delete} />
            <Button iconOnly icon={Icon.Plus} />
            <Button iconOnly icon={Icon.Minus} />
            <Button iconOnly icon={Icon.Refresh} variant='secondary' />
            <Button iconOnly icon={Icon.Delete} variant='secondary' />
            <Button iconOnly icon={Icon.Refresh} disabled />
            <Button iconOnly icon={Icon.Delete} disabled />
            <Button iconOnly icon={Icon.Delete} loading />
            <Button icon={Icon.Refresh} loading>
              Refrescar
            </Button>
            <Button icon={Icon.Delete} variant='secondary'>
              Eliminar
            </Button>
            <Button icon={Icon.Delete} disabled>
              Eliminar
            </Button> */}
          </div>
          <div className='flex gap-2 bg-slate-100 dark:bg-cyan-900 p-4'>
            <Button>Hola</Button>
            <Button icon={Icon.Refresh}>Refrescar</Button>
            <Button disabled icon={Icon.Refresh}>
              Refrescar
            </Button>
          </div>
          <div className='flex gap-2 bg-slate-200 dark:bg-cyan-800 p-4'>
            <Button>Hola</Button>
            <Button icon={Icon.Refresh}>Refrescar</Button>
            <Button disabled icon={Icon.Refresh}>
              Refrescar
            </Button>
          </div>
          {/* <Button fullWidth>Soy enorme</Button> */}
        </section>
      </div>
    </main>
  );
}

export default App;
