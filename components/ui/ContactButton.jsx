"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ContactButton = () => {
   const router = useRouter()

   function handleClick() {
      router.push('/contact')
   }

   return (
      <button className="bg-red-400 px-6 py-1 rounded-lg hover:bg-red-300 transition ease duration-200"
         onClick={handleClick}>Contact</button>
   )
}

export default ContactButton