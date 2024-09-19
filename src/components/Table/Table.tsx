import Card from "components/Card/Card";
import React, { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import "./Table.css";
import { TableColumnType } from "shared/types/TableColumnType";
import InputField from "components/InputField/InputField";

type TableType = {
  height: "h-full" | string;
  width: "w-full" | string;
};

interface TableProps<T> extends React.TableHTMLAttributes<HTMLTableElement> {
  title?: string;
  searchBar?: boolean;
  columns: TableColumnType[];
  rows: T[];
  height?: TableType["height"];
  width?: TableType["width"];
}

const Table: FC<TableProps<any>> = ({
  title,
  searchBar = true,
  columns,
  rows,
  className = "",
  height = "h-[520px]",
  width = "w-full",
}) => {
  const [filters, setFilters] = useState<string>("");

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rows.length > 0 && columns.length > 0) {
      setFilters(e.target.value);
    }
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
        <table className={`tb-container min-w-full table-fixed`}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  scope="col"
                  className={`max-w-[${column.maxWidth || 0}px] min-w-[${
                    column.minWidth || 0
                  }px] ${column.width ? "w-[" + column.width + "px]" : ""}`}
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
                  String(row[column.field])
                    .toLowerCase()
                    .includes(filters.toLowerCase())
                )
              )
              .map((item, index) => (
                <tr key={index}>
                  {columns.map((column, index) => (
                    <td
                      className={`max-w-[${column.maxWidth || 0}px] min-w-[${
                        column.minWidth || 0
                      }px] ${column.width ? "w-[" + column.width + "px]" : ""}`}
                      key={index}
                    >
                      {item[column.field]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div id="table-footer" className="tb-footer w-fit">
        <div id="total-display">Total of {rows.length} items</div>
      </div>
    </div>
  );
};

export default Table;
