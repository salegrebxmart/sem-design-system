import Card from '../components/atoms/Card';
import CardGrid from '../layout';

function Cards() {
  return (
    <>
      <section className='mb-8'>
        <h2 className='text-base text-slate-500 dark:text-slate-300 mb-3'>Cards</h2>
        <Card>
          <div>
            <div className='text-base font-medium text-slate-600 dark:text-slate-300'>Excedentes consumidos</div>
            <div className='text-3xl font-medium text-blue-500 dark:text-cyan-300'>1050w</div>
          </div>
        </Card>
      </section>

      <CardGrid>
        <Card>
          <div>
            <div className='flex justify-between gap-4 items-start'>
              <div className='text-base font-medium text-slate-600 mb-4 dark:text-slate-300'>Dispositivo muy largo para comprobar layout</div>
              <div className='text-lg font-medium text-slate-400'>1</div>
            </div>
            <div className='flex justify-between'>
              <div className='grid grid-cols-2 gap-x-6 gap-y-4 2xl:gap-x-3 2xl:gap-y-2'>
                <div>
                  <div className='text-sm font-medium text-slate-500 dark:text-cyan-600'>Cantidad</div>
                  <div className='text-xl font-medium text-slate-400 dark:text-cyan-800'>1050w</div>
                </div>
                <div>
                  <div className='text-sm font-medium text-slate-500 dark:text-cyan-600'>Cantidad</div>
                  <div className='text-xl font-medium text-slate-400 dark:text-cyan-800'>1050w</div>
                </div>
                <div>
                  <div className='text-sm font-medium text-slate-500 dark:text-cyan-600'>Cantidad</div>
                  <div className='text-xl font-medium text-slate-400 dark:text-cyan-800'>1050w</div>
                </div>
                <div>
                  <div className='text-sm font-medium text-slate-500 dark:text-cyan-600'>Cantidad</div>
                  <div className='text-xl font-medium text-slate-400 dark:text-cyan-800'>1050w</div>
                </div>
              </div>
              <div className='w-20 h-auto 2xl:w-14'>
                <img src='https://www.solotermos.es/images/H_mini.png' alt='' />
              </div>
            </div>
          </div>
        </Card>
        <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card>
      </CardGrid>
    </>
  );
}

export default Cards;
