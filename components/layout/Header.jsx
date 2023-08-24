import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'

const Header = () => {
   return (
      <>
         <header className='bg-gray-200 p-4'>
            <nav className='container'>
               <ul className='flex gap-4 items-center'>
                  <li>
                     <NavLink href='/'>Home</NavLink>
                  </li>
                  <li>
                     <NavLink href='/about'>About</NavLink>
                  </li>
                  <li>
                     <NavLink href='/posts'>Posts</NavLink>
                  </li>
                  <ContactButton />
               </ul>
            </nav>
         </header>

      </>
   )
}

export default Header