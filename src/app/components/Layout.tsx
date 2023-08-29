'use client'

import { ReactNode } from "react"
import CustomAppBar from "./CustomAppBar"
import CustomThemeProvider from "./CustomThemeProvider"
import Head from "next/head"

import icon from '../favicon.ico'

export default function Layout(props: { children: ReactNode | ReactNode[] }) {
    return (
        <>
            <Head>
                <title>Epicicloidi</title>
                <meta name="title" content={'Epicicloidi'} />
                <meta name="description" content={'Epicicloidi con Geogebra'} />
                <link rel="icon" href={icon.src} />
            </Head>
            <CustomThemeProvider>
                <CustomAppBar title="Epicicloidi con Geogebra" startIcon={"/logo.svg"} />
                {props.children}
            </CustomThemeProvider>
        </>
    )
}