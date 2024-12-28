"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import BackButton from "./BackButton";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // List of paths where Navbar and Footer should be excluded
  const excludedPaths = [
    "/adminpanel",        // Admin Panel
    "/user-data",             
    "/adoption-request",         
    "/contact-request",    
  ];

  // Check if the current route matches any of the excluded paths
  const excludeNavbarAndFooter = excludedPaths.some((excludedPath) =>
    pathname.startsWith(excludedPath)
  );

  return (
    <>
      {!excludeNavbarAndFooter && <Navbar />}
      <Toaster position="top-center" />
      {children}
      <BackButton/>
      {!excludeNavbarAndFooter && <Footer />}
    </>
  );
}

