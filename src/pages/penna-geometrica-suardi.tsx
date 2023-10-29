import { Typography } from "@mui/material"
import PageGeogebra from "./PageGeogebra"

export const PennaGeometricaSuardi = () => {

    let instructions = [
        "n per definire il rapporto tra la velocità di rotazione della penna rispetto a C e il moto di rivoluzione di C rispetto al centro del cerchio fisso."
    ]

    return (
        <PageGeogebra
            title="Penna geometrica di Suardi"
            description={
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h5" component="div" textTransform={"none"}>
                        Il matematico italiano del Settecento Giambattista Suardi nel suo famoso trattato del 1752 intitolato <br />"Nuovi istromenti per la descrizione di diverse curve antiche e moderne...",<br /> nel capitolo nono descrisse uno strumento che chiamò "Penna
                        Geometrica" in grado di tracciare trocoidi.
                        <br /><br />Abbiamo riprodotto con GeoGebra la penna geometrica del Suardi in grado di riprodurre il moto Tolemaico dei pianeti.
                    </Typography>
                </div>
            }
            path="/static/geogebra/pennaGeometrica.ggb"
            instructions={instructions}
        />
    )
}

export default PennaGeometricaSuardi