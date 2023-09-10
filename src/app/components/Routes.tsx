import { Images } from "../../../public/static/images/Images"
import CardioidCanvas from "./CardioidCanvas"
import EpitrochoidCanvas from "./EpitrochoidCanvas"
import HypotrochoidCanvas from "./HypotrochoidCanvas"
import ArchimedesSpiralCanvas from "./ArchimedesSpiralCanvas"
import EpicycloidCanvas from "./EpicycloidCanvas"
import CycloidCanvas from "./CycloidCanvas"

export const HomeRoute = {
    label: "Home",
    description: "Scopri il magico mondo delle curve epicicloidali.",
    path: "/",
    geogebraUrl: "",
    image: Images[0],
    canvasElement: <CardioidCanvas />
}

export const RoutesPages = [
    {
        label: "Cardioide",
        description: "Scopri come disegnare una cardioide con questo algoritmo.",
        path: "/cardioide-con-algoritmo",
        image: Images[1],
        canvasElement:
            <CardioidCanvas
                animation={false}
                markCount={120}
                cuspCount={5}
                strokeColor={"red"}
            />
    },
    {
        label: "Cicloide",
        description: "Scopri come è fatta una cicloide e cosa succede se il punto che la descrive è all'interno o all'esterno del cerchio.",
        path: "/cicloide-con-punto-variabile",
        image: Images[2],
        canvasElement: <CycloidCanvas />,
    },
    {
        label: "Penna geometrica",
        description: "Fai ruotare un pianeta e scopri la sua traiettoria.",
        path: "/penna-geometrica-suardi",
        image: Images[3],
        canvasElement: undefined
    },
    {
        label: "Cerchio traslato",
        description: "Abbiamo riprodotto con GeoGebra come Suardi ha disegnato un cerchio traslato del raggio dell'epiciclo.",
        path: "/cerchio-traslato",
        image: Images[4],
        canvasElement: undefined
    },
    {
        label: "3 punti allineati",
        description: "Scopri come disegnare 3 punti allineati con la Penna Geometrica.",
        path: "/dimostrazione-punti-allineati",
        image: Images[5],
        canvasElement: undefined
    },
    {
        label: "Spirale di Archimede",
        description: "Abbiamo riprodotto con GeoGebra la spirale di Archimede con la macchina di Suardi.",
        path: "/spirale-archimedea",
        image: Images[6],
        canvasElement: <ArchimedesSpiralCanvas />
    },
    {
        label: "Epicicloide",
        description: "Scopri come disegnare le epicicloidi facendo variare il raggio del cerchio tangente.",
        path: "/epicicloide-al-variare-raggio",
        image: Images[7],
        canvasElement: <EpicycloidCanvas />
    },
    {
        label: "Epitrocoidi",
        description: "Scopri come disegnare le epitrocoidi.",
        path: "/epitrocoidi",
        image: Images[8],
        canvasElement: <EpitrochoidCanvas />
    },
    {
        label: "Ipotrocoidi",
        description: "Scopri come disegnare le ipotrocoidi.",
        path: "/ipotrocoidi",
        image: Images[9],
        canvasElement: <HypotrochoidCanvas />
    },
]

export const Routes = [
    HomeRoute,
    ...RoutesPages
]