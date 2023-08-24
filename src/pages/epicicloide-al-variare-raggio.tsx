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
            url="https://www.geogebra.org/material/iframe/id/yj7qfds2/width/1584/height/714/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false"
            instructions={instructions}
        />
    )
}

export default EpicicloideAlVariareDelRaggio