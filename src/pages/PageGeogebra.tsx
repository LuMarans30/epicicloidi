import { flexColumnStyle } from "@/app/components/CustomStyles";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";

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

export const PageGeogebra = ({ title, description, instructions, url }: PageGeogebraProps) => {

    return (
        <Box sx={containerStyle}>
            <Typography
                variant="h3"
                noWrap
                color={"red"}
                component="div"
                textTransform={"none"}
                sx={{ fontWeight: '400' }}
            >
                {title}
            </Typography>
            {
                description &&
                <Typography
                    variant="subtitle1"
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
                            <ListItem sx={{ display: 'list-item' }} key={index}>{item}</ListItem>
                        )
                    })
                }
            </List>
            <Divider />
            {
                url &&
                <iframe src={url} width="800" height="600" allowFullScreen style={{ border: 'none', borderRadius: 4 }}></iframe>
                /*<iframe
                    title={title as string}
                    src={url as string}
                    width="1200px"
                    height="400px"
                    style={{ border: 'none' }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />*/
            }
        </Box >
    )
}

export default PageGeogebra