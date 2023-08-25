import fs from 'fs'
import path from 'path'

import { compileMDX } from 'next-mdx-remote/rsc'
import matter from 'gray-matter';
import Newsletter from '@/components/Newsletter';


// Import the rehype plugin for code highlighting
import rehypePrettyCode from 'rehype-pretty-code';
const prettyCodeOptions = {
   theme: 'one-dark-pro',
   onVisitLine(node) {
      if (node.children.length === 0) {
         node.children = [{ type: 'text', value: ' ' }]
      }
   },
   onVisitHighlightedLine(node) {
      node.properties.className.push("highlighted");
   },
   onVisitHighlightedWord(node) {
      node.properties.className = ["highlighted", "word"];
   }
}


// Get the root directory for the MDX files
const rootDirectory = path.join(process.cwd(), 'content')

// Style/Import MDX Components
const components = {
   h1: (props) => <h1 className='text-red-400' {...props} />,
   Newsletter: Newsletter
}

export async function getPostbySlug(slug) {


   const realSlug = slug.replace(/\.mdx$/, '') // Remove the .mdx file extension
   const filePath = path.join(rootDirectory, `${realSlug}.mdx`) // Get the file path
   const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' }) // Read the file contents

   const { content, data } = matter(fileContents); // Parse the frontmatter and content
   const frontmatter = data;

   const { content: compiledContent } = await compileMDX({ // Compile the MDX code
      source: content,
      components,
      options: {
         // parseFrontmatter: true,
         mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
         }
      }
   })



   return { content: compiledContent, frontmatter, slug: realSlug }; //Return the compiled content and frontmatter
   // slug has been explicetly defined as the realSlug value, without the .mdx extension
}


export async function getAllPosts() {

   // Get all the MDX file titles in the root directory ans store them in an array
   const files = fs.readdirSync(rootDirectory)
   // console.log("files", files)

   let posts = []

   for (const file of files) { // Loop through the files
      const post = await getPostbySlug(file) // Get the post by slug
      posts.push(post) // Add the post to the array
   }

   return posts //Return all the posts

}