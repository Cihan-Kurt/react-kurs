import React, { useState, useEffect } from "react";
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    description: {
        marginBottom: '70px',
    },
    mainMargin: {
        marginLeft: 240
    }
});

export default function State() {
    const classes = useStyles()


    useEffect(() => {
        // document.title = `You clicked ${count} times`;
    }, []);

    return (
        <Box className={classes.mainMargin}>
            <h2>Hooks</h2>
            <h3>UseState API</h3>
            <code style={{ backgroundColor: 'black' }}>const [state, setState] = useState(initialState);</code>
            <p>So erstellen wir einen useState, allerdings muss dieser erstmal importiert werden aus React.
            Wie das Funktioniert sieht man im unteren Beispiel, da haben wir '0' als initialen Wert gesetzt, weil wir beim erstmaligen rendern
            sehen wollen das wir 0 mal geclickt haben.
            State und setState benennt man immer nach dem Zweck in userem Beispiel ist das count und setCount.
            Wenn gewünscht kann man einen initialState setzten wie im unteren Beispiel.
            </p>

            <p>Mithilfe des State Hooks kann mann funktionellen Komponenten einen State vergeben.
            React merkt sich diesen State und reagiert auf veränderungen des States. In diesem Beispiel
            haben wir einen useState erstellt mit dem Namen Count und dem Initalen Wert von 0. Durch das
            betätigen des Buttons setzten wir Count auf Count+1 </p>
            <iframe src="https://codesandbox.io/embed/rough-https-3oouo?fontsize=14&hidenavigation=1&theme=dark"
                style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
                title="rough-https-3oouo"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <h3>UseEffect API</h3>
            <code style={{ backgroundColor: 'black' }}>
                useEffect(() => {'{}'},[])
            </code>
            <p>
                Mit dem useEffect Hook können wir "Nebeneffekte", nach dem rendern ausführen.
                Das "Array" am Ende des useEffects ist das dependancies Array. Da können wir den State (oder mehrere States) reingeben auf den das useEffect reagieren soll.
                In dem Beispiel von oben möchten wir jedes mal wenn sich der count State ändert als Nebeneffekt den document.title anpassen.
            </p>
        </Box>
    );
}
