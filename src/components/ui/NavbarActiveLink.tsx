"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarActiveLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function NavbarActiveLink({
  children,
  href,
}: NavbarActiveLinkProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, []);

  const [linkPath, linkHash] = href.split("#");
  const normalizedPath = linkPath || "/";
  const isActive = linkHash
    ? pathname === normalizedPath && currentHash === `#${linkHash}`
    : pathname === normalizedPath;

  return (
    <li>
      <Link
        href={href}
        className={`font-bold hover:cursor-pointer hover:text-primary hover:shadow-[0_0_10px_rgba(255,179,174,0.2)] transition-all ${isActive ? "text-primary shadow-[0_0_10px_rgba(255,179,174,0.2)]" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
}
