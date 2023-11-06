import Button, { Icon, Variant } from '../components/atoms/Button';
import Card from '../components/atoms/Card';
import ThemeButton from '../components/atoms/ThemeButton';
import ToolButton from '../components/atoms/ToolButton';
import { ToolIcon } from '../components/atoms/ToolButton/ToolButton.component';

const ButtonRow = ({ variant = Variant.Primary }: { variant?: Variant }) => {
  return (
    <>
      <Button variant={variant}>Aceptar</Button>
      <Button variant={variant} icon={Icon.Edit}>
        Editar
      </Button>
      <Button variant={variant} iconOnly icon={Icon.Plus} />
      <Button variant={variant} iconOnly icon={Icon.Minus} />
      <Button variant={variant} iconOnly icon={Icon.Power} />
      <Button variant={variant} iconOnly loading />
      <Button variant={variant} disabled icon={Icon.Delete}>
        Eliminar
      </Button>
      <Button variant={variant} fullWidth>
        Botón ancho
      </Button>
      <Button variant={variant} fullWidth icon={Icon.Refresh}>
        Botón ancho con icono
      </Button>
    </>
  );
};

function Buttons() {
  return (
    <>
      <section>
        <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Buttons</h2>
        <div className='mb-6'>
          <h3 className='text-sm text-slate-500 dark:text-slate-300 mb-2'>Primary</h3>
          <div className='flex gap-2 bg-white dark:bg-slate-900 p-4'>
            <ButtonRow />
          </div>
          <div className='flex gap-2 bg-slate:50 dark:bg-cyan-950 p-4'>
            <ButtonRow />
          </div>
          <div className='flex gap-2 bg-slate-100 dark:bg-cyan-900 p-4'>
            <ButtonRow />
          </div>
          <div className='flex gap-2 bg-slate-200 dark:bg-cyan-800 p-4'>
            <ButtonRow />
          </div>
        </div>

        <div className='mb-6'>
          <h3 className='text-sm text-slate-500 dark:text-slate-300 mb-2'>Secondary</h3>
          <div className='flex gap-2 bg-white dark:bg-slate-900 p-4'>
            <ButtonRow variant={Variant.Secondary} />
          </div>
          <div className='flex gap-2 bg-slate:50 dark:bg-cyan-950 p-4'>
            <ButtonRow variant={Variant.Secondary} />
          </div>
          <div className='flex gap-2 bg-slate-100 dark:bg-cyan-900 p-4'>
            <ButtonRow variant={Variant.Secondary} />
          </div>
          <div className='flex gap-2 bg-slate-200 dark:bg-cyan-800 p-4'>
            <ButtonRow variant={Variant.Secondary} />
          </div>
        </div>

        <div className='mb-6'>
          <h3 className='text-sm text-slate-500 dark:text-slate-300 mb-2'>Terciary</h3>
          <div className='flex gap-2 bg-white dark:bg-slate-900 p-4'>
            <Button variant={Variant.Terciary}>Aceptar</Button>
            <Button disabled variant={Variant.Terciary}>
              Cancelar
            </Button>
          </div>
          <div className='flex gap-2 bg-slate:50 dark:bg-cyan-950 p-4'>
            <Button variant={Variant.Terciary}>Aceptar</Button>
            <Button disabled variant={Variant.Terciary}>
              Cancelar
            </Button>
          </div>
          <div className='flex gap-2 bg-slate-100 dark:bg-cyan-900 p-4'>
            <Button variant={Variant.Terciary}>Aceptar</Button>
            <Button disabled variant={Variant.Terciary}>
              Cancelar
            </Button>
          </div>
          <div className='flex gap-2 bg-slate-200 dark:bg-cyan-800 p-4'>
            <Button variant={Variant.Terciary}>Aceptar</Button>
            <Button disabled variant={Variant.Terciary}>
              Cancelar
            </Button>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Tool Buttons</h2>
        <div className='flex gap-2'>
          <ToolButton icon={ToolIcon.Help} />
          <ToolButton icon={ToolIcon.Notification} />
          <ToolButton icon={ToolIcon.Calendar} />
          <ThemeButton />
        </div>
      </section>
    </>
  );
}

export default Buttons;