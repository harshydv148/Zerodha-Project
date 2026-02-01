import React, { createContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const openBuyWindow = (uid) => {
    console.log("openBuyWindow CALLED:", uid);
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    console.log("closeBuyWindow CALLED");
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow, closeBuyWindow }}>
      {children}

      {isBuyWindowOpen && (
        <>
          {console.log("BuyActionWindow RENDERING")}
          <BuyActionWindow uid={selectedStockUID} />
        </>
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
