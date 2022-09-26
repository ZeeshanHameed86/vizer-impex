import React, { useContext } from "react";
const AnimContext = React.createContext();

export const AnimProvider = ({ children }) => {
  const ScrollAppear = (refArray) => {
    refArray.map((myRef) => {
      let titleText = myRef;
      let titlePosition = myRef.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.2;
      if (titlePosition < screenPosition) {
        titleText.classList.add("title-appear");
      }
      return titleText;
    });
  };

  return (
    <AnimContext.Provider value={{ ScrollAppear }}>
      {children}
    </AnimContext.Provider>
  );
};

export const useAnimContext = () => {
  return useContext(AnimContext);
};
