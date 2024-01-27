import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
type Person = {
  name: {
    firstName: string;
    lastName: string;
    email: string;
    fatherName: string;
    motherName: string;
  };
  address: string;
  pincode: string;
  country: string;
};
const UsersData = ({ userData }: { userData: Person[] }) => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "fatherName",
        header: "Father Name",
        size: 150,
      },
      {
        accessorKey: "motherName",
        header: "Mother Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "pincode",
        header: "pincode",
        size: 150,
      },
      {
        accessorKey: "country",
        header: "country",
        size: 150,
      },
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data: userData,
  });
  return <MaterialReactTable table={table} />;
};
export default UsersData;