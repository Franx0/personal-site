// React
import { FunctionComponent, useState, useContext, useEffect } from 'react';
// Nextjs
import { useRouter } from 'next/router'
// Components
import LinkStyled from '@/components/shared/link';
import ButtonStyled from '@/components/shared/button';
import Toogle from '@/components/shared/toogle';
import LanguageSelector from '@/components/languages/selector';
// Context
import ThemeContext from "@/contexts/ThemeContext";
import { LanguageContext } from "@/contexts/LanguageContext";
// Icons
import { ArrowBack, Hamburguer, Sun, Moon } from "@/icons/index";
// Utils
import { isEnv } from "@/utils/index";

const Header: FunctionComponent<any> = (props: any) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const [toogleState, setToogleState] = useState(false);
  const [previousPath, setPreviousPath] = useState(undefined);
  const locale = useContext(LanguageContext);

  useEffect(() => {
    setToogleState(theme === "dark");
  }, [theme]);

  useEffect(() => {
    setPreviousPath(props.history[props.history.length - 1]);
  }, [props.history]);

  return(
    <header className={`h-auto border-b md:flex md:items-center md:justify-between p-3 pr-6 shadow-lg`}>
      <div className="flex flex-grow flex-row">
        <nav className="md:flex flex-start justify-between mt-1 md:mt-0 mb-0 md:w-auto w-full">
          <div className="sm:flex md:hidden ml-2 md:mb-auto">
            <button className="align-middle" type="button" onClick={() => setMenuState(!menuState)}>
              <Hamburguer className="text-accent" />
            </button>
          </div>
          <ul className={`relative overflow-hidden items-center transition-all duration-700 md:flex md:h-auto md:mt-0 ${menuState ? `h-28 mt-6` : 'h-0'}`}>
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
          {(router.asPath !== (previousPath || "/404" || "/500")) &&
            <LinkStyled handleClick={() => router.back()}>
              <ButtonStyled className="py-0 md:py-1 px-4" type="circle"><ArrowBack width={"w-8"} height={"h-8"} className="text-primary"/></ButtonStyled>
            </LinkStyled>
          }
          <Toogle
            width={"w-12"}
            height={"h-8"}
            className={"p-0.5"}
            easeRange={7}
            active={toogleState}
            icon={toogleState ? <Moon width={5} height={5} /> : <Sun width={"w-5"} height={"h-5"} />}
            iconClassName={`bg-primary w-6 h-6 ${toogleState ? 'text-yellow-200 translate-x-4' : 'text-yellow-600'}`}
            handleClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

export default Header
