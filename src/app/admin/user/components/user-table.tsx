"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaginationMetadata } from "@/lib/paginator";
import { AdministrativeLevel, Prisma, UserRole } from "@prisma/client";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Pencil,
} from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { FC, useMemo, useState } from "react";
import { CreateUserDialog } from "./dialogs/create-user-dialog";
import { UpdateUserDialog } from "./dialogs/update-user-dialog";

type User = Prisma.UserGetPayload<{
  select: {
    id: true;
    name: true;
    NIK: true;
    email: true;
    username: true;
    role: true;
    unit: { select: { id: true; name: true; administrativeLevel: true } };
  };
}>;

export const UserTable: FC<{
  users: User[];
  user: {
    role: UserRole;
    unit?: {
      id: string;
      administrativeLevel: AdministrativeLevel;
      name: string;
    };
  };
  meta: PaginationMetadata;
}> = ({ users, user, meta }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [selectedRow, setSelectedRow] = useState<User>();

  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const router = useRouter();

  const columns: ColumnDef<User>[] = useMemo(
    (): ColumnDef<User>[] => [
      {
        id: "index",
        header: ({}) => {
          return <Button variant="outline">Nomor</Button>;
        },
        cell: ({ row }) => (
          <div>{meta.perPage * (meta.currentPage - 1) + row.index + 1}</div>
        ),
        enableSorting: true,
      },
      {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Nama
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "NIK",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              NIK
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("NIK")}</div>,
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "email",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Email
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("email")}</div>,
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "username",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Username
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("username")}</div>,
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "role",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Peran
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("role")}</div>,
        enableSorting: true,
      },
      {
        id: "actions",
        header: ({}) => {
          return <Button variant="outline">Aksi</Button>;
        },
        cell: ({ row }) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedRow(row.original);
                    setEditDialogOpen(true);
                  }}
                >
                  <Pencil />
                  <span>Edit</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        enableHiding: false,
      },
    ],
    [meta],
  );

  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between py-4">
          <Input
            placeholder="Filter by judul..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant={"default"}
              onClick={() => setCreateDialogOpen(true)}
            >
              Tambah
            </Button>
          </div>
        </div>
        <div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/admin/user?page=1")}
            >
              <ArrowLeft />
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                router.push(`/admin/user?page=${meta.currentPage - 1}`)
              }
              disabled={meta.currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-xs">
              Page {meta.currentPage} of {meta.lastPage}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                router.push(`/admin/user?page=${meta.currentPage + 1}`)
              }
              disabled={meta.currentPage === meta.lastPage}
            >
              Next
            </Button>{" "}
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/admin/user?page=${meta.lastPage}`)}
            >
              <ArrowRight />
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <CreateUserDialog
        open={createDialogOpen}
        setIsOpen={setCreateDialogOpen}
        user={user}
      />
      {selectedRow && (
        <UpdateUserDialog
          open={editDialogOpen}
          setIsOpen={setEditDialogOpen}
          data={{
            ...selectedRow,
            NIK: selectedRow.NIK!,
            administrativeUnitId: selectedRow.unit
              ? {
                  label:
                    selectedRow.unit.administrativeLevel +
                    " " +
                    selectedRow.unit.name,
                  value: selectedRow.unit.id,
                }
              : undefined,
          }}
          user={user}
        />
      )}
    </>
  );
};
