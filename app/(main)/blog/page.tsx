import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  `I enjoy writing blog posts as a way to organize and share my thoughts. `
export const metadata = {
  title: 'My Blog',
  description,
  openGraph: {
    title: 'My Blog',
    description,
  },
  twitter: {
    title: 'My Blog',
    description,
    card: 'summary_large_image',
  },
}
// TODO: add pagination or infinite scroll
export default function BlogPage() {
  console.log('Rendering page.tsx');
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Welcome to My Blog
        </h1>
        <div className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
          <Balancer>While I mostly focus on technical topics, I also write about movies, animation, book reviews, and life musings.</Balancer>
        </div>
        <div className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </div>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
