import { flexColumnStyle, flexRowStyle } from "@/app/components/CustomStyles";
import { Box, Breadcrumbs, Divider, Link, List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface PageGeogebraProps {
    title: string,
    url?: string,
    description?: string,
    instructions?: string[],
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

export const PageGeogebra = ({ title, description, instructions, url }: PageGeogebraProps) => {

    const router = useRouter();

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
            <Divider />
            {
                url &&
                <iframe loading="lazy" src={url} width="800" height="600" allowFullScreen style={{ border: 'none', borderRadius: 4 }}></iframe>
            }
        </Box >
    )
}

export default PageGeogebra