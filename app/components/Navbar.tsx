import { Link, NavLink } from "remix";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt3Icon } from "@heroicons/react/outline";

import SkipNav from "./SkipNav";

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavbarLink = ({ to, children }: NavbarLinkProps) => (
  <NavLink
    to={to}
    className="rounded-sm text-slate-600 hover:underline decoration-violet-400 decoration-dotted decoration-2 underline-offset-4 hover:text-slate-900 focus:ring-violet-400 focus:ring-2 focus:ring-offset-4 focus:outline-none focus:text-slate-900"
  >
    {({ isActive }) => (
      <span
        className={
          isActive
            ? "font-semibold underline decoration-violet-400 decoration-dotted decoration-2 underline-offset-4 text-slate-900"
            : undefined
        }
      >
        {children}
      </span>
    )}
  </NavLink>
);

const MobileMenu = () => (
  <Menu as="div" className="relative block sm:hidden">
    <Menu.Button className="inline-flex justify-center px-2 py-2 text-sm font-medium bg-white border border-gray-100 rounded-md text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-violet-500">
      <MenuAlt3Icon className="w-5 h-5" />
      <span className="sr-only">Toggle Menu</span>
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          <Link
            to="/"
            className="block px-4 py-2 text-base text-slate-700 focus:text-violet-600 focus:bg-violet-50 hover:text-violet-600 hover:bg-violet-50"
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/blog"
            className="block px-4 py-2 text-base text-slate-700 focus:text-violet-600 focus:bg-violet-50 hover:text-violet-600 hover:bg-violet-50"
          >
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/contact"
            className="block px-4 py-2 text-base text-slate-700 focus:text-violet-600 focus:bg-violet-50 hover:text-violet-600 hover:bg-violet-50"
          >
            Contact
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default function Navbar() {
  return (
    <header className="max-w-5xl p-6 mx-auto sm:p-8">
      <SkipNav />
      <nav className="flex items-center justify-between w-full hover:bg">
        <div>
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 text-xl font-black text-white rounded-full bg-gradient-to-b from-violet-500 to-indigo-500"
          >
            d <span className="sr-only">Dillon Chanis</span>
          </Link>
        </div>
        <ul className="hidden space-x-10 text-sm tracking-wider uppercase sm:flex">
          <li>
            <NavbarLink to="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/blog">Blog</NavbarLink>
          </li>
          <li>
            <a
              href="https://github.com/dillonchanis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  );
}
