import PageGeogebra from "./PageGeogebra"

export const CerchioTraslato = () => {

    let instructions = [
        "clicca su avvia animazione per vedere come Suardi ha disegnato un cerchio traslato del raggio dell'epiciclo. Puoi anche modificare i raggi"
    ]

    return (
        <PageGeogebra
            title="Cerchio traslato del raggio dell'epiciclo - Suardi"
            description="Abbiamo riprodotto con GeoGebra come Suardi ha disegnato un cerchio traslato del raggio dell'epiciclo."
            path="/static/geogebra/cerchioTraslatoDelRaggio.ggb"
            instructions={instructions}
        />
    )
}

export default CerchioTraslato