"use client";

import React from "react";
import { NavbarComponent } from "@/components/navbar/navbar";
interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};