"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox"
import { Payment } from "@/data/payments.data";
import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
//import { toast } from "@/components/ui/use-toast";
import { toast } from "sonner";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }
type Status = {
  status:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "info"
    | null
    | undefined;
};
//! Recive una interfaz generica
const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: string, addMeta: (meta: any) => void) => {
  filterValue=filterValue.toLowerCase()
  const filterParts=filterValue.split(" ");
  const rowValues=`${row.original.email} ${row.original.clientName} ${row.original.status}`
  //! Con every todos los elementos del array filters parts tienen que estar incluidos en el string rowValues
  return filterParts.every((part)=>rowValues.includes(part))
  //console.log(rowValues)
  // if (row.original.email.includes(filterValue)) {
  //   return true
  // }


  
  return false
}

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
  
  if (isSorted === "asc") {
    return <ChevronUpIcon className="h-4 w-4" />;
  }
  if (isSorted === "desc") {
  //return <ChevronUpIcon className="h-4 w-4 transform rotate-180"/>
  return <ChevronDownIcon className="h-4 w-4" />;
  }
  return null;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "clientName",
    //header: "Client Name",
    //header: ()=>(<span>Client Name</span>),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc")
          }}
        >
          Client Name
          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc")
          }}
        >
          Status
          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      //console.log(row.getValue("status"))
      const status: string = row.getValue("status");
      const variant: any =
        {
          pending: "secondary",
          processing: "info",
          success: "success",
          failed: "destructive",
        }[status] ?? "default";
      return (
        <Badge capitalize={true} variant={variant}>
          {status}
        </Badge>
      );
      //   switch (status) {
      //     case "pending":
      //       return <Badge capitalize={true} variant="secondary">{status}</Badge>;

      //     case "processing":
      //         return <Badge capitalize={true} variant="info">{status}</Badge>;
      //     case "failed":
      //         return <Badge capitalize={true} variant="destructive">{status}</Badge>;

      //     case "success":
      //         return <Badge capitalize={true} variant="success">{status}</Badge>;
      //  }
    },
  },
  {
    accessorKey: "amount",
    //header: "Amount",
    //header: () => <div className="text-right">Amount</div>,
    header: ({ column }) => {
      return (
        <div className="text-right"><Button
        variant="ghost"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc")
        }}
      >
        Amount
        {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button></div>
        
      );
    },
    cell: ({ row }) => {
      //obtenemos el amount de la row
      const amount = parseFloat(row.getValue("amount"));
      //formateamos el amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    filterFn: myCustomFilterFn,
    //header: "Email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc")
          }}
        >
          Email
          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
      //console.log(row.original)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast("Payment ID copied to clipboard", {
                  position: "top-right",
                });
                //toast({description:"Payment ID copied to clipboard" })
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
