"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"

const NavLink = ({ href, ...rest }) => {

   const pathname = usePathname()
   const isActive = href === pathname

   return (
      <Link href={href} {...rest}
         className={isActive ? "text-cyan-500" : null}
      ></Link>
   )
}

export default NavLink