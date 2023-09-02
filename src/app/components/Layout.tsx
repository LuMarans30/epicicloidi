'use client'

import { ReactNode } from "react"
import CustomAppBar from "./CustomAppBar"
import CustomThemeProvider from "./CustomThemeProvider"
import Head from "next/head"

export default function Layout(props: { children: ReactNode | ReactNode[] }) {
    return (
        <>
            <Head>
                <title>Epicicloidi</title>
                <meta name="title" content={'Epicicloidi'} />
                <meta name="description" content={'Epicicloidi con Geogebra'} />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.webmanifest" />
                <link rel="apple-touch-icon" href="/favicon.ico"></link>
                <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <CustomThemeProvider>
                <CustomAppBar title="Epicicloidi con Geogebra" startIcon={"/logo.svg"} />
                {props.children}
            </CustomThemeProvider>
        </>
    )
}