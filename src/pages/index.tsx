import { Box, Button, Divider } from "@mui/material"

import { Images } from "../../public/Images"

import Image from "next/image"
import { flexColumnStyle, flexRowStyle } from "@/app/components/CustomStyles"
import { Routes } from "@/app/components/Routes"
import { useRouter } from "next/router"

import "./css/index.css"

const containerStyle = {
    ...flexRowStyle,
    padding: '2.5rem',
}

const leftColumnStyle = {
    ...flexColumnStyle,
    gap: '1rem',
    padding: '1rem',
    width: '50%',
    float: 'left'
}

const rightColumnStyle = {
    ...leftColumnStyle,
    float: 'right'
}

const imageContainerStyle = {
    ...rightColumnStyle,
    width: 500,
    height: 500
}

export const HomePage = () => {

    const router = useRouter();

    return (
        <>
            <Box sx={containerStyle}>
                <Box sx={leftColumnStyle}>
                    <Image
                        src={Images[0]}
                        alt="Logo"
                        width={700}
                        height={800}
                    />
                </Box>
                <Box sx={rightColumnStyle}>
                    <h1>Epicicloidi con Geogebra</h1>
                    <h2>Esplora nuove intuizioni</h2>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ ...flexColumnStyle, padding: "2em" }}>
                <h1>Lavori svolti</h1>
                <h3>Scopri i lavori che abbiamo creato per te con GeoGebra e che ti aiuteranno a scoprire il magico mondo delle curve Epicicloidali.</h3>
            </Box>
            <Divider />
            {
                Routes.map((item, index) => {
                    return (
                        <>
                            <Box sx={containerStyle} key={index} onClick={() => router.push(item.path)}>
                                <Box sx={leftColumnStyle}>
                                    <h1>{item.label}</h1>
                                    <p>{item.description}</p>
                                </Box>
                                <Box sx={imageContainerStyle}>
                                    <Image
                                        src={Images[index + 1]}
                                        alt="Logo"
                                        style={{
                                            width: "90%",
                                            height: "90%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Divider />
                        </>
                    )
                })
            }
        </>
    )
}

export default HomePage