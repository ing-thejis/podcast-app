import React, { createContext } from "react";
import useRequest from "../../hooks/useRequest";

const CanalContext = createContext();

const CanalProvider = ({ children }) => {
  const { channels } = useRequest();

  const data = {
    channels,
  };

  return <CanalContext.Provider value={data}>{children}</CanalContext.Provider>;
};

export { CanalContext }
export default CanalProvider;
