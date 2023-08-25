'use client';

import React, { ReactNode, useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

export const ThemeManager = (props: { children: ReactNode | ReactNode[] }) => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                '&:hover': {
                                    backgroundColor: prefersDarkMode ? 'rgba(255, 0, 0, 0.2)' : 'rgba(255, 0, 0, 0.6)'
                                },
                                '.MuiTouchRipple-child': {
                                    backgroundColor: 'rgb(255, 0, 0)',
                                },
                                transition: "background-color 1.5s",
                            },
                            contained: {
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 0, 0, 0.6)',
                                },
                                backgroundColor: 'rgba(255,100,100)',
                            },
                        }
                    }
                }
            }),
        [prefersDarkMode],
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </>
    )
}

export default ThemeManager;