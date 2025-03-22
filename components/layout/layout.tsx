"use client";

import React from "react";
import { NavbarComponent } from "@/components/navbar";
interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {

  // const [loading, setLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      {/* {loading ?
        (
          <div className="flex justify-center items-center h-screen">
            <video width="320" height="240" autoPlay loop >
              <source src="/videos/kris-light.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="flex flex-col min-h-screen">
            <NavbarComponent />
            <div className="flex-1">{children}</div>
          </div>
        )
      } */}
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};