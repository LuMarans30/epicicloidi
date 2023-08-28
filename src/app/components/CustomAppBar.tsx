'use client'

import { AppBar, Toolbar, Typography, Box, Button, Divider, ButtonGroup } from "@mui/material"

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

const buttonStyle = {
    borderRadius: 5,
}

export const CustomAppBar = (props: { title: string, startIcon: string }) => {

    const router = useRouter();

    const handleClick = (path: string) => {
        router.push(path);
    }

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
                <ButtonGroup size="large" variant="text" aria-label="large button group">
                    {
                        Routes.map((item, index) => {

                            const icon = <HomeIcon sx={{ color: "red" }} />

                            return (
                                <Button
                                    key={index}
                                    variant="text"
                                    color="inherit"
                                    sx={buttonStyle}
                                    onClick={() => handleClick(item.path)}
                                    startIcon={index === 0 ? icon : undefined}
                                >
                                    {item.label}
                                </Button>
                            )
                        })
                    }
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar;