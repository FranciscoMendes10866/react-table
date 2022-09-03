import { styled } from "@stitches/react";

import { TableHeaderCell } from "./TableHeaderCell";
import { TableRow } from "./TableRow";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

const TableWrapper = styled("table", {
  borderCollapse: "collapse",
  border: "none",
  fontFamily: "Anek Telugu",
});

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <TableWrapper>
      <thead>
        <TableHeaderCell columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </TableWrapper>
  );
}
