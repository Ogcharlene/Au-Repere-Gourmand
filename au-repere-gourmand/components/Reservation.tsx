"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button";

//type formulaire
type FormData = {
    firstName: string;
    lastName: string;
    mail: string;
    hour: number;
    guest: string;
};



export function Reservation() {
    //on crée un objet du type FormData avec ses variables 'vide'
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        mail: "",
        hour: 0,
        guest: "",
    })

    //lorsqu'on appuis sur le bouton confirmer on affiche dans la console formDta
    const onSubmit = () => {
        console.log(formData)
    }

    return( 
        <div id="reservation" className="flex flex-col items-center mt-20">
        <Card>
            <CardContent className="p-10">
        <form>
            <label>
                Nom:
                {/* setFormData va set une nouvelle valeur -> les ... veut dire je recup toute la donnée*/}
                <Input type="name" placeholder="Nom" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required></Input>
            </label>
            <label>
                Prénom:
                <Input type="first name" placeholder="Prénom" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required></Input>
            </label>
            <label htmlFor="email">
                Email:
                <Input type="email" size={30} placeholder="mail@exemple.com" value={formData.mail} onChange={(e) => setFormData({...formData, mail: e.target.value})} required></Input>
            </label>
            <label>
                Date de la réservation:
                <Input type="date" value={"2024-12-11"} min={"2024-12-11"} max={"2040-12-11"}></Input>
            </label>
            <label>
                Nombre de personne:
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selectionnez"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel></SelectLabel>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                                <SelectItem value="7">7</SelectItem>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="9">9</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                        </SelectGroup>
                </SelectContent>
                </Select>
        
            </label>
            <Button onClick={onSubmit}>Confirmer</Button>
        </form>
        </CardContent>
        </Card>
        </div>
    )
}


