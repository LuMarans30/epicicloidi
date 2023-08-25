import { Box, Button, Divider, Typography } from "@mui/material"

import { Images } from "@/../public/static/images/Images"

import Image from "next/image"
import { flexColumnStyle, flexRowStyle, leftColumnStyle, rightColumnStyle } from "@/app/components/CustomStyles"
import { Routes } from "@/app/components/Routes"
import { useRouter } from "next/router"

const containerStyle = {
    ...flexRowStyle,
    padding: '2.5rem',
}

const homeImageContainerStyle = {
    ...leftColumnStyle,
    position: "relative",
    width: 900,
    height: 900
}

const imageContainerStyle = {
    ...rightColumnStyle,
    position: "relative",
    width: 550,
    height: 550
}

export const HomePage = () => {

    const router = useRouter();

    return (
        <>
            <Box sx={containerStyle}>
                <Box sx={homeImageContainerStyle}>
                    <Image
                        src={Images[0]}
                        priority
                        alt="Logo"
                        fill
                        objectFit={'contain'}
                    />
                </Box>
                <Box sx={rightColumnStyle}>
                    <Typography fontSize={"3.5rem"} color={"red"} fontWeight={500} variant="h2">Epicicloidi con Geogebra</Typography>
                    <Typography fontSize={"2.5rem"} variant="h3">Esplora nuove intuizioni</Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ ...flexColumnStyle, padding: "3.5em" }}>
                <Typography fontWeight={500} color={"red"} variant="h3">Lavori svolti</Typography>
                <Typography fontSize={"1.2rem"} variant="h4">Scopri i lavori che abbiamo creato per te con GeoGebra che ti aiuteranno a scoprire il magico mondo delle curve Epicicloidali.</Typography>
            </Box>
            <Divider />
            {
                Routes.map((item, index) => {
                    return (
                        <div key={index}>
                            <Box sx={containerStyle}>
                                <Box sx={leftColumnStyle}>
                                    <Typography fontWeight={500} fontSize={"2.5rem"} color={"red"} variant="h5">{item.label}</Typography>
                                    <Typography variant="h6">{item.description}</Typography>
                                    <Button onClick={() => router.push(item.path)} variant="contained" color="primary">Scopri di più</Button>
                                </Box>
                                <Box sx={imageContainerStyle}>
                                    <Image
                                        src={Images[index + 1]}
                                        alt="Logo"
                                        fill
                                        objectFit={'contain'}
                                    />
                                </Box>
                            </Box>
                            <Divider />
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomePage