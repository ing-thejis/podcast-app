import { Grid } from "@material-ui/core";
import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/content/Content";

const Canal = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          sm={12}
          md={3}
          style={{ border: "1px solid #000", padding: 0 }}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          sm={12}
          md={9}
          style={{ border: "1px solid #000", padding: 0 }}
        >
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default Canal;
