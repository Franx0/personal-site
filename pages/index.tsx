// Nextjs
import type { NextPage } from 'next'
// Components
import Layout from '@/components/Layout';

const Home = ({}: NextPage) => {
  return (
    <Layout title="Me">
      <p>Hello it's me!</p>
    </Layout>
  )
}

export default Home
