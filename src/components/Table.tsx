import { TableHeaderCell } from "./TableHeaderCell";
import { TableRow } from "./TableRow";

export interface IColumnType<T> {
  key: string;
  title: string;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <table>
      <thead>
        <TableHeaderCell columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>
  );
}
