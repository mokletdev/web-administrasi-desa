"use client";

import { ConfirmDeletionDialog } from "@/components/dialogs/delete-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
import { Prisma } from "@prisma/client";
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
import { format } from "date-fns";
import { ArrowUpDown, ChevronDown, Download } from "lucide-react";
import { FC, useMemo, useState } from "react";
import { deleteSubmission } from "../../document/actions";

type Submission = Prisma.SubmissionGetPayload<{
  select: {
    id: true;
    status: true;
    createdAt: true;
    form: { select: { document: { select: { title: true } } } };
  };
}>;

export const RequestHistoryTable: FC<{
  submissions: Submission[];
}> = ({ submissions }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Submission>();

  const columns: ColumnDef<Submission>[] = useMemo(
    (): ColumnDef<Submission>[] => [
      {
        id: "index",

        header: ({}) => {
          return <Button variant="outline">Nomor</Button>;
        },
        cell: ({ row }) => <div>{row.index + 1}</div>,
        enableSorting: true,
      },
      {
        id: "title",
        accessorFn: ({
          form: {
            document: { title },
          },
        }) => title,
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Judul Surat
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.original.form.document.title}</div>,
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Diajukan Pada
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div>{format(row.getValue("createdAt"), "yyyy-MM-dd HH:mm")}</div>
        ),
        enableSorting: true,
      },
      {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Status
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("status")}</div>,
        enableSorting: true,
      },
      {
        id: "actions",
        header: ({}) => {
          return <Button variant="outline">Aksi</Button>;
        },
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2">
              {row.original.status === "APPROVED" && (
                <Button
                  variant={"default"}
                  onClick={() => {
                    // TODO: Download populated content as PDF
                  }}
                >
                  Download
                  <Download size={16} />
                </Button>
              )}
              {row.original.status === "PENDING_APPROVAL" && (
                <Button
                  onClick={() => {
                    setSelectedRow(row.original);
                    setDeleteDialogOpen(true);
                  }}
                  variant={"destructive"}
                >
                  Batalkan
                </Button>
              )}
            </div>
          );
        },
        enableHiding: false,
      },
    ],
    [],
  );

  const table = useReactTable({
    data: submissions,
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
          </div>
        </div>
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
      </div>

      <ConfirmDeletionDialog
        id={selectedRow?.id}
        description="Apakah anda yakin ingin membatalkan pengajuan surat ini? Aksi anda tidak akan bisa dibatalkan."
        open={deleteDialogOpen}
        setIsOpen={setDeleteDialogOpen}
        serverAction={deleteSubmission}
      />
    </>
  );
};
