// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent, useState, useEffect } from 'react';
// Frame Motion
import { AnimatePresence, motion } from 'framer-motion';
// Nextjs
import { useRouter } from 'next/router';
// Components
const LinkStyled = loadable(() => import('@/components/shared/link'));
const ButtonStyled = loadable(() => import('@/components/shared/button'));
const Toogle = loadable(() => import('@/components/shared/toogle'));
const LanguageSelector = loadable(() => import('@/components/languages/selector'));
// Context
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
// Icons
import { ArrowBack, Hamburguer, Sun, Moon } from '@/icons/index';
// Utils
import { isEnv } from '@/utils/index';
// Types
import { HeaderProps } from '@/interfaces/index';

const Header: FunctionComponent<any> = (props: HeaderProps) => {
  const { theme, setTheme, header } = useTheme();
  const locale = useLanguage();
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const [toogleState, setToogleState] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideBack, setHideBack] = useState(false);
  const defaultIgnoredPaths = ["/404", "/500"]

  useEffect(() => {
    const prevPath = props.history.slice(-1)[0];
    setHideBack(defaultIgnoredPaths.includes(router.asPath) ||
                prevPath === undefined ||
                prevPath === router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    setToogleState(theme === "dark");
  }, [theme]);

  useEffect(() => {
    setHideHeader(!header);
  }, [header]);

  return(
    hideHeader === false &&
      <AnimatePresence exitBeforeEnter>
        <motion.div key={`${router.route}-header`} initial="initial" animate="enter" exit="exit" variants={props.pageVariants.scalingY}>
          <header className={`h-auto flex border-b md:items-center md:justify-between p-3 pr-6 shadow-lg`}>
          <div className="flex flex-grow flex-row">
            <nav className="md:flex flex-start justify-between mt-1 md:mt-0 mb-0 md:w-auto w-full">
              <div className="sm:flex md:hidden ml-2 md:mb-auto">
                <button className="align-middle" type="button" onClick={() => setMenuState(!menuState)}>
                  <Hamburguer title={"Menu"} className="text-accent" />
                </button>
              </div>
              <ul className={`relative overflow-hidden items-center transition-all duration-700 md:flex md:h-auto md:mt-0 ${menuState ? `h-28 mt-6 overflow-y-scroll` : 'h-0'}`}>
                <li className="md:ml-1">
                  <LinkStyled className={`min-h-min w-auto block p-2 md:mr-2 md:rounded md:bg-secondary ${router.pathname === '/' ? 'md:bg-outstanding md:text-selected text-accent' : 'md:hover:bg-outstanding text-default md:hover:text-selected hover:text-accent'}`} pathname={"/me"}>
                    <p suppressHydrationWarning={true} className="border-t-0 no-underline text-current py-2 md:border-none md:p-0">
                      {locale.dictionary.header.links.home}
                    </p>
                  </LinkStyled>
                </li>
                { isEnv("development") && <li className="md:ml-1">
                  <LinkStyled className={`min-h-min w-auto block p-2 md:mr-2 md:rounded md:bg-secondary ${router.pathname === '/posts' ? 'md:bg-outstanding md:text-selected text-accent' : 'md:hover:bg-outstanding text-default md:hover:text-selected hover:text-accent'}`} pathname={"/posts"}>
                    <p suppressHydrationWarning={true} className="border-t-0 no-underline text-current py-2 md:border-none md:p-0">
                      {locale.dictionary.header.links.blog}
                    </p>
                  </LinkStyled>
                </li> }
                <li className="md:ml-1">
                  <LinkStyled className={`min-h-min w-auto block p-2 md:mr-2 md:rounded md:bg-secondary ${router.pathname === '/me' ? 'md:bg-outstanding md:text-selected text-accent' : 'md:hover:bg-outstanding text-default md:hover:text-selected hover:text-accent'}`} pathname={"/me"}>
                    <p suppressHydrationWarning={true} className="border-t-0 no-underline text-current py-2 md:border-none md:p-0">
                      {locale.dictionary.header.links.about}
                    </p>
                  </LinkStyled>
                </li>
                <li className="md:ml-1">
                  <LinkStyled className="min-h-min w-auto block p-2 md:mr-2 md:rounded md:bg-secondary md:hover:bg-outstanding text-default md:hover:text-selected hover:text-accent" href={`mailto:${process.env.NEXT_PUBLIC_GMAIL_ACCOUNT}?subject=${encodeURIComponent('Hi Fran!')}`}>
                    <div suppressHydrationWarning={true} className="border-t-0 no-underline text-current py-2 md:border-none md:p-0">
                      {locale.dictionary.header.links.contact}
                    </div>
                  </LinkStyled>
                </li>
              </ul>
            </nav>
            <div className="flex md:items-center flex-end mb-0 md:ml-auto ml-4 ">
              {hideBack === false &&
                <LinkStyled title={locale.dictionary.header.back} handleClick={() => router.back()}>
                  <ButtonStyled className="py-0 md:py-1 px-4" type="circle"><ArrowBack title={locale.dictionary.header.back} width={"w-8"} height={"h-8"} className="text-primary"/></ButtonStyled>
                </LinkStyled>
              }
              <Toogle
                width={"w-12"}
                height={"h-8"}
                className={"p-0.5"}
                easeRange={7}
                active={toogleState}
                icon={toogleState ? <Moon title={locale.dictionary.header.dark} width={"w-6"} height={"h-6"} /> : <Sun title={locale.dictionary.header.light} width={"w-6"} height={"h-6"} />}
                iconClassName={`bg-primary w-6 h-6 ${toogleState ? 'text-yellow-200 translate-x-4' : 'text-yellow-600'}`}
                handleClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <LanguageSelector />
            </div>
          </div>
        </header>
        </motion.div>
      </AnimatePresence>
  );
}

export default Header
