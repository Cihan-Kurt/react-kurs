import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    mainMargin: {
        marginLeft: 240,
        marginRight: 100,
    },
    description: {
        marginBottom: '40px',
    },
    codeSample: {
        backgroundColor: 'black',
        borderRadius: '3px',
        marginBottom: '5px',
    },
    playGround: {
        width: '100%',
        height: '400px'
    }
});

export default function CreateReactApp() {
    const classes = useStyles()
    return (
        <Box className={classes.mainMargin}>
            <Box className={classes.description}>
                <Typography variant='h1'>React</Typography>
                <Typography variant='h2'>Create React App</Typography>
                <Typography component='p'>
                    Mit dem befehlt <code>npx create-react-app my-app</code>
                    richten wir eine Etnwicklungsumgebung ein in der wir React.js nutzen können.
                    Um eine React App so zu erstellen benötgst du Node 10.16 (oder neuer) und npm 5.6(oder höher).
                </Typography>
                <Box className={classes.codeSample}>
                    <code>
                        npx create-react-app my-app<br />
                    cd my-app<br />
                    npm start<br />
                    </code>
                </Box>
                <Box className={classes.codeSample}>
                    <code>
                        import React from 'react'
                </code>
                </Box>
            </Box>
            
            <Typography variant='h2'>React Elemente rendern</Typography>
            <Box className='description'>
                Die React App die darufhin erstellt wurde hat ein 'Root' Element in der index.html.
                Mithilfe von <a href='https://reactjs.org/docs/react-dom.html' target='_blank' style={{ color: '#fff'}}>ReactDOM.render()</a> rendern wir Elemente in diesem 'Root'.
                <Box className={classes.codeSample}>
                    <code>
                        const element = {'<h1>Hello, world</h1>'};<br />
                        ReactDOM.render(element, document.getElementById('root'));
                    </code>
                </Box>
            </Box>
            <Box>
                <p>Hier sieht man wie eine solche App aufgebaut ist.
                Schaut man sich die Dateien an, sieht man in der index.html das 'Root'-Element. Darüber hinaus befindet sich im 'src'-Ordner
                die App.js und die index.js.
                Die index.js wird genutzt um sich das 'root'-Element zu holen und mithilfe des ReactDOM.render() wird die App.js an den 'root' angehangen.
                In der App.js beschreiben wir dann wie die Seite aussehen soll. Wenn Komponente geschrieben werden wie eine Navigation.js, muss diese in der App.js importiert und im return
                hinzugefügt werden, damit diese gerendert wird.
                Diese enthält ein div mit der id='root' damit React weis wo unser React code gemanaged werden soll.
                </p>
                <iframe src="https://codesandbox.io/embed/proud-sunset-cbzws?fontsize=14&hidenavigation=1&theme=dark"
                    style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
                    title="proud-sunset-cbzws"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </Box>
        </Box>
    )
}