import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        color: '#fff',
        backgroundColor: '#000',
        border: '1px solid #000',
        height: '100%',
        // position: 'fixed',
    
        // '@media(minWidth: 600px)': {
        //     backgroundColor: '#fff',
        //     height: '30vh'
        // },
        // '@media(minWidth: 960px)': {
        //     height: '30vh'
        // }
    },
    logo: {
        width: '100%',
        height: '80px'
    },
    divider: {
        backgroundColor: '#555'
    },
    icons: {
        color: '#fff',
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    },
})