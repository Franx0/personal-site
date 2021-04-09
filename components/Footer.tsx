// Icons
import { Twitter, Linkedin, GitHub } from '@/icons/index';

export const Footer = (props: any) => {
  return (
    <footer>
      <div className="w-full px-4">
        <div className="md:flex-row flex-col md:py-4 mb-2 md:mb-0">
          <div className="md:flex px-4">
            <div className="flex justify-center md:justify-start m-3 min-w-min">
              <p className="hidden md:flex md:align-middle md:m-auto md:ml-0 md:mr-0">{props.locale.dictionary.footer.follow}</p>
              <a href={`${process.env.NEXT_PUBLIC_GITHUB_ACCOUNT}`} style={{paddingLeft: "0.07rem", paddingTop: "0.04rem"}} className="w-8 h-8 text-default hover:text-white border border-2 border-gray-400 rounded-full text-center ml-2 hover:bg-black hover:border-black">
                <GitHub width={"w-7"} height={"h-7"} />
              </a>
              <a href={`${process.env.NEXT_PUBLIC_LINKEDIN_ACCOUNT}`} className="w-8 h-8 text-default hover:text-white border border-2 border-gray-400 rounded-full text-center px-2 py-1.5 ml-2 hover:bg-blue-600 hover:border-blue-600">
                <Linkedin width={"w-4"} height={"h-4"} />
              </a>
              <a href={`https://twitter.com/intent/follow?original_referer=https://${process.env.NEXT_PUBLIC_DOMAIN}&ref_src=twsrc%5Etfw&region=follow_link&screen_name=${process.env.NEXT_PUBLIC_TWITTER_ACCOUNT}&tw_p=followbutton`}
                  className="w-8 h-8 text-default hover:text-white border border-2 border-gray-400 rounded-full text-center px-1.5 py-1.5 ml-2 hover:bg-blue-400 hover:border-blue-400"
                  target="_blank"
                  rel="noopener nofollow"
                  aria-label={`Follow ${process.env.NEXT_PUBLIC_DOMAIN} on Twitter`}
                  >
                <Twitter width={"w-5"} height={"h-5"} />
              </a>
            </div>
            <div className="flex md:align-middle md:m-auto md:mr-0 text-center text-default justify-center md:justify-end" dangerouslySetInnerHTML={{__html: props.locale.dictionary.footer.handmade}}></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
