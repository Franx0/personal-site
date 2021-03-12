// React
import { FunctionComponent, useState, useContext, useEffect } from 'react';
// Nextjs
import { useRouter } from 'next/router'
// Components
import LinkStyled from '@/components/shared/link';
import ButtonStyled from '@/components/shared/button';
import Toogle from '@/components/shared/toogle';
// Context
import ThemeContext from "@/contexts/ThemeContext";
// Icons
import { ArrowBack, Hamburguer, Sun, Moon } from "@/icons/index";

const Header: FunctionComponent<any> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const [toogleState, setToogleState] = useState(false);

  useEffect(() => {
    setToogleState(theme === "dark");
  }, [theme]);

  return(
    <header className={'h-auto border-b md:flex md:items-center md:justify-between p-3 pr-6 shadow-lg'}>
      <div className="flex flex-grow flex-row">
        <nav className="md:flex flex-start justify-between mt-1 md:mt-0 mb-0 md:w-auto w-full">
          <div className="sm:flex md:hidden ml-2 md:mb-auto">
            <button className="align-middle" type="button" onClick={() => setMenuState(!menuState)}>
              <Hamburguer />
            </button>
          </div>
          <ul className={`relative overflow-hidden items-center transition-all duration-700 md:flex md:h-auto md:mt-0 ${menuState ? 'h-40 mt-6' : 'h-0'}`}>
            <li className="md:ml-1">
              <LinkStyled className="border-t-0 block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" pathname={"/posts"}>
                <ButtonStyled text="Blog" />
              </LinkStyled>
            </li>
            <li className="md:ml-1">
              <LinkStyled className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" pathname={"/"}>
                <ButtonStyled text="About me" />
              </LinkStyled>
            </li>
            <li className="md:ml-1">
              <LinkStyled className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href={`mailto:${process.env.NEXT_PUBLIC_GMAIL_ACCOUNT}?subject=${encodeURIComponent('Hi Fran!')}`}>
                <ButtonStyled text="Contact" />
              </LinkStyled>
            </li>
          </ul>
          {/* <form className="absolute right-0 top-0 w-24 md:w-52 -mr-24 md:-mr-72">
            <label className="hidden" htmlFor="search-form">Search</label>
            <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
            <button className="hidden">Submit</button>
          </form> */}
        </nav>
        <div className="flex md:items-center flex-end mb-0 md:ml-auto ml-4 ">
          {(router.pathname !== '/') &&
            <LinkStyled handleClick={() => router.back()}>
              <ButtonStyled className="py-0 md:py-1 px-4" type="circle"><ArrowBack width={8} height={8} /></ButtonStyled>
            </LinkStyled>
          }
          <Toogle
            width={11}
            height={7}
            className={"p-0.5"}
            easeRange={7}
            active={toogleState}
            icon={toogleState ? <Moon width={5} height={5} /> : <Sun width={5} height={5} />}
            iconClassName={toogleState ? "bg-primary text-yellow-200" : "bg-primary text-yellow-600"}
            handleClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </header>
  );
}

export default Header
