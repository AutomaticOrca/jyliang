import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = 'My Adventure of Code'
const description =
  'In my development journey so far, I’ve worked on various small\n' +
    '          projects, including open-source ones, experiments, and just-for-fun\n' +
    '          projects. Below is a highlighted collection of the ones I’m most proud of,\n' +
    '          showcasing my best efforts and explorations in the tech field.'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          My Adventure of Code
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          In my development journey so far, I’ve worked on various small
          projects, including open-source ones, experiments, and just-for-fun
          projects. Below is a highlighted collection of the ones I’m most proud of,
          showcasing my best efforts and explorations in the tech field.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
