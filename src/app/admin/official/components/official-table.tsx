"use client";

import { ConfirmDeletionDialog } from "@/components/dialogs/delete-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { Prisma, User } from "@prisma/client";
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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash } from "lucide-react";
import { FC, useMemo, useState } from "react";
import { deleteOfficial } from "../action";
import { CreateOfficialDialog } from "./dialogs";

type Official = Prisma.OfficialGetPayload<{
  include: {
    user: true;
  };
}>;

export const OfficialTable: FC<{
  officials: Official[];
  usersInArea: User[];
  unitId: string;
}> = ({ officials, usersInArea, unitId }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [selectedRow, setSelectedRow] = useState<Official | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const userSelection = usersInArea.filter(
    (a) => !officials.some((b) => a.id === b.user?.id) && a.role !== "OFFICIAL",
  );

  const columns: ColumnDef<Official>[] = useMemo(
    (): ColumnDef<Official>[] => [
      {
        id: "title",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Nama Jabatan
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.original.name}</div>,
        enableSorting: true,
        accessorFn: (row) => row.name,
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
              Nama Pejabat
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.original.user?.name}</div>,
        enableSorting: true,
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedRow(() => row.original);
                    setDeleteDialogOpen(() => true);
                  }}
                >
                  <Trash size={16} />
                  Hapus
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    data: officials,
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
            placeholder="Filter by nama jabatan..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
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
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <span className="text-xs">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Dialogues */}

      <ConfirmDeletionDialog
        open={deleteDialogOpen}
        setIsOpen={setDeleteDialogOpen}
        description={"Ini akan menghapus Jabatan ini!"}
        id={selectedRow?.id}
        serverAction={deleteOfficial}
      />
      <CreateOfficialDialog
        userInArea={userSelection}
        open={createDialogOpen}
        setIsOpen={setCreateDialogOpen}
        unitId={unitId}
      />
    </>
  );
};
