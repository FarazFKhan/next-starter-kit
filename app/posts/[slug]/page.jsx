import React from 'react'
import { getAllPosts, getPostbySlug } from '@/lib/posts';

// This function gets called at build time
export async function generateStaticParams() {
   const posts = await getAllPosts()

   // Get the paths we want to pre-render based on posts
   // Note: We could also fetch this from an external API endpoint
   return posts.map(post => ({ slug: post.slug }))
}



const LearnNextJsPage = async ({ params }) => {

   const { slug } = params;

   const { content, frontmatter } = await getPostbySlug(slug)

   return (
      <section className='py-24'>
         <div className='container'>
            <header className="rounded bg-gray-200 p-8 mb-10">
               <h1 className='font-serif text-3xl'>{frontmatter?.title}</h1>
               <p className='text-sm font-light uppercase leading-4 text-gray-500'>
                  Faraz Khan
               </p>
            </header>

            {/* {Post Content} */}
            <main className='prose mt-12'>{content}</main>
         </div>
      </section>
   )
}

export default LearnNextJsPage