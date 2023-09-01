import PageGeogebra from "./PageGeogebra"

export const EpicicloideAlVariareDelRaggio = () => {

    let instructions = [
        "n per definire il rapporto tra il raggio della circonferenza più grande / raggio circonferenza più piccola",
        "r per modificare il raggio"
    ]

    return (
        <PageGeogebra
            title="Epicicloide al variare del raggio"
            description="Abbiamo riprodotto con GeoGebra l'epicicloide."
            path="/static/geogebra/iperbole.ggb"
            instructions={instructions}
        />
    )
}

export default EpicicloideAlVariareDelRaggio