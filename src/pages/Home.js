import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import Content from "../components/content/Content";
import Loading from "../components/Loading";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    setTimeout(() => (
      setIsLoading(false)
    ), 500);

  }, [isLoading])

  return (
    <>
    {isLoading 
      ? <Loading /> 
      : <Grid container>
          <Grid
            item
            sm={2}
            md={3}
            lg={3}
            style={{padding: 0}}
          >
            <Sidebar />
          </Grid>
          <Grid
            item
            sm={10}
            md={9}
            lg={9}
            style={{padding: 0 }}
          >
            <Content />
          </Grid>
        </Grid>
    }
    </>
  );
};

export default Home;
