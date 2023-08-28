import { Images } from "../../../public/static/images/Images"

export const HomeRoute = {
    label: "Home",
    description: "Scopri il magico mondo delle curve epicicloidali.",
    path: "/",
    geogebraUrl: "",
    image: Images[0]
}

export const RoutesPages = [
    {
        label: "Cardiode con algoritmo",
        description: "Scopri come disegnare una epicicloide con questo algoritmo.",
        path: "/cardioide-con-algoritmo",
        geogebraUrl: "https://www.geogebra.org/material/iframe/id/yj7qfds2/width/1584/height/714/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false",
        image: Images[1]
    },
    {
        label: "Cicloide con punto variabile",
        description: "Scopri come è fatta una cicloide e cosa succede se il punto che la descrive è all'interno o all'esterno del cerchio.",
        path: "/cicloide-con-punto-variabile",
        geogebraUrl: "",
        image: Images[2]
    },
    {
        label: "Epicicloide al variare del raggio",
        description: "Scopri come disegnare le cicloidi facendo variare il raggio del cerchio tangente.",
        path: "/epicicloide-al-variare-raggio",
        geogebraUrl: "",
        image: Images[3]
    },
    {
        label: "Moto tolemaico",
        description: "Fai ruotare un pianeta e scopri la sua traiettoria.",
        path: "/epicicloide-con-moto-tolemaico",
        geogebraUrl: "",
        image: Images[4]
    },
    {
        label: "Dimostrazione 3 punti allineati - Suardi",
        description: "Scopri come disegnare 3 punti allineati con la Penna Geometrica.",
        path: "/dimostrazione-punti-allineati",
        geogebraUrl: "",
        image: Images[5]
    }
]

export const Routes = [
    HomeRoute,
    ...RoutesPages
]