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
            url="https://www.geogebra.org/material/iframe/id/yj7qfds2/width/1584/height/714/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false"
            instructions={instructions}
        />
    )
}

export default CicloidePuntoVariabile