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
        image: Images[1]
    },
    {
        label: "Cicloide con punto variabile",
        description: "Scopri come è fatta una cicloide e cosa succede se il punto che la descrive è all'interno o all'esterno del cerchio.",
        path: "/cicloide-con-punto-variabile",
        image: Images[2]
    },
    {
        label: "Penna geometrica",
        description: "Fai ruotare un pianeta e scopri la sua traiettoria.",
        path: "/penna-geometrica-suardi",
        image: Images[3]
    },
    {
        label: "Cerchio traslato",
        description: "Abbiamo riprodotto con GeoGebra come Suardi ha disegnato un cerchio traslato del raggio dell'epiciclo.",
        path: "/cerchio-traslato",
        image: Images[4]
    },
    {
        label: "Dimostrazione 3 punti allineati - Suardi",
        description: "Scopri come disegnare 3 punti allineati con la Penna Geometrica.",
        path: "/dimostrazione-punti-allineati",
        image: Images[5]
    },
    {
        label: "Spirale di Archimede - Suardi",
        description: "Abbiamo riprodotto con GeoGebra la spirale di Archimede con la macchina di Suardi.",
        path: "/spirale-archimedea",
        image: Images[6]
    },
    {
        label: "Epicicloide al variare del raggio",
        description: "Scopri come disegnare le cicloidi facendo variare il raggio del cerchio tangente.",
        path: "/epicicloide-al-variare-raggio",
        image: Images[7]
    },
    {
        label: "Epitrocoidi",
        description: "Scopri come disegnare le epitrocoidi.",
        path: "/epitrocoidi",
        image: Images[8]
    },
    {
        label: "Ipotrocoidi",
        description: "Scopri come disegnare le ipotrocoidi.",
        path: "/ipotrocoidi",
        image: Images[9]
    }
]

export const Routes = [
    HomeRoute,
    ...RoutesPages
]