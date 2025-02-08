"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { signIn } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold dark:text-white">
            MyLogo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden ">
          <div className="px-4 py-3 flex flex-col space-y-3 ">
            <div onClick={()=>{signIn()}} className="text-white bg-white bg-opacity-0 hover:bg-opacity-10 hover:text-gray-300 transition">
              Sign In
            </div>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }:{
    href:string,
    children:React.ReactNode,
}) => (
  <Link
    href={href}
    className="text-white bg-white bg-opacity-0 hover:bg-opacity-10 hover:text-gray-300 transition"
  >
    {children}
  </Link>
);

export default Navbar;
