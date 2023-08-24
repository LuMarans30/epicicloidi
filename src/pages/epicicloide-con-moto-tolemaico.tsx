import PageGeogebra from "./PageGeogebra"

export const EpicicloideAlVariareDelRaggio = () => {

    let instructions = [
        "n per definire il rapporto tra la velocità di rotazione di P rispetto a C e il moto di rivoluzione di C rispetto a O."
    ]

    return (
        <PageGeogebra
            title="Epicicloide con moto tolemaico"
            description="Abbiamo riprodotto con GeoGebra il moto Tolemaico dei pianeti."
            url="https://www.geogebra.org/material/iframe/id/yj7qfds2/width/1584/height/714/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false"
            instructions={instructions}
        />
    )
}

export default EpicicloideAlVariareDelRaggio