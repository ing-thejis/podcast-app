import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        color: '#fff',
        backgroundColor: '#333',
        padding: 0,
        border: '1px solid #000'
    },
    button: {
        position: 'absolute',
        right: 0, color: '#fff',
        backgroundColor: 'rgb(2,2,2)',
        borderRadius: '20px',
        padding: '5px',
        margin: '5px'
    },
    verTodos: {
        float: 'right',
        textDecoration: 'none',
        color: '#aaa',
        cursor: 'pointer'
    },
    menuProfile: {
        '& > *':{
            color: '#fff',
            backgroundColor: 'rgb(2,2,2)',
            marginTop: '30px',
            width: '250px',    
        }
    },
    menuItem: {
        padding: '10px',
        margin: '3px',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: 'rgb(87,87,87)',
            Transition: '1s'
        }
    }
})