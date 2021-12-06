import React, { useContext, useState } from "react";
import { Button, Grid, Link, Menu, MenuItem, Paper } from "@material-ui/core";
import CanalContext from "../../../context/canal/CanalContext";
import CardCanal from "./CardCanal";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStyles } from "../../../styles/Home";

const Home = () => {

  const classes = useStyles()

  const { channels } = useContext(CanalContext);

  const [seeAll, setSeeAll] = useState(false)

  const handleSeeAll = () => {
    setSeeAll(true)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (ev) => {
    setAnchorEl(ev.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.container}>
      <div style={{position: 'relative'}}>
        <Button className={classes.button} onClick={handleClick}><AccountCircleIcon />perfil name<ArrowDropDownIcon /></Button>
        <Menu className={classes.menuProfile} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Account</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Premium</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <div style={{margin: '50px'}}><span style={{fontSize: '24px'}}><b>Podcast más escuchados</b></span><Link className={classes.verTodos} onClick={()=>handleSeeAll()}>VER TODOS</Link></div>
      <Grid container spacing={3}>
      {seeAll 
        ? Array.isArray(channels) &&
          channels.map((channel) => (
            <Grid
              key={channel.id}
              item
              sm={4}
              md={4}
              lg={3}
            >
              <Paper elevation={2}>
                <CardCanal
                  image={channel.urls.banner_image.original}
                  description={channel.description}
                  title={channel.title}
                />
              </Paper>
            </Grid>
          ))
        : Array.isArray(channels) &&
          channels.map((channel, index) => (
          <Grid
            key={channel.id}
            item
            sm={4}
            md={4}
            lg={3}
          >
            {index<3 
              ? <Paper elevation={2}>
                  <CardCanal
                    image={channel.urls.banner_image.original}
                    description={channel.description}
                    title={channel.title}
                  />
                </Paper> 
              : <p></p>
            }
            
          </Grid>
        ))
      }
      </Grid>
    </div>
  );
};

export default Home;
