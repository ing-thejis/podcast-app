import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
// icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useStyles } from '../styles/StyleNavbar';

const Navbar = () => {
    const classes = useStyles()

 
    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (ev) => {
      setAnchorEl(ev.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
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
    )
}

export default Navbar
