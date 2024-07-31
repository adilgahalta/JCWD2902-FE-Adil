"use client";
import React, { Suspense, useEffect, useState } from "react";
import CSR from "./components/csr";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <CSR />
      </Suspense>
    </>
  );
}
