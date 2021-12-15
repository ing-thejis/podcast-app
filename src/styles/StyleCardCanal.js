import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    container: {
        backgroundColor: '#111',
        color: '#fff',
    },
    card: {
        backgroundColor: '#111',
        color: '#fff',
        padding: '10px',
        '&:hover':{
            backgroundColor: '#444',
            borderRadius: '15px'
        }
    }
})
