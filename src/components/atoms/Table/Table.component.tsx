import { FC } from 'react';

interface TableColumn {
  label: string;
  key: string;
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
}

const Table: FC<TableProps> = ({ data, columns }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-[600px] sm:min-w-full divide-y divide-slate-200 table-auto'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope='col' className='text-sm text-slate-700 py-3 text-left font-medium '>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-slate-200'>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key} className='text-sm text-slate-700 py-4 whitespace-nowrap w-1/4'>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
