import React, { useContext, useState } from "react";
import { Link, Paper } from "@material-ui/core";
import { CanalContext } from "../../../context/canal/CanalProvider";
import CardCanal from "./CardCanal";
// styles
import { useStyles } from "../../../styles/StyleHome";
import Navbar from "../../Navbar";

const Home = () => {

  const classes = useStyles()
  const { channels } = useContext(CanalContext);
  const [seeAll, setSeeAll] = useState(false)  
  const handleSeeAll = () => {
    setSeeAll(true)
  }

  return (
    <div className={classes.container}>
      <Navbar />
      <div style={{margin: '50px'}}><span style={{fontSize: '24px'}}><b>Podcast más escuchados</b></span><Link className={classes.verTodos} onClick={()=>handleSeeAll()}>VER TODOS</Link></div>
      <div className={classes.containerContent}>
      {seeAll 
        ? Array.isArray(channels) &&
          channels.map((channel) => (
            <Paper key={channels.id} elevation={2}>
              <CardCanal
                id={channel.id}
                image={channel.urls.banner_image.original}
                description={channel.description}
                title={channel.title}
              />
            </Paper>
          ))
        : Array.isArray(channels) &&
          channels.map((channel, index) => (
            <>
            {index<4
              ? <Paper key={channel.id} elevation={2}>
                  <CardCanal
                    id={channel.id}
                    image={channel.urls.banner_image.original}
                    description={channel.description}
                    title={channel.title}
                  />
                </Paper> 
              : <p key={channel.id}></p>
            }
            </>
        ))
      }
      </div>
    </div>
  );
};

export default Home;
