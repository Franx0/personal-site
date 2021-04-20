// Nextjs
import { NextPage , NextPageContext} from 'next';
import dynamic from 'next/dynamic';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false
})

const Custom500Page: NextPage<NextPageContext> = () => {
  return (
    <Layout title="500" className="w-full mx-6 my-6 md:mx-0">
      {(locale: any) =>
        <div className="flex h-full align-middle justify-center items-center m-auto">
          <h1 className="inline text-5xl">500 | </h1>
          <h2 className="inline text-5xl">{locale.dictionary[500].text}</h2>
        </div>
      }
    </Layout>
  )
}

export default Custom500Page
