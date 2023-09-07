import PageGeogebra from "./PageGeogebra"


export const Epitrocoidi = () => {

    const instructions = [
        "Con r1 e r2 puoi impostare i raggi delle due circonferenze",
        "Con d imposti la distanza di P da C"
    ]

    return (
        <PageGeogebra
            title="Epitrocoidi"
            description="Divertiti a riprodurre tutte le possibili epitrocoidi."
            path="/static/geogebra/epitrocoidi.ggb"
            instructions={instructions}
        />
    )
}

export default Epitrocoidi