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
import { submissionStatusMap } from "@/lib/utils";
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
import { format } from "date-fns";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Check,
  X,
} from "lucide-react";
import { FC, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { handleApproval, handleSign } from "../actions";

type Submission = Prisma.SubmissionGetPayload<{
  include: {
    approvals: true;
    signRequests: true;
    form: { select: { document: { select: { title: true } } } };
  };
}>;

export const SubmissionTable: FC<{
  submissions: Submission[];
  user: User;
  isOfficial: boolean;
}> = ({ submissions, user, isOfficial }) => {
  const { dismiss, toast } = useToast();
  const router = useRouter();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const onApprovalChange = async (
    title: string,
    submissionId: string,
    status: "REJECT" | "ACCEPT",
  ) => {
    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan perubahan anda sedang diproses",
    });
    const updateOfficialAction = await handleApproval(submissionId, status);
    if (updateOfficialAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Mengubah!",
        description: `Gagal mengubah data surat dengan judul ${title} (${updateOfficialAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Mengubah!",
      description: `Berhasil mengubah data tipe input dengan judul ${title}`,
    });
    return router.refresh();
  };

  const columns: ColumnDef<Submission>[] = useMemo(
    (): ColumnDef<Submission>[] => [
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
              Dikirim Pada
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
        accessorKey: "title",
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
        accessorFn: (row) => row.form.document.title,
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
              Status Pengajuan
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div>
            {
              submissionStatusMap[
                row.original.status as keyof typeof submissionStatusMap
              ]
            }
          </div>
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
                {!isOfficial ? (
                  <>
                    <DropdownMenuItem
                      onClick={async () => {
                        await onApprovalChange(
                          row.original.form.document.title,
                          row.original.id,
                          "ACCEPT",
                        );
                      }}
                    >
                      <Check size={16} />
                      Setujui
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={async () => {
                        await onApprovalChange(
                          row.original.form.document.title,
                          row.original.id,
                          "REJECT",
                        );
                      }}
                    >
                      <X size={16} />
                      Tolak
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem
                      onClick={async () => {
                        await handleSign(row.original.id, "ACCEPT");
                      }}
                    >
                      <Check size={16} />
                      Tanda Tangani
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={async () => {
                        await handleSign(row.original.id, "REJECT");
                      }}
                    >
                      <X size={16} />
                      Tolak
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
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
            placeholder="Filter by judul surat..."
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

      {/* Dialogues */}
      {/* <ConfirmDeletionDialog
        open={deleteDialogOpen}
        setIsOpen={setDeleteDialogOpen}
        description={`Anda akan menghapus Posisi dengan ID ${selectedRow?.id}. Aksi
            ini tidak bisa di undo. Ini akan secara permanen menghapus data ini
            dan menghapusnya dari server kami.`}
        serverAction={deletePosition}
        id={selectedRow?.id}
      />
      <UpdatePositionDialog
        open={editDialogOpen}
        setIsOpen={setEditDialogOpen}
        positionData={selectedRow}
      />
      <CreatePositionDialog
        open={createDialogOpen}
        setIsOpen={setCreateDialogOpen}
      /> */}
    </>
  );
};
