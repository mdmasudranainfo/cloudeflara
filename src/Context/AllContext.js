import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const AllContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const info = { setOpenMenu, openMenu };

  return <MenuContext.Provider value={info}>{children}</MenuContext.Provider>;
};

export default AllContext;
