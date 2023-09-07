import PageGeogebra from "./PageGeogebra"

export const SpiraleArchimedeaPage = () => {

    let instructions = [
        "clicca su animazione per vedere come il Suardi ha riprodotto la spirale di Archimede"
    ]

    return (
        <PageGeogebra
            title="Spirale Archimedea - Suardi"
            description="Abbiamo riprodotto con GeoGebra la spirale di Archimede con la macchina di Suardi."
            path="/static/geogebra/spiraleArchimedeaSuardi.ggb"
            instructions={instructions}
        />
    )
}

export default SpiraleArchimedeaPage