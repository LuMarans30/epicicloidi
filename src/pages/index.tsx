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

export const HomePage = () => {

    const router = useRouter();

    return (
        <>
            <Box sx={containerStyle}>
                <Box sx={leftColumnStyle}>
                    <Image
                        src={Images[0]}
                        priority
                        alt="Logo"
                        style={{
                            width: "80%",
                            height: "80%",
                            objectFit: "cover"
                        }}
                        width="700"
                        height="800"
                    />
                </Box>
                <Box sx={rightColumnStyle}>
                    <Typography color={"red"} fontWeight={400} variant="h2">Epicicloidi con Geogebra</Typography>
                    <Typography variant="h3">Esplora nuove intuizioni</Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ ...flexColumnStyle, padding: "2em" }}>
                <Typography fontWeight={500} color={"red"} variant="h4">Lavori svolti</Typography>
                <Typography variant="h5">Scopri i lavori che abbiamo creato per te con GeoGebra che ti aiuteranno a scoprire il magico mondo delle curve Epicicloidali.</Typography>
            </Box>
            <Divider />
            {
                Routes.map((item, index) => {
                    return (
                        <div key={index}>
                            <Box sx={containerStyle}>
                                <Box sx={leftColumnStyle}>
                                    <Typography fontWeight={500} color={"red"} variant="h4">{item.label}</Typography>
                                    <Typography variant="h5">{item.description}</Typography>
                                    <Button onClick={() => router.push(item.path)} variant="contained" color="primary">Scopri di più</Button>
                                </Box>
                                <Box sx={rightColumnStyle}>
                                    <Image
                                        src={Images[index + 1]}
                                        alt="Logo"
                                        style={{
                                            width: "50%",
                                            height: "50%",
                                            objectFit: "cover"
                                        }}
                                        width={500}
                                        height={500}
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