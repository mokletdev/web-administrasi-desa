"use client";

import { ConfirmDeletionDialog } from "@/components/dialogs/delete-dialog";
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
import { roleLevelMap } from "@/lib/utils";
import { BaseFieldType, Prisma } from "@prisma/client";
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
  ChevronDown,
  File,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";
import { FC, useMemo, useState } from "react";
import { deleteDocument } from "../actions";
import { UpsertDocumentDialog } from "./dialogs";
import Link from "next/link";

type Template = Prisma.AdministrativeServiceGetPayload<{
  select: {
    id: true;
    name: true;
    templates: {
      select: {
        id: true;
        level: true;
      };
    };
    createdAt: true;
    updateAt: true;
    createdBy: true;
  };
}>;

type TemplateDetail = Prisma.AdministrativeServiceGetPayload<{
  include: {
    templates: {
      include: { signs: true };
    };
  };
}>;

export const ServiceTable: FC<{
  templates: Template[];
  fieldTypes: {
    id: number;
    baseType: BaseFieldType;
    label: string;
  }[];
}> = ({ templates, fieldTypes }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [selectedRow, setSelectedRow] = useState<TemplateDetail | null>(null);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const columns: ColumnDef<Template>[] = useMemo(
    (): ColumnDef<Template>[] => [
      {
        accessorKey: "title",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Nama Layanan
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.getValue("title")}</div>,
        enableSorting: true,
      },
      {
        accessorKey: "level",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Tingkat Surat
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div>
            {roleLevelMap[row.getValue("level") as keyof typeof roleLevelMap]}
          </div>
        ),
        enableSorting: true,
      },
      {
        id: "createdBy",
        header: ({ column }) => {
          return (
            <Button
              variant="outline"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Dibuat oleh
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => <div>{row.original.createdBy.name}</div>,
        enableSorting: true,
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
              Dibuat pada
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
                <Link href={`/admin/service/${row.original.id}`}>
                  <DropdownMenuItem>
                    <File size={16} />
                    Detail
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  onClick={() => {
                    setEditDialogOpen(true);
                  }}
                >
                  <Pencil size={16} />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setDeleteDialogOpen(true);
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
    data: templates,
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
            <Button
              variant={"default"}
              onClick={() => setCreateDialogOpen(true)}
            >
              Tambah
            </Button>
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

      {/* Dialogues */}
      <ConfirmDeletionDialog
        open={deleteDialogOpen}
        setIsOpen={setDeleteDialogOpen}
        description={`Anda akan menghapus Dokumen dengan judul ${selectedRow?.name}. Aksi
            ini tidak bisa di undo. Ini akan secara permanen menghapus data ini
            dan menghapusnya dari server kami.`}
        serverAction={deleteDocument}
        id={selectedRow?.id}
      />
      {/* <UpsertDocumentDialog
        open={editDialogOpen}
        setIsOpen={setEditDialogOpen}
        fieldTypes={fieldTypes}
        positions={positions}
        data={
          selectedRow
            ? {
                id: selectedRow.id,
                title: selectedRow.title,
                level: selectedRow.level,
                positionIds: selectedRow.signs.map((sign) => sign.positionId),
                fields: selectedRow.form?.fields || [],
              }
            : undefined
        }
      /> */}
      {/* <UpsertDocumentDialog
        open={createDialogOpen}
        setIsOpen={setCreateDialogOpen}
        fieldTypes={fieldTypes}
        positions={positions}
      /> */}
    </>
  );
};
