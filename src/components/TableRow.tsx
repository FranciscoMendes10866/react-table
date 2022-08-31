import { IColumnType } from "./Table";
import { TableRowCell } from "./TableRowCell";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
}
