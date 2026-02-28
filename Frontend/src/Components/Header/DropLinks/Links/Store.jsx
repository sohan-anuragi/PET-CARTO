import { createContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [activeLink, setActiveLink] = useState("");

  return (
    <MenuContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
