export const seo = {
  title: "JY Liang | Developer, Explorer, Life Enthusiast",
  description:
    'JY Liang, a curious builder who values thoughtful tech, enjoys creative problem-solving, and aims to make a positive impact on the world.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
