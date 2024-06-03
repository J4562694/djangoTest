import withMDX from '@next/mdx'

const wiithMDXConfig = withMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  })

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
};

export default  wiithMDXConfig(nextConfig)
