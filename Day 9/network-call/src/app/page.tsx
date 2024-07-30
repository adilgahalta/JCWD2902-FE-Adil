/** @format */
"use client";

import { useEffect, useState } from "react";
import { superheroes } from "@/../json/db.json";
import { api } from "../config/axios.config";
import { DataTableDemo } from "@/components/heroes.component";
import { HeroForm } from "@/components/form.component";

export default function Home() {
  return (
    <center>
      <DataTableDemo />
    </center>
  );
}
