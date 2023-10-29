import { Box, Button, Divider, Icon, SvgIcon, Typography } from "@mui/material"

import Image from "next/image"
import { flexColumnStyle, flexRowStyle, leftColumnStyle, rightColumnStyle } from "@/app/components/CustomStyles"
import { RoutesPages } from "@/app/components/Routes"
import { useRouter } from "next/router"
import CardioidCanvas from "@/app/components/CardioidCanvas"

import GeogebraIcon from "/public/static/geogebra/geogebraIcon.png"

const containerStyle = {
    ...flexRowStyle,
    padding: '2.5rem'
}

const homeImageContainerStyle = {
    ...leftColumnStyle,
    position: "relative"
}

const contentStyle = {
    ...leftColumnStyle,
    flex: 1
}

const imageContainerStyle = {
    ...rightColumnStyle,
    position: "relative",
    width: 550,
    height: 550
}

export const HomePage = () => {

    const router = useRouter()

    const geogebraIconImage = (width: number, height: number) => {
        return (
            <img
                alt="edit"
                width={width}
                height={height}
                src={GeogebraIcon.src}
            />
        )
    }

    return (
        <>
            <Box sx={containerStyle}>
                <Box sx={homeImageContainerStyle}>
                    <CardioidCanvas
                        markCount={120}
                        animation={true}
                        width={500}
                        height={500}
                        radius={250}
                        duration={10}
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
                RoutesPages.map((item, index) => {
                    return (
                        <Box key={index} sx={{ flexGrow: 1 }}>
                            <Box sx={containerStyle}>
                                <Box sx={contentStyle}>
                                    <Typography fontWeight={500} fontSize={"2.5rem"} color={"red"} variant="h5">{item.label}</Typography>
                                    <Typography sx={{ whiteSpace: "nowrap" }} variant="h6">{item.description}</Typography>
                                    <Divider />
                                    <Button
                                        startIcon={geogebraIconImage(40, 40)}
                                        onClick={() => router.push(item.path)}
                                        sx={{ borderRadius: 3 }}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Scopri di più
                                    </Button>
                                </Box>
                                <Box sx={imageContainerStyle}>
                                    {
                                        item.canvasElement ?
                                            item.canvasElement
                                            :
                                            <Image
                                                src={item.image}
                                                alt="Logo"
                                                fill
                                                objectFit={'contain'}
                                            />
                                    }
                                </Box>
                            </Box>
                            <Divider />
                        </Box>
                    )
                })
            }
        </>
    )
}

export default HomePage