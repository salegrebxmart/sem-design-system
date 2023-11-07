import Button from '../components/atoms/Button';
import Card from '../components/atoms/Card';
import { IconDelete } from '../components/atoms/Icons';
import Table from '../components/atoms/Table';

const Tables = () => {
  const columns = [
    { label: 'ID', key: 'id' },
    { label: 'Dispositivo', key: 'device' },
    { label: 'Capacidad', key: 'power' },
    { label: 'Fecha de instalación', key: 'instDate' },
    { label: 'Acciones', key: 'actions' },
  ];

  const data = [
    { id: 1, device: 'Termo principal', power: '6000w', instDate: '01/11/2023', actions: <Button icon={<IconDelete />}>Eliminar</Button> },
    { id: 2, device: 'Aerotermia', power: '2000w', instDate: '01/11/2023', actions: <Button icon={<IconDelete />}>Eliminar</Button> },
    { id: 3, device: 'Cargador vehículo', power: '2000w', instDate: '01/11/2023', actions: <Button icon={<IconDelete />}>Eliminar</Button> },
  ];
  return (
    <>
      <Card>
        <Table data={data} columns={columns} />
      </Card>
    </>
  );
};

export default Tables;
