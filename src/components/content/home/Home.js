import React, { useContext, useState } from "react";
import { Button, Link, Menu, MenuItem, Paper } from "@material-ui/core";
import { CanalContext } from "../../../context/canal/CanalProvider";
import CardCanal from "./CardCanal";
// icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// styles
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
        <Button className={classes.btnNav}><ArrowBackIosIcon /></Button>
        <Button className={classes.btnNav}><ArrowForwardIosIcon /></Button>
        <Button className={classes.button} onClick={handleClick}><AccountCircleIcon />perfil name<ArrowDropDownIcon /></Button>
        <Menu className={classes.menuProfile} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Account</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Premium</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
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
              : <p></p>
            }
            </>
        ))
      }
      </div>
    </div>
  );
};

export default Home;
