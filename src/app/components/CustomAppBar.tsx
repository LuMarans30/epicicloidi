'use client'

import { AppBar, Toolbar, Typography, Box, Button, Divider } from "@mui/material"

import React from "react"
import { useRouter } from "next/navigation"
import { Routes } from "./Routes"

import Image from "next/image";
import { flexRowStyle } from "./CustomStyles"

import HomeIcon from '@mui/icons-material/Home';

const bannerStyle = {
    ...flexRowStyle,
    padding: '1rem',
}

export const CustomAppBar = (props: { title: string, startIcon: string }) => {

    const router = useRouter();

    return (
        <AppBar position="static">
            <Box sx={bannerStyle}>
                <Image
                    src={props.startIcon}
                    alt="Logo"
                    width={150}
                    height={150}
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    textTransform={"uppercase"}
                >
                    {props.title}
                </Typography>
            </Box>
            <Divider />
            <Toolbar sx={flexRowStyle}>
                <Box>
                    <Button
                        variant="text"
                        color="inherit"
                        sx={{ borderRadius: 5 }}
                        onClick={() => router.push("/")}
                        startIcon={<HomeIcon style={{ color: "red" }} />}
                    >
                        Home
                    </Button>
                    {
                        Routes.map((item, index) => {
                            return (
                                <Button
                                    key={index}
                                    variant="text"
                                    color="inherit"
                                    sx={{ borderRadius: 5, marginLeft: '1.5rem' }}
                                    onClick={() => router.push(item.path)}
                                >
                                    {item.label}
                                </Button>
                            )
                        })
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar;