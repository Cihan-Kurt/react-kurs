import { createTheme } from '@material-ui/core/styles'

export default createTheme({
    palette: {
        background: {
            default: '#282c34',
        },
        text: {
            primary: '#fff',
        }
    },
    typography: {
        h1: {
            fontSize: '35px',
            marginBottom: '30px',
            fontWeight: 400,
        },
        h2: {
            marginBottom: '20px',
            fontSize: '25px',
            fontWeight: 400,
        },
        h3: {
            fontSize: '20px',
            marginBottom: '15px',
        }
} })