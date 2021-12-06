import React from "react";
import useRequest from "../../hooks/useRequest";
import CanalContext from "./CanalContext";

const CanalProvider = ({ children }) => {
  const { channels } = useRequest();

  const data = {
    channels,
  };

  return <CanalContext.Provider value={data}>{children}</CanalContext.Provider>;
};

export default CanalProvider;
