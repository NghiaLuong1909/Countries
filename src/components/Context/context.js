import { createContext, useState } from "react";

export const countryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  return (
    <countryContext.Provider value={{ country, setCountry }}>
      {children}
    </countryContext.Provider>
  );
};
