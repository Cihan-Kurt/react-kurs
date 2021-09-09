import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Box, CssBaseline, } from '@material-ui/core';

import Beispiel from './Beispiel'
import CreateReactApp from './CreateReactApp';
import WarumReact from './WarumReact'
import Hooks from './Hooks'
import Navigation from './Navigation'
import Startseite from './Startseite'

const useStyles = makeStyles(({spacing}) => ({
  main: {
    padding: spacing(1)
  },
}))

function App() {
  const classes = useStyles()

  return (
      <Router>
        <CssBaseline />
        <Box>
          <Navigation />
          <Box className={classes.main}>
            <Switch>
              <Route path="/startseite">
                <Startseite />
              </Route>
              <Route path="/warum-react">
                <WarumReact />
            </Route>
            <Route path="/createReactApp">
              <CreateReactApp />
            </Route>
            <Route path="/Hooks">
              <Hooks />
            </Route>
            <Route path='/beispiel'>
              <Beispiel />
            </Route>
            </Switch>
          </Box>
        </Box>
      </Router>
  )
}

export default App;
