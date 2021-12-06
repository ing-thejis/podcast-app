import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Content from "../components/content/Content";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              flex: "1 1 auto",
              position: "fixed",
              width: "20%",
              left: 0,
              top: 0,
            }}
          >
            <Sidebar />
          </div>
          <div
            style={{
              flex: "5 1 auto",
              position: "absolute",
              width: "80%",
              right: 0,
              top: 0,
              height: "100vh",
            }}
          >
            <Content />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
