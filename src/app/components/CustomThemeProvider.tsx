'use client'

import React, { ReactNode, useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'

export const ThemeManager = (props: { children: ReactNode | ReactNode[] }) => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    //If light mode, use these colors
                    primary: {
                        main: prefersDarkMode ? 'rgb(0, 0, 0)' : 'rgb(240, 240, 240)',
                    },
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                '&:hover': {
                                    backgroundColor: prefersDarkMode ? 'rgba(170, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0.2)'
                                },
                                '.MuiTouchRipple-child': {
                                    color: prefersDarkMode ? 'rgb(255, 0, 0)' : 'rgb(200, 0, 0)'
                                },
                                '&.active': {
                                    backgroundColor: prefersDarkMode ? 'rgba(170, 0, 0, 0.8)' : 'rgba(255, 0, 0, 0.4)'
                                },
                                transition: "background-color 0.5s",
                            },
                            contained: {
                                '&:hover': {
                                    backgroundColor: prefersDarkMode ? 'rgba(230, 0, 0, 0.6)' : 'rgba(255, 0, 0, 0.2)'
                                },
                                backgroundColor: prefersDarkMode ? 'rgba(170, 0, 0, 0.6)' : 'rgba(255, 0, 0, 0.2)',
                            },
                        }
                    }
                }
            }),
        [prefersDarkMode],
    )

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </>
    )
}

export default ThemeManager