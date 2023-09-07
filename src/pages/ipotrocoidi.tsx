import PageGeogebra from "./PageGeogebra"


export const Ipotrocoidi = () => {

    const instructions = [
        "Con r1 e r2 puoi impostare i raggi delle due circonferenze",
        "Con d imposti la distanza di P da C"
    ]

    return (
        <PageGeogebra
            title="Ipotrocoidi"
            description="Divertiti a riprodurre tutte le possibili ipotrocoidi."
            path="/static/geogebra/ipotrocoidi.ggb"
            instructions={instructions}
        />
    )
}

export default Ipotrocoidi