import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const article = () => {
  const blogPath = 'blogArticles'
  const files = fs.readdirSync(path.join(blogPath))
  const blogs = files.map(fileName => {
    const fileContent = fs.readFileSync(path.join(blogPath, fileName), 'utf-8')
    const { data: frontMatter } = matter(fileContent)
    return {
      meta: frontMatter,
      slug: fileName.replace('.mdx', '')
    }
  })

  return (
    <div>
      {blogs.map(blog => (
        <Link href={'/blogArticles/' + blog.slug} passHref key={blog.slug} className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-500 dark:text-gray-200 duration-150">
                {blog.meta.title}
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                {blog.meta.description}
              </p>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                {blog.meta.date}
              </p>
            </div>
        </Link>
      ))
      }
    </div>
  );
}

export default article