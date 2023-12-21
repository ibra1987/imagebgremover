"use client"
import navLinks from "@/assets/content/navlinks"
import { NavLink } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SmallMenuProps = {
    showSmallScreenMenu:()=>void,
    isMenuOpen:boolean
}

function SmallScreenNavbar({showSmallScreenMenu, isMenuOpen}:SmallMenuProps) {
    const path = usePathname()
  return (
    <nav className=" md:hidden flex animation duration-175 ease-in my-5 ">
    <ul className="w-full flex flex-col items-start justify-start space-y-2">
        {navLinks.map((navlink: NavLink) => (
          <li className={
            path === navlink.path ? "bg-yellow-300 text-gray-600 p-2 px-4  rounded animation duration-100 ease-in"
            : "hover:text-yellow-300 bg-white p-2 px-4  rounded animation duration-100 ease-in"
          } key={navlink.name}>
            <Link  onClick={showSmallScreenMenu} href={navlink.path}>{navlink.name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SmallScreenNavbar