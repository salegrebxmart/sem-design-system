import Button, { Variant } from '../components/atoms/Button';
import { IconCalendar, IconDelete, IconEdit, IconHelp, IconMinus, IconNotification, IconPlus, IconPower, IconRefresh } from '../components/atoms/Icons';
import ThemeButton from '../components/atoms/ThemeButton';
import ToolButton from '../components/atoms/ToolButton';

const ButtonRow = ({ variant = Variant.Primary }: { variant?: Variant }) => {
  return (
    <>
      <Button variant={variant}>Aceptar</Button>
      <Button variant={variant} icon={<IconEdit />}>
        Editar
      </Button>
      <Button variant={variant} iconOnly icon={<IconPlus />} />
      <Button variant={variant} iconOnly icon={<IconMinus />} />
      <Button variant={variant} iconOnly icon={<IconPower />} />
      <Button variant={variant} iconOnly loading />
      <Button variant={variant} disabled icon={<IconDelete />}>
        Eliminar
      </Button>
      <Button variant={variant} fullWidth>
        Botón ancho
      </Button>
      <Button variant={variant} fullWidth icon={<IconRefresh />}>
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
          <ToolButton icon={<IconHelp />} />
          <ToolButton icon={<IconNotification />} />
          <ToolButton icon={<IconCalendar />} />
          <ThemeButton />
        </div>
      </section>
    </>
  );
}

export default Buttons;
