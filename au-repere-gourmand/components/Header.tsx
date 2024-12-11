import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"

export const Header = () => {
    return (
      <header>
        <div className="h-full w-full">
            <img src="/AuRepereGourmandBan.png" alt="Bannière du site" className="w-full h-full object-cover" />
             <div className="text-center py-10 bg-stone-50 shadow-lg">
              <h1 className="text-3xl font-bold">Bienvenue dans votre restaurant : <br />
               Au Repère Gourmand !</h1>
            </div>
            <div className="w-full flex justify-center mt-4 shadow-lg rounded-lg p-6 bg-white border border-gray-200">
                <Menubar className="w-full flex justify-between">
                    <MenubarMenu>
                        <MenubarTrigger> <Button variant="outline"> <a href="#CarouselWho">Qui sommes nous ?</a></Button></MenubarTrigger>
                        <MenubarMenu>
                          <MenubarTrigger><Button variant="outline"> <a href="#CarouselMenu"> La carte </a></Button></MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger><Button variant="outline"> <a href="#reservation">Réserver une table</a></Button></MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger><Button variant="outline"> <a href=""> Nous contacter</a></Button></MenubarTrigger>
                        </MenubarMenu>

                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
      </header>  
    )
}