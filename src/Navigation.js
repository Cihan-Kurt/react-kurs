import { Box, Drawer, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
    Link
} from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles({
    nav: {
        borderRight: '1px solid rgba(0, 0, 0, 0.2)',
        overflow: 'scroll',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#282c34',
    },
    listLogo: {
        height: '25px'
    },
    link: {
        display: 'block',
        height: 'auto',
        textDecoration: 'none',
        color: 'inherit',
    },
    linkWrapper: {
        padding: 8,
    },
    header: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    }
});


export default function Navigation() {
    const classes = useStyles();
    const topics = [{
        key: 'startseite',
        text: 'Was ist React',
    }, {
        key: 'warum-react',
        text: 'Warum React',
    }, {
        key: 'createReactApp',
        text: 'Wie nutze ich React',
    }, {
        key: 'Hooks',
        text: 'Wie nutze ich React Hooks',
    }, {
        key: 'beispiel',
        text: 'React Beispiel'
    }]
    return (
        <Drawer variant='permanent' classes={{
            paper: classes.drawerPaper,
        }} className={classes.drawer}>
            <Box className={classes.header}><img className={classes.listLogo} alt='logo' src='./Download.svg'></img>
                <Typography variant='h6' className={classes.listTitle}>
                    REACT
                </Typography></Box>
            {topics.map((topic) => (
                <ListItem button className={classes.linkWrapper} key={topic.key}>
                    <ListItemText ><Link to={"/" + topic.key} className={classes.link}>{topic.text}</Link></ListItemText>
                </ListItem>
            ))}
        </Drawer>
    )
}

