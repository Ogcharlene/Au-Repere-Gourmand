import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselCard() {
    return(
        <Carousel id="CarouselWho" className="w-full max-w-sm">
      <CarouselContent>
        {/* Carte 1 */}
          <CarouselItem> 
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div><h3 className="text-xl mb-5">Une histoire de famille</h3> 
          Nous sommes une petite entreprise familiale, <br />
          portée par des valeurs simples mais essentielles : <br />
          qualité, convivialité, et générosité. <br />
          Chez Au Repère Gourmand, chaque client est accueilli comme un ami, <br />
          et chaque repas est préparé avec la même attention que si nous le faisions pour notre propre famille.</div>
                </CardContent>
              </Card>
          </CarouselItem>
          {/* Carte 2  */}
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div> <h3 className="text-xl mb-5">Bien plus que des frites</h3>Chez Au Repère Gourmand, nous proposons également une variété de snacks, <br />
                burgers, et spécialités locales pour régaler les petits comme les grands. <br />
                Que ce soit pour une pause rapide ou un moment gourmand à partager, <br />
                il y a toujours quelque chose pour vous.</div>
              </CardContent>
            </Card>
          </CarouselItem>
          {/* Carte 3  */}
          <CarouselItem >
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div><h3 className="text-xl mb-5">Pourquoi choisir Au Repère Gourmand ?</h3>
                <ul>
                  <li>• Authenticité : Des frites maison, préparées selon la méthode belge traditionnelle.</li>
                  <li>• Accueil chaleureux : Une ambiance familiale où chacun se sent comme chez soi.</li>
                  <li>• Produits de qualité : Nous privilégions des ingrédients frais, locaux et savoureux.</li>
                  <li>• Passion pour la gourmandise : Notre nom dit tout ! Nous sommes votre repère pour les plaisirs simples et délicieux.</li>
                </ul>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    )
}