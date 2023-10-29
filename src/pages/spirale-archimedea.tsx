import { Typography } from "@mui/material"
import PageGeogebra from "./PageGeogebra"

export const SpiraleArchimedeaPage = () => {

    let instructions = [
        "clicca su animazione per vedere come il Suardi ha riprodotto la spirale di Archimede"
    ]

    return (
        <PageGeogebra
            title="Spirale Archimedea - Suardi"
            description={
                <>
                    <Typography variant="h5" textAlign={"center"} component="div" textTransform={"none"}>
                        Anche le Spirali possono essere disegnate con la penna geometrica di Suardi costruita con cilindri e fili,<br /> essendo la risultante di un moto rettilineo e uno circolare.
                    </Typography>
                    <br />
                    <Typography variant="h5" textAlign={"center"} component="div" textTransform={"none"}>
                        Abbiamo riprodotto con GeoGebra la spirale di Archimede con la macchina di Suardi.
                    </Typography>
                </>
            }
            path="/static/geogebra/spiraleArchimedeaSuardi.ggb"
            instructions={instructions}
        />
    )
}

export default SpiraleArchimedeaPage