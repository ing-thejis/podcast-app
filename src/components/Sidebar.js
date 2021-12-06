import React, { useContext } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
// Styles
import { useStyles } from "../styles/Sidebar";
import { Link } from "react-router-dom";
// Context
import ContentContext from "../context/Content/ContentContext";
// logo
import logo from '../assets/logo.jpg'

const Sidebar = (props) => {

  const classes = useStyles();

  const { handleContent } = useContext(ContentContext)

  return (
    <div className={classes.container}>
      <List component="nav">
      <Link to="/" className={classes.link}>
          <ListItem button onClick={()=>handleContent('HOME')}>
            {/* <ListItemIcon className={classes.icons}>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="PODCAST" /> */}
            
            <img src={logo} alt="logo" className={classes.logo}/>
            
          </ListItem>
        </Link>

        <Link to="/" className={classes.link}>
          <ListItem button onClick={()=>handleContent('HOME')}>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </Link>
        <Link to="#" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Buscar" />
          </ListItem>
        </Link> 
        <Link to="canal" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Tu Biblioteca" />
          </ListItem>
        </Link>
        <Divider className={classes.divider}/>
        <ListItem button>
          <ListItemIcon className={classes.icons}>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Playlist" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icons}>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Tus me gusta" />
        </ListItem>
        <Divider className={classes.divider}/>
      </List>
    </div>
  );
};

export default Sidebar;
