import React, { useState, createContext } from 'react';

import { offices } from '../../pages/Home/data';

export const OfficeContext = createContext();

export const OfficeProvider = ({ children }) => {
     const [selectedOffice, setSelectedOffice] = useState(offices[0].id);
     const handleOfficeChange = (newOffice) => {
          setSelectedOffice(newOffice);
     };

     return (
          <OfficeContext.Provider
               value={{ selectedOffice, handleOfficeChange }}
          >
               {children}
          </OfficeContext.Provider>
     );
};
