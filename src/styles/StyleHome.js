import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        color: '#fff',
        backgroundColor: '#111',
        padding: 0,
        border: '1px solid #000',
    },
    verTodos: {
        float: 'right',
        textDecoration: 'none',
        color: '#aaa',
        cursor: 'pointer'
    },
    containerContent: {
        display: 'flex',
        flexFlow: 'row wrap',
        margin: '40px'
    }
})