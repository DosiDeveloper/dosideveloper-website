"use client";
import NavbarActiveLink from "@/components/ui/NavbarActiveLink";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="flex items-center justify-between bg-inherit p-3 px-5 font-display sticky top-0 border-b border-surface-container-high z-50"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-xl md:text-2xl font-bold text-primary"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        DOSI_DEV // HUB
      </motion.h1>

      <ul className="hidden md:flex items-center gap-10 uppercase text-[#94A3B8] text-sm">
        <NavbarActiveLink href="/#presentation">
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            /Home
          </motion.p>
        </NavbarActiveLink>
        <NavbarActiveLink href="/#project">
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            /Project
          </motion.p>
        </NavbarActiveLink>
        <NavbarActiveLink href="/#skill">
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            /Skill
          </motion.p>
        </NavbarActiveLink>
        <NavbarActiveLink href="/#contact">
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            /Contact
          </motion.p>
        </NavbarActiveLink>
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          aria-label="Toggle menu"
        >
          <Image
            src="/icon.svg"
            alt="console icon"
            height="20"
            width="20"
            className="w-auto h-auto"
          />
        </button>
      </div>

      <motion.div
        className="md:hidden absolute top-full left-0 w-full bg-inherit border-b border-surface-container-high"
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen
            ? { height: "auto", opacity: 1, display: "block" }
            : { height: 0, opacity: 0, display: "none" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
        tabIndex={isOpen ? -1 : 0}
      >
        <ul className="flex flex-col items-center gap-4 py-4 uppercase text-[#94A3B8] text-sm">
          <NavbarActiveLink href="/#presentation">
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsOpen(false)}
            >
              /Home
            </motion.p>
          </NavbarActiveLink>
          <NavbarActiveLink href="/#project">
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsOpen(false)}
            >
              /Project
            </motion.p>
          </NavbarActiveLink>
          <NavbarActiveLink href="/#skill">
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsOpen(false)}
            >
              /Skill
            </motion.p>
          </NavbarActiveLink>
          <NavbarActiveLink href="/#contact">
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsOpen(false)}
            >
              /Contact
            </motion.p>
          </NavbarActiveLink>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
