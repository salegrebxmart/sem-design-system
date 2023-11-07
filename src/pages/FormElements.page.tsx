import Card from '../components/atoms/Card';
import { IconDelete, IconPlus } from '../components/atoms/Icons';
import { Checkbox, Input, Select, SelectOptions } from '../components/atoms/FormElements';
import Tabs, { TabsOptions } from '../components/atoms/Tabs';
import RadioGroup, { RadioOption } from '../components/molecules/RadioGroup';
import TagsGroup from '../components/molecules/TagsGroup';

function FormElements() {
  const options: SelectOptions[] = [
    { id: 1, value: 'Calentador' },
    { id: 2, value: 'Ventilador' },
    { id: 3, value: 'Batería' },
    { id: 4, value: 'Cargador' },
  ];
  const tabOptions: TabsOptions[] = [
    { id: 1, value: 'Sin icono' },
    { id: 1, icon: <IconDelete />, value: 'Con icono' },
    { id: 1, icon: <IconPlus />, value: 'Con icono, pero mucho más largo' },
  ];
  const initialTags: string[] = [
    'Deporte',
    'Domótica',
    'Nuevas tecnologías',
    'Mascotas',
    'Deporte',
    'Domótica',
    'Nuevas tecnologías',
    'Mascotas',
    'Deporte',
    'Domótica',
    'Nuevas tecnologías',
    'Mascotas',
    'Deporte',
    'Domótica',
    'Nuevas tecnologías',
    'Mascotas',
  ];

  const RadioOptions: RadioOption[] = [
    {
      label: 'Hombre',
      value: 'hombre',
    },
    {
      label: 'Mujer',
      value: 'mujer',
    },
    {
      label: 'Otros',
      value: 'otros',
    },
  ];

  return (
    <section>
      <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Form elements</h2>
      <Card>
        <Input placeholder='Inserte un nombre' label='Compañía' />
        <Input label='Nombre' help helperText='El nombre debe tener al menos tres caracteres' errorText='El nombre debe tener al menos tres caracteres.' />
        <Input label='Apellidos' error />
        <Input label='Contraseña' type='password' />
        <Select label='Escoge un aparato' options={options} onInputChange={(value) => console.log(value)} />
        <Select altColor label='Escoge un aparato' options={options} onInputChange={(value) => console.log(value)} />
        <div className='flex gap-2 mb-4'>
          <Checkbox label='Acepto las condiciones' onCheckboxChange={(value) => console.log('Checkbox -> ', value)} />
        </div>
        <RadioGroup className='flex gap-2 mb-6' options={RadioOptions} onSelectionChange={(value) => console.log('El valor escogido es ->', value)} />
        <Tabs className='mb-6' options={tabOptions} onChangeTab={(index) => console.log('Ha cambiado a', tabOptions[index].value)} />
        <TagsGroup values={initialTags} />
      </Card>
    </section>
  );
}

export default FormElements;
