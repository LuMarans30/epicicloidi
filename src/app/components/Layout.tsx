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
                <link rel="icon" href="/logo.svg" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/logo.svg"></link>
            </Head>
            <CustomThemeProvider>
                <CustomAppBar title="Epicicloidi con Geogebra" startIcon={"/logo.svg"} />
                {props.children}
            </CustomThemeProvider>
        </>
    )
}