'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import TypeWriter from 'typewriter-effect'

import { SparkleIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>Software Engineer
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      Life Explorer
    </span>
  )
}

function OCD() {
  return (
    <span className="group inline-flex items-center">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>Dreamer</span>
    </span>
  )
}

// function Founder() {
//   return (
//     <span className="group inline-flex items-center">
//       <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
//       <span>Life Enthusiast</span>
//     </span>
//   )
// }

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="space-y-2 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />
        <span className="block h-1" />
        <Designer /> &nbsp;
        <OCD />
      </motion.h1>
      <motion.div
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <TypeWriter
          options={{
            strings: ["G'day", '你好', 'Ciao', 'Bonjour', 'こんにちは'],
            autoStart: true,
            loop: true,
          }}
        />
        <Balancer>
          This is Joyce Liang. Always wanna be a better software
          engineer and also want to make this world a better place .
        </Balancer>
      </motion.div>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://www.linkedin.com/in/jyliang1013/"
          aria-label="My Linkedin"
          platform="linkedin"
        />
        <SocialLink
          href="https://github.com/AutomaticOrca"
          aria-label="My GitHub"
          platform="github"
        />

        <SocialLink
          href="mailto:liangjiaying1013@outlook.com"
          aria-label="My Email"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
