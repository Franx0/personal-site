// React
import { FunctionComponent, useState } from 'react';
// Languages
import { languageOptions, useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector: FunctionComponent<any> = () => {
  const { userLanguage, userLanguageChange } = useLanguage();
  const [toggleSelector, setToggleSelector] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="relative" onClick={() => setToggleSelector(!toggleSelector)}>
        <button type="button" className="relative z-10 flex align-middle rounded-md bg-primary p-1 md:p-2 focus:outline-none">
          <svg className={`transform ${toggleSelector ? 'rotate-0' : 'rotate-180'} inline h-5 w-5 text-secondary`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
          <span suppressHydrationWarning={true} className="inline text-primary">{userLanguage.toUpperCase()}</span>
        </button>

        <div style={{ transition: 'all 3s ease-in-out' }} className={`absolute right-0 mt-4 py-2 w-auto ${toggleSelector ? 'visible' : 'invisible'} bg-primary rounded-md shadow-xl z-20 transition origin-top-right transform`}>
          {
            Object.keys(languageOptions).map((lang: string) => {
              return (
                <a key={lang} href="#" onClick={() => userLanguageChange(lang)} className={`block px-4 py-2 text-sm capitalize hover:text-accent  ${userLanguage == lang ? 'text-accent' : 'text-secondary'}`}>
                  {lang.toUpperCase()}
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector
