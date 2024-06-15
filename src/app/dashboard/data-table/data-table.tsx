"use client";
import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  VisibilityState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//!Componentes para visibilidad
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  //! para el manejo del Select
  const [currentStatus, setCurrentStatus] = useState("all");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const hasRowSelected = Object.keys(rowSelection).length;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
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
  //console.log("mounted",currentStatus)
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Filter emails...(client name, email, status)"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            setCurrentStatus("all");
            //! Si se vuelve a escribir en el Input se resetea el filtro en status y busca en todos los registros y se aplica el filtro del correo
            table.getColumn("status")?.setFilterValue(undefined);
            table.getColumn("email")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />
        <Select
          value={currentStatus}
          onValueChange={(value) => {
            //console.log(value)
            if (value === "all") {
              console.log("select all", value);
              //!Cuando el valor cambia a all como este no existe en la data hay que especificarle el valor undefined al fitro para que muestre todos los registros
              table.getColumn("status")?.setFilterValue(undefined);
              setCurrentStatus("all");
              return;
            }
            console.log("select status", value);
            setCurrentStatus(value);
            table.getColumn("status")?.setFilterValue(value);
          }}
        >
          {/* los estilos en className solo pueden ser defijnidos en SelectTriger porque Select por si solo es un Higher Order Component */}
          <SelectTrigger className="w-[180px] ml-2">
            <SelectValue placeholder="Status - All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {hasRowSelected > 0 && (
          <Button
            className="ml-2"
            variant="destructive"
            onClick={() => {
              console.log(rowSelection)
              //!Para obtener la data de los registros seleccionados:
              // table.getSelectedRowModel().rows.forEach((row)=>{
              //   console.log(row.original)
              // })
              const ids = table.getSelectedRowModel().rows.map((row) => {
                const { clientName } = row.original as any;
                return clientName;
              });
              console.log(ids);
            }}
          >
            Delete
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              //!Con este filtro siempre va a aparecer la columna de actions en la tabla pero no va aparecer en el dropdown que sirve para mostrar o ocultar columnas.
              .filter((column) => column.id !== "actions")
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
                            header.getContext()
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
                        cell.getContext()
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

        <div className="space-x-2 py-4 mx-2 flex justify-center items-center">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex items-center justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
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

        {/* Aqui */}
        <Select
          onValueChange={(value) => {
            table.setPageSize(+value);
          }}
        >
          <SelectTrigger className="w-[180px] m-2">
            <SelectValue placeholder="10 Rows" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rows per page</SelectLabel>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
