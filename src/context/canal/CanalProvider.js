import React, { createContext } from "react";
import useRequest from "../../hooks/useRequest";

const CanalContext = createContext();

const CanalProvider = ({ children }) => {
  const { channels, channel, getChannel } = useRequest();

  const data = {
    channels,
    channel,
  };

  return <CanalContext.Provider value={data}>{children}</CanalContext.Provider>;
};

export { CanalContext }
export default CanalProvider;
