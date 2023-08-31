import { Box, Button, Divider, Typography } from "@mui/material"

import Image from "next/image"
import { flexColumnStyle, flexRowStyle, leftColumnStyle, rightColumnStyle } from "@/app/components/CustomStyles"
import { RoutesPages } from "@/app/components/Routes"
import { useRouter } from "next/router"
import EpicycloidCanvas from "@/app/components/EpicycloidCanvas"

const containerStyle = {
    ...flexRowStyle,
    padding: '2.5rem'
}

const homeImageContainerStyle = {
    ...leftColumnStyle,
    position: "relative"
}

const imageContainerStyle = {
    ...rightColumnStyle,
    position: "relative",
    width: 550,
    height: 550
}

export const HomePage = () => {

    const router = useRouter()

    return (
        <>
            <Box sx={containerStyle}>
                <Box sx={homeImageContainerStyle}>
                    {/*<video width={700} height={700} autoPlay muted>
                        <source src="/static/videos/epicicloide.webm" type="video/webm" />
                    </video>*/}
                    <EpicycloidCanvas
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
                        <div key={index}>
                            <Box sx={containerStyle}>
                                <Box sx={leftColumnStyle}>
                                    <Typography fontWeight={500} fontSize={"2.5rem"} color={"red"} variant="h5">{item.label}</Typography>
                                    <Typography variant="h6">{item.description}</Typography>
                                    <Button onClick={() => router.push(item.path)} variant="contained" color="primary">Scopri di più</Button>
                                </Box>
                                <Box sx={imageContainerStyle}>
                                    <Image
                                        src={item.image}
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