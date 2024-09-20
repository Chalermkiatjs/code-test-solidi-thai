import React, { useState } from "react";
import { TableColumnType } from "shared/types/TableColumnType";
import InputField from "components/InputField/InputField";

interface TableProps<T> {
  title?: string;
  searchBar?: boolean;
  columns: TableColumnType[];
  rows: T[];
  className?: string;
  height?: "h-full" | string;
  width?: "w-full" | string;
  onRowClick?: (row: T) => void;
}

const Table = <T extends object>({
  title,
  searchBar = true,
  columns,
  rows,
  className = "",
  height = "h-[520px]",
  width = "w-full",
  onRowClick = () => null,
}: TableProps<T>) => {
  const [filters, setFilters] = useState<string>("");
  const [rowSelectedIndex, setRowSelectedIndex] = useState<number | string>();
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rows.length > 0 && columns.length > 0) {
      setFilters(e.target.value);
    }
  };

  const handleRowClick = (row: T, index: number | string) => {
    onRowClick(row);
    setRowSelectedIndex(index);
  };

  return (
    <div className="flex flex-col min-w-20">
      {title && (
        <div id="table-header" className="flex justify-between mb-3">
          <p className="font-semibold text-xl text-nowrap">{title}</p>
          {searchBar && (
            <InputField
              onChange={handleChangeFilter}
              value={filters}
              label="Search"
              className="w-full py-1 mx-2"
            />
          )}
        </div>
      )}
      <div
        className={`relative overflow-auto rounded-lg max-h-[100%] border-gray-300 ${width} ${height} ${className}`}
      >
        <table className={`bg-white min-w-full table-fixed`}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  scope="col"
                  className={`sticky top-0 bg-slate-400 px-2 py-2 font-semibold max-w-[${
                    column.maxWidth || 0
                  }px] min-w-[${column.minWidth || 0}px] ${
                    column.width ? "w-[" + column.width + "px]" : ""
                  }`}
                  key={column.field}
                >
                  {column.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows
              .filter((row) =>
                columns.some((column) =>
                  String(row[column.field as keyof T])
                    .toLowerCase()
                    .includes(filters.toLowerCase())
                )
              )
              .map((item, index) => (
                <tr
                  className={`${
                    rowSelectedIndex === index
                      ? "bg-default hover:bg-default-dark text-white"
                      : "hover:bg-slate-200"
                  } h-10`}
                  key={index}
                  onClick={() => handleRowClick(item, index)}
                >
                  {columns.map((column, index) => (
                    <td
                      className={`px-2 whitespace-nowrap border-b max-w-[${
                        column.maxWidth || 0
                      }px] min-w-[${column.minWidth || 0}px] ${
                        column.width ? "w-[" + column.width + "px]" : ""
                      }`}
                      key={index}
                    >
                      {String(item[column.field as keyof T])}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div id="table-footer" className="px-2 mt-2 w-fit">
        <div id="total-display">Total of {rows.length} items</div>
      </div>
    </div>
  );
};

export default Table;
