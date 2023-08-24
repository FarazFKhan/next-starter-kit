import React from 'react'

const LearnNextJsPage = ({ params }) => {

   const { slug } = params;

   return (
      <section className='py-24'>
         <div className='container'>
            <header className="rounded bg-gray-200 p-8">
               <h1 className='font-serif text-3xl'>{slug}</h1>
               <p className='text-sm font-light uppercase leading-4 text-gray-500'>
                  Faraz Khan
               </p>
               {/* Post content */}
            </header>
         </div>
      </section>
   )
}

export default LearnNextJsPage