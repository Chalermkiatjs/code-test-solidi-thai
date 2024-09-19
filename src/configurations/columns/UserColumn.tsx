import { TableColumnType } from "shared/types/TableColumnType";

export const UserColumn: TableColumnType[] = [
  {
    field: "id",
    headerName: "No.",
    width:50,
  },
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "job_title",
    headerName: "Title",
  },
  {
    field: "email",
    headerName: "Email",
  },
  {
    field: "role",
    headerName: "Role",
  },
  {
    field: "action",
    headerName: "Actions",
  },
];
