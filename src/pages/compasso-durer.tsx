import { Typography } from "@mui/material"
import PageGeogebra from "./PageGeogebra"

export const DürerCompass = () => {
    return (
        <PageGeogebra
            title="Compasso di Dürer"
            description={
                <>
                    <Typography variant="body1" textAlign={"center"} component="div" textTransform={"none"}>
                        La familiarità del matematico tedesco Albrecht Dürer con il modello tolemaico insieme alle sue conoscenze<br />
                        portarono a una prima comprensione delle curve chiamate epicicloidi.<br />
                        Nel suo libro del 1525 &quot;Underweysung der Messung mit dem Zyrckel und
                        Richtscheyt&quot;,<br /> Dürer presenta uno strumento di sua ideazione utilizzato per
                        disegnare epicicloidi e ipocicloidi.
                    </Typography>
                    <br />
                    <Typography variant="h5" textAlign={"center"} component="div" textTransform={"none"}>
                        Ecco come Albrecht Dürer riesce a disegnare una cardioide e tante altre curve con il suo Compasso.
                    </Typography>
                </>
            }
            path="/static/geogebra/compassoDürer.ggb"
        />
    )
}

export default DürerCompass