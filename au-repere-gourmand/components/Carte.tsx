import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Carte (){
    return( 

        <div id="CarouselMenu" className="flex mt-20 justify-center">
        <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {/* menu 1 */}
          <CarouselItem> 
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="/Menu.png" alt="Menu à la carte" />
                </CardContent>
              </Card>
          </CarouselItem>
          {/* Menu 2 */}
          <CarouselItem >
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src="/Menu_Sandwich.png" alt="Menu sandwich" />
                </CardContent>
            </Card>
          </CarouselItem>
          {/* Menu 3  */}
          <CarouselItem>
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src="/Desserts.png" alt="Menu assiette et desserts" />
                </CardContent>
            </Card>
          </CarouselItem>
          {/* Menu boisson */}
          <CarouselItem>
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src="/Boissons.png" alt="carte Boissons" />
                </CardContent>
            </Card>
          </CarouselItem>
          {/* Menu boissons soft */}
          <CarouselItem>
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src="Boissons_Soft.png" alt="Carte des soft" />
                </CardContent>
            </Card>
          </CarouselItem>
          </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    )
}