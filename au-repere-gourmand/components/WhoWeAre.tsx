import React from "react";
import { CarouselCard } from "./CarouselCard";

export const WhoWeAre = () => {
    return(
        <div>
            <div className="flex flex-col gap-4 mt-10 text-center">
            <h1 className="text-4xl">Qui sommes nous?</h1>
            <h2>Au Repère Gourmand</h2>
            <h3>Bienvenue chez Au Repère Gourmand, <br />votre friterie familiale où le goût et la tradition se rencontrent <br /> pour vous offrir une expérience authentique et conviviale.</h3>
            <p>Depuis nos débuts, Au Repère Gourmand est animé par une seule mission : <br />partager notre passion pour les frites belges faites maison, préparées avec soin et amour. <br />Chez nous, chaque portion de frites est un véritable hommage à la tradition belge, <br />croustillantes à l’extérieur, fondantes à l’intérieur, <br />et toujours accompagnées d’une large sélection de sauces pour satisfaire tous les gourmets.</p>
            <img className="h-96 w-auto mx-auto" src="/oget.png" alt="image propriétaire" />
            </div>
            <div className="flex justify-center mt-10">
                <CarouselCard />
            </div>
            <div className="flex flex-wrap">
                <img className="h-96 w-auto mx-auto" src="Dessert.png" alt="Dessert photo" />
                <img className="h-96 w-auto mx-auto" src="/Friteuse.png" alt="Photo friteuse" />
                <img className="h-96 w-auto mx-auto" src="Restau.png" alt="Photo intérieur restaurant" />
            </div>
            <p className="text-lg flex flex-col gap-4 mt-10 text-center">Au plaisir de vous régaler, <br />L’équipe familiale d’Au Repère Gourmand.</p>
        </div>
    );
}