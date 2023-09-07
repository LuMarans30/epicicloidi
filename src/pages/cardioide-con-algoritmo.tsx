import Link from "next/link"
import PageGeogebra from "./PageGeogebra"

export const CardioideAlgoritmo = () => {

    let instructions = [
        "n per dividere la circonferenza in 2^n parti.",
        "s per collegare il primo estremo che si muove di un passo e il secondo estremo che si muove di s passi."
    ]

    return (
        <PageGeogebra
            title="Cardioide con algoritmo"
            description="Abbiamo riprodotto con GeoGebra l'algoritmo per la costruzione della curva Cardioide"
            path="/static/geogebra/cardioideConAlgoritmo.ggb"
            instructions={instructions}
            externalResources={
                [
                    <Link key={1} href="/static/algoritmoCardiode.pdf" target="_blank" rel="noopener noreferrer">L&apos;Algoritmo della cardioide</Link>,
                    <Link key={2} href="/static/cardioideDisegnare.pdf" target="_blank" rel="noopener noreferrer">Disegna una cardioide</Link>
                ]
            }
        />
    )
}

export default CardioideAlgoritmo