import { IColumnType } from "./Table";

interface Props<T> {
  columns: IColumnType<T>[];
}

export function TableHeaderCell<T>({ columns }: Props<T>): JSX.Element {
  return (
    <>
      <tr>
        {columns.map((column, columnIndex) => (
          <th key={`table-head-cell-${columnIndex}`}>{column.title}</th>
        ))}
      </tr>
    </>
  );
}
