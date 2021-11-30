import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import About from '@/components/About'
import RecentPosts from '@/components/RecentPosts'

import { allPosts } from '.contentlayer/data'
import { PostProps } from '@/lib/types'

const Home: NextPage<PostProps> = ({ posts }) => {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS blog with MDX</title>
        <meta name="description" content="Next js Blog using MDX files" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <About />
        <RecentPosts posts={posts} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.slice(0, 3).map((post) => {
    return {
      title: post.title,
      publishedAt: post.publishedAt,
      author: post.author,
      readingTime: post.readingTime.text,
      slug: post.slug,
      subtitle: post.subtitle,
      avatar: post.avatar,
    }
  })

  return { props: { posts } }
}

export default Home
