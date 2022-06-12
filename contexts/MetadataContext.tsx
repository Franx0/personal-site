// React
import React, { useState } from 'react';

export const MetadataContext = React.createContext(null);

const MetadataProvider = ({ children }: any) => {
  const [metadata, setMetadata] = useState({});

  const updateMetadata = (data: any) => {
    setMetadata(data);
  };

  return (
    <MetadataContext.Provider value={{ metadata, updateMetadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

const useMetadata = () => React.useContext(MetadataContext);

export { MetadataProvider, useMetadata };
