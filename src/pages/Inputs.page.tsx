import Card from '../components/atoms/Card';
import { Input, Select } from '../components/atoms/Input';

function Inputs() {
  const options = [
    { id: 1, value: 'Calentador' },
    { id: 2, value: 'Ventilador' },
    { id: 3, value: 'Batería' },
    { id: 4, value: 'Batería' },
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
      </Card>
    </section>
  );
}

export default Inputs;
