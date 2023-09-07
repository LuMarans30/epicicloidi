import PageGeogebra from "./PageGeogebra"

export const PennaGeometricaSuardi = () => {

    let instructions = [
        "n per definire il rapporto tra la velocità di rotazione della penna rispetto a C e il moto di rivoluzione di C rispetto a O."
    ]

    return (
        <PageGeogebra
            title="Penna geometrica di Suardi"
            description="Abbiamo riprodotto con GeoGebra la penna geometrica del Suardi in grado di riprodurre il moto Tolemaico dei pianeti."
            path="/static/geogebra/pennaGeometrica.ggb"
            instructions={instructions}
        />
    )
}

export default PennaGeometricaSuardi