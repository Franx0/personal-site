// Nextjs
import { NextPage , NextPageContext} from 'next';
import dynamic from 'next/dynamic';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false
});

const Custom404Page: NextPage<NextPageContext> = (props: any) => {
  return (
    <Layout className="w-full mx-6 my-6 md:mx-0">
      <div className="flex md:flex-row flex-col h-full align-middle justify-center items-center m-auto">
        <h1 className="md:text-5xl text-xl">404</h1>
        <h2 className="hidden md:flex md:text-5xl">&nbsp;|&nbsp;</h2>
        <h2 className="flex md:text-5xl text-xl">{props.dictionary[404].text}</h2>
      </div>
    </Layout>
  )
}

export default Custom404Page
