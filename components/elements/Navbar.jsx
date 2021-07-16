// react
import React from 'react'

// MUI
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createTheme } from '@material-ui/core'
import yellow from '@material-ui/core/colors/yellow'

// others
import PropTypes from 'prop-types'


function HideOnScroll(props) {
    const {children, window} = props
    const trigger = useScrollTrigger({target: window && window()})
    return <Slide appear={false} direction='down' in={!trigger}>{children}</Slide>
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

function Navbar({ children }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: yellow[300]
            }
        }
    })
    const font = {
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    }
    const navChildren = {
        marginLeft: '60px'
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <h1 style={{fontFamily: font, margin: '0'}}>Daily Planner</h1>
                        <div style={navChildren}>
                            {children}
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </ThemeProvider>
    )
}

export default Navbar
