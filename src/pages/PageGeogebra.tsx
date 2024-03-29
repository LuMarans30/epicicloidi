import { flexColumnStyle, flexRowStyle } from "@/app/components/CustomStyles"
import { Box, Breadcrumbs, Link, List, ListItem, Typography } from "@mui/material"
import { useRouter } from "next/router"

import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { ReactNode } from "react"
import Geogebra from "react-geogebra"

interface PageGeogebraProps {
    title: string,
    path?: string,
    description?: string | ReactNode,
    instructions?: string[],
    externalResources?: ReactNode[],
    geogebraWidth?: number,
    geogebraHeight?: number
}

const containerStyle = {
    ...flexColumnStyle,
    padding: '1.5rem',
    gap: '1.5rem',
}

const breadcrumbStyle = {
    ...flexRowStyle,
    float: 'left',
    justifyContent: 'flex-start',
    textAlign: 'left',
    width: '100%',
}

export const PageGeogebra = ({ title, description, instructions, path, geogebraWidth, geogebraHeight, externalResources }: PageGeogebraProps) => {

    const router = useRouter()

    console.log("EXR", externalResources)

    return (
        <Box sx={containerStyle}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={breadcrumbStyle}>
                <Link underline="hover" color="inherit" onClick={() => router.push("/")}>
                    Home
                </Link>
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>
            <Typography
                variant="h3"
                noWrap
                color={"red"}
                component="div"
                textTransform={"none"}
                sx={{ fontWeight: '500' }}
            >
                {title}
            </Typography>
            {
                description &&
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    textTransform={"none"}
                >
                    {description}
                </Typography>
            }
            {
                instructions &&
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    textTransform={"none"}
                >
                    Istruzioni:
                </Typography>
            }
            <List sx={{ listStyleType: 'disc' }}>
                {
                    instructions?.map((item, index) => {
                        return (
                            <ListItem sx={{ display: 'list-item', fontSize: "1.2rem" }} key={index}>{item}</ListItem>
                        )
                    })
                }
            </List>
            {
                externalResources &&
                <Box sx={{ ...flexColumnStyle, gap: '0.5rem' }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        textTransform={"none"}
                    >
                        Risorse esterne:
                    </Typography>
                    <List sx={{ listStyleType: 'disc' }}>
                        {
                            externalResources!.map((item, index) => {
                                return (
                                    <ListItem sx={{ display: 'list-item', fontSize: "1.2rem" }} key={index}>{item}</ListItem>
                                )
                            })
                        }
                    </List>
                </Box>
            }
            {
                path &&
                <Geogebra
                    appName="classic"
                    width={geogebraWidth || 800}
                    height={geogebraHeight || 600}
                    appletOnLoad={() => console.log("Applet loaded")}
                    id="applet_container"
                    filename={path}
                    showMenuBar={false}
                    showToolBar={false}
                    showAlgebraInput={false}
                />
            }
        </Box >
    )
}

export default PageGeogebra