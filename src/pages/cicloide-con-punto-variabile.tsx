import PageGeogebra from "./PageGeogebra"

export const CicloidePuntoVariabile = () => {

    let instructions = [
        "a per muovere il cerchio lungo l'asse X",
        "l per spostare il punto che genera la cicloide"
    ]

    return (
        <PageGeogebra
            title="Cicloide con punto variabile"
            description="Abbiamo riprodotto con GeoGebra la cicloide."
            path="/static/geogebra/cicloidePuntoVariabile.ggb"
            instructions={instructions}
        />
    )
}

export default CicloidePuntoVariabile