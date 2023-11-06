import Card from '../components/atoms/Card';
import Input from '../components/atoms/Input';

function Inputs() {
  return (
    <section>
      <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Inputs</h2>
      <Card>
        <Input label='Nombre' help helperText='El nombre debe tener al menos tres caracteres' errorText='El nombre debe tener al menos tres caracteres.' />
        <Input label='Apellidos' error />
        <Input label='Contraseña' type='password' />
      </Card>
    </section>
  );
}

export default Inputs;
