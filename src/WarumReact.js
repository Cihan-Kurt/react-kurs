
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    description: {
        marginBottom: '50px',
    },
    mainMargin: {
        marginLeft: 240,
        paddingRight: 60,
    },
    h6: {
        marginTop: 10,
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'underline',
    }
});


export default function WarumReact() {
    const classes = useStyles()
    return (
        <Box className={classes.mainMargin}>
            <Typography component='h1' variant='h1'>REACT</Typography>
            <Typography component='h2' variant='h2'>Warum React?</Typography>
            <Typography variant='h6' className={classes.h6}>Virtual DOM</Typography>
            <Typography className={classes.description} component='div'>
                <p>
                DOM steht für Document Object Model und repräsentiert die Baumstruktur die aus dem HTML generiert wird.
                Diese Baumstruktur dient z.B JavaScript als Schnittstelle um auf Elemente der Website zuzugreifen und diese zu verändern.
                Daraufhin werden die Änderungen auf die Webseite angewendet und ausgeführt.
                </p>
                <p>
                Das Problem daran ist das JavaScript dafür jedes mal die Baumstruktur durchsucht um zum gewünschten Element zu gelangen und diese zu verändern.
                Sobald das geschehen ist wird die ganze Webseite komplett neu geladen mit der gewünschten Änderung, was nicht sehr performant ist.
                Aus diesem Grund gibt es das Virtual DOM.</p>
                 
                <p>
                    React erstellt eine virtuelle Kopie von eurem DOM das auf das Nötigste an Informationen runtergebrochen wird.
                    Dieses virtuelle DOM ist deutlich kleiner wodurch es viel schneller verändert werden kann, daher ist das der Ort an dem diese
                    Änderungen vorgenommen werden.

                    Wann immer in diesem virtuellen DOM veränderungen vorgenommen werden, vergleicht React beide Versionen des DOM's durch einen Algorithmus
                    der die Änderungendann in einem Schritt direkt an der entsprechenden Stelle im DOM vornimmt ohne dieses nochmal durchsuchen zu müssen.
                </p>
            </Typography>
            <Typography variant='h6' className={classes.h6}>Komponenten</Typography>
            <Typography className={classes.description} component='p'>
            <p>Komponenten erlauben es einem seinen Code in wiederverwertbare Teile aufzubrechen.</p>
            <p>Um eine Komponente zu definieren erstellen wir eine Funktion die maximal ein 'props' entgegennimmt
            und React-Elemente zurückgibt.(React Komponenten müssen groß geschrieben werden also Navigation.js nicht navigation.js)
            </p>
            <code style={{ backgroundColor: 'black' }}>

            </code>
            <p>
                    Diese Komponenten können exportiert werden und in anderen Komponenten genutzt werden.
                    Dies macht mann wenn man z.B eine Komponente hat die auf allen Seiten der Web Applikation genutzt werden soll.
                Ein Beispiel dafür sieht man anhand des <a href='beispiel.js' style={{ color: 'white' }}>Beispiels</a> in dem die Navigationsleiste auf jeder Seite vorkommt.
            </p>
            </Typography>
        </Box>
    );
}