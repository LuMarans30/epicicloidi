import PageGeogebra from "./PageGeogebra"

export const EpicicloideAlVariareDelRaggio = () => {

    let instructions = [
        "n per definire il rapporto tra la velocità di rotazione di P rispetto a C e il moto di rivoluzione di C rispetto a O."
    ]

    return (
        <PageGeogebra
            title="Epicicloide con moto tolemaico"
            description="Abbiamo riprodotto con GeoGebra il moto Tolemaico dei pianeti."
            path="/static/geogebra/iperbole.ggb"
            instructions={instructions}
        />
    )
}

export default EpicicloideAlVariareDelRaggio