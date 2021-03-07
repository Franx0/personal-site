// React
import React, { useState, useEffect, useContext } from 'react';

export const HeaderContext = React.createContext({
  language: { language: "es", setLanguage: null },
  title: { title: "Franx0", setTitle: null },
  search: { search: [], setSearch: null }
});

export const HeaderProvider = ({ children }: any) => {
  let value = useContext(HeaderContext);
  const [language, setLanguage] = useState(value.language.language);
  const [title, setTitle] = useState(value.title.title);
  const [search, setSearch] = useState(value.search.search);

  value = {
    language: { language, setLanguage },
    title: { title, setTitle },
    search: { search, setSearch }
  };

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};

export const setPageTitle = (title: string): string => {
  const { title: { setTitle } } = useContext(HeaderContext);

  useEffect(() => {setTitle(title)}, []);

  return title
}

export const setPageSearch = (data: Array<any> = []): Array<any> => {
  const { search: { setSearch } } = useContext(HeaderContext);
  useEffect(() => {setSearch(data)}, []);

  return data
}

export default HeaderContext
