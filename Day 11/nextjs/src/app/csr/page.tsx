/** @format */

import React from "react";
import { DynamicCSR, LoadingSkeleton } from "./components/csr";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <center>
        <div className="max-w-screen-sm grid grid-cols-3 gap-3">
          <DynamicCSR />
        </div>
      </center>
    </>
  );
}
