import React, { useState, createContext } from "react";

const ContentContext = createContext()

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("HOME");

  const handleContent = (type) => {
    switch (type) {
      case "HOME":
        setContent("HOME");
        break;
      case "CANAL":
        setContent("CANAL");
        break;
      default:
        break;
    }
  };

  const data = {
    stateContent: content,
    handleContent,
  };

  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
};

export { ContentContext } 
export default ContentProvider;
