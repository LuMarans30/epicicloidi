import { Typography } from "@mui/material"
import PageGeogebra from "./PageGeogebra"

export const DimostrazioneTrePuntiAllineatiSuardi = () => {

    return (
        <PageGeogebra
            title="Dimostrazione 3 punti allineati - Suardi"
            description={
                <>
                    <Typography variant="body1" textAlign={"center"} component="div" textTransform={"none"}>
                        Per "alleviare il fastidio, che mi reca l’impossibilità di descrivere Poligoni
                        rettilinei",<br /> nell’articolo settimo Suardi fa vedere che comunque è possibile con la
                        penna geometrica descrivere 3 punti situati su una medesima linea retta,<br /> e
                        che comunque la penna riesce a descrivere una linea che si approssima alla
                        retta.<br /><br />
                    </Typography>
                    <Typography variant="h5" textAlign={"center"} component="div" textTransform={"none"}>
                        Ecco come Gianbattista Suardi riesce a disegnare 3 punti allineati con la sua Penna Geometrica.
                    </Typography>
                </>
            }
            path="/static/geogebra/costruzioneTrePuntiAllineati.ggb"
        />
    )
}

export default DimostrazioneTrePuntiAllineatiSuardi