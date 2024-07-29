/** @format */

"use client";
import { superheroes } from "@/../json/db.json";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/config/axios.config";
import { HeroForm } from "./form.component";

export function DataTableDemo() {
  const [data, setData] = React.useState<typeof superheroes>([]);
  const [search, setSearch] = React.useState<string>("");

  const fetchSuperHeroes = async () => {
    const response = await api.get("/superheroes", {
      params: {
        name_like: search,
      },
    });
    setData(response.data);
  };

  React.useEffect(() => {
    fetchSuperHeroes();
  }, [search]);

  return (
    <div className="w-full max-w-screen-lg px-6">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          className=" w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> ID</TableHead>
              <TableHead> NAME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((hero, key) => (
              <TableRow key={key}>
                <TableCell>{hero.id}</TableCell>
                <TableCell>{hero.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          0 of 0 row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            // onClick={() => table.previousPage()}
            // disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => table.nextPage()}
            // disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>

      <HeroForm fetch={fetchSuperHeroes} />
    </div>
  );
}
