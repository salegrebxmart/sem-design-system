import Card from '../components/atoms/Card';
import { IconDelete, IconPlus } from '../components/atoms/Icons';
import { Input, Select, SelectOptions } from '../components/atoms/Input';
import Tabs, { TabsOptions } from '../components/atoms/Tabs';

function Inputs() {
  const options: SelectOptions[] = [
    { id: 1, value: 'Calentador' },
    { id: 2, value: 'Ventilador' },
    { id: 3, value: 'Batería' },
    { id: 4, value: 'Batería' },
  ];
  const tabOptions: TabsOptions[] = [
    { id: 1, value: 'Sin icono' },
    { id: 1, icon: <IconDelete />, value: 'Con icono' },
    { id: 1, icon: <IconPlus />, value: 'Con icono, pero mucho más largo' },
  ];

  return (
    <section>
      <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Inputs</h2>
      <Card>
        <Input placeholder='Inserte un nombre' label='Compañía' />
        <Input label='Nombre' help helperText='El nombre debe tener al menos tres caracteres' errorText='El nombre debe tener al menos tres caracteres.' />
        <Input label='Apellidos' error />
        <Input label='Contraseña' type='password' />
        <Select label='Escoge un aparato' options={options} onInputChange={(value) => console.log(value)} />
        <Tabs options={tabOptions} onChangeTab={(index) => console.log('Ha cambiado a', tabOptions[index].value)} />
      </Card>
    </section>
  );
}

export default Inputs;
