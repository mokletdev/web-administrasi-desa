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
import { Prisma, UserRole } from "@prisma/client";
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
import {
  ArrowUpDown,
  Check,
  ChevronDown,
  CircleSlash,
  FileDown,
  MoreHorizontal,
  X,
} from "lucide-react";
import { FC, useMemo, useState } from "react";
import { ConfirmRejectionDialog } from "./dialog/confirm-rejection-dialog";
import { ParaphraseOrRegisterNumberDialog } from "./dialog/paraphrase-or-register-number-dialog";

type ServiceRequest = Prisma.ServiceRequestGetPayload<{
  select: {
    id: true;
    status: true;
    createdAt: true;
    done: true;
    name: true;
    submissions: {
      select: {
        id: true;
        signedPdf: true;
        status: true;
        template: { select: { title: true } };
      };
    };
  };
}>;

export const ServiceRequestTable: FC<{
  serviceRequests: ServiceRequest[];
  user: { role: UserRole };
}> = ({ serviceRequests, user }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [selectedRow, setSelectedRow] = useState<ServiceRequest>();
  // Paraphrase or register number dialog
  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);
  const [rejectionDialogOpen, setRejectionDialogOpen] = useState(false);

  const columns: ColumnDef<ServiceRequest>[] = useMemo(
    (): ColumnDef<ServiceRequest>[] => [
      {
        id: "index",

        header: ({}) => {
          return <Button variant="outline">Nomor</Button>;
        },
        cell: ({ row }) => <div>{row.index + 1}</div>,
        enableSorting: true,
      },
      {
        id: "name",
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
        cell: ({ row }) => <div>{row.original.name}</div>,
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
        cell: ({ row }) => (
          <div>{row.original.done ? "Selesai" : row.getValue("status")}</div>
        ),
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
                <DropdownMenuLabel>Download Surat</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {row.original.submissions.map((item) => {
                  return (
                    <DropdownMenuItem
                      key={item.id}
                      // TODO: Implement onClick
                      onClick={() => {}}
                      disabled={item.status !== "SIGNED"}
                    >
                      {item.status === "SIGNED" ? (
                        <FileDown />
                      ) : (
                        <CircleSlash />
                      )}
                      <span>{item.template.title}</span>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Persetujuan</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    setApprovalDialogOpen(true);
                    setSelectedRow(row.original);
                  }}
                >
                  <Check />
                  <span>Approve</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setRejectionDialogOpen(true);
                    setSelectedRow(row.original);
                  }}
                >
                  <X />
                  <span>Reject</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        enableHiding: false,
      },
    ],
    [],
  );

  const table = useReactTable({
    data: serviceRequests,
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
      {selectedRow && (
        <ParaphraseOrRegisterNumberDialog
          open={approvalDialogOpen}
          setIsOpen={setApprovalDialogOpen}
          id={selectedRow.id}
          isParaphrase={user.role === "OFFICIAL"}
        />
      )}
      {selectedRow && (
        <ConfirmRejectionDialog
          open={rejectionDialogOpen}
          setIsOpen={setRejectionDialogOpen}
          id={selectedRow.id}
        />
      )}
    </>
  );
};