import { Typography } from "@mui/material"
import PageGeogebra from "./PageGeogebra"
import { flexRowStyle } from "@/app/components/CustomStyles"

export const CerchioTraslato = () => {

    let instructions = [
        "Clicca su avvia animazione per vedere come Suardi ha disegnato un cerchio traslato del raggio dell'epiciclo. Puoi anche modificare i raggi."
    ]

    return (
        <PageGeogebra
            title="Cerchio traslato del raggio dell'epiciclo - Suardi"
            description={
                <div>
                    <Typography style={flexRowStyle} variant="body1">
                        Prima di descriverla, Suardi fa un esempio di una "descrizione per punti" che lo ha ispirato nella costruzione della penna geometrica, in cui riesce a disegnare il cerchio del primo mobile traslato del raggio dell’epiciclo.
                        <br />
                        Imposta i tre parametri del primo mobile (cerchio passante per onp con centro in c) ed epiciclo (cerchio passante per a26 con centro in n) in questo modo:
                    </Typography >
                    <ul>
                        <li><Typography variant="body1">raggi qualsiasi;</Typography></li>
                        <li><Typography variant="body1">velocità angolari uguali;</Typography></li>
                        <li><Typography variant="body1">versi contrari</Typography></li>
                    </ul>
                    <div style={flexRowStyle}>Abbiamo riprodotto con GeoGebra come Suardi ha disegnato un cerchio traslato del raggio dell'epiciclo.</div>
                </div >
            }
            path="/static/geogebra/cerchioTraslatoDelRaggio.ggb"
            instructions={instructions}
        />
    )
}

export default CerchioTraslato