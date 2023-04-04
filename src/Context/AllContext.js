import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const AllContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [Collapse, setCollapse] = useState(false);
  const info = {
    setOpenMenu,
    openMenu,
    openText,
    setOpenText,
    Collapse,
    setCollapse,
  };

  return <MenuContext.Provider value={info}>{children}</MenuContext.Provider>;
};

export default AllContext;
