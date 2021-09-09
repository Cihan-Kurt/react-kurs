import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    description: {
        marginBottom: '50px',
    },
    mainMargin: {
        marginLeft: 240
    },
    h6: {
        marginTop: 10,
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'underline',
    }
});

export default function Startseite() {
    const classes = useStyles()
    return (
        <Box className={classes.mainMargin}>
            <Typography className={classes.h1} variant='h1' component='h1'>REACT</Typography>
            <Typography id='was' variant='h2' component='h2'>Was ist React</Typography>
            <Typography className={classes.description} component='div'>
                React ist eine JavaScript Bibliothek mit dem man User Interfaces für Web Applikationen entwickelt.
                Man nutzt Frameworks oder Bibliotheken statt rein mit HTML,CSS und JavaScript zu entwickeln,
                da man mithilfe von Frameworks einfacher Web-Applikationen bauen kann
                die in jedem Browser laufen und darüber hinaus auch performant sind.
            </Typography>
            <Typography className={classes.description} component='div'>
                <Typography variant='h6' className={classes.h6}>Warum nutzen wir Frameworks oder Bibiliotheken?</Typography>
                Wenn man Komplexe Vorgänge ohne Biblitoheken oder einem Framework umsetzen, hat man am ende einen schwer
                wartbaren Code und sind dadurch fehleranfälliger. Darüber hinaus muss man für jedes Problem erstmal eine eigene Lösung
                entwickeln. Frameworks und Bibliotheken bieten da vordefinierte Lösungen die man nutzen kann.

                Bei React handelt es sich wie gesagt um eine JavaScript Bibliothek mit dem man sehr gut UserInterfaces entwickeln kann.
                Wieso dass so ist erfahrt Ihr im laufe dieses Kurses.
            </Typography>
            <Button color='primary' href='/warum-react' variant='contained'> Warum React?</Button>
        </Box>
    );
}

