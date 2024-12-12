"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const Reservation: React.FC = () => {

    //Type (tsx) pour l'état (state) de base:
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [guests, setGuests] = useState<string>("");
    const [confirmationMessage, setConfirmationMessage] = useState<string>("");


    //changement des inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { //évênement qui change la valeur d'un input html
        const {name, value} = e.target; //name = attribut de l'input HTML -> name="firsName"

        if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "time") {
            setTime(value);
        }else if (name === "date") {
            setDate(value);
        } else if (name === "guests") {
            setGuests(value);
        }
    };

    //soumission du form (submit)
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log("firstName: ", firstName);
        console.log("lastName: ", lastName);
        console.log("email: ", email);
        console.log("time: ", time);
        console.log("date: ", date);
        console.log("guests: ", guests);

         const message = `Merci pour votre réservation, ${firstName} ! Nous vous attendons le ${date}. Au plaisir de vous régaler !`;

        if (firstName != "" && lastName != "" && email != "" && time != "" && date != "" && guests != ""){
            setConfirmationMessage(message);
        }

       

        

    };




    return(
        <div id="Reservation" className="Reservation flex flex-col items-center mt-20">
            <Card>
                <CardContent className="p-10">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Votre prénom:</label>
                            <Input type="text" name="firstName" value={firstName} onChange={handleChange} required></Input>
                        </div>
                        <div>
                            <label>Votre nom:</label>
                            <Input type="text" name="lastName" value={lastName} onChange={handleChange} required></Input>
                        </div>
                        <div>
                            <label>Votre E-mail:</label>
                            <Input type="email" name="email" value={email} onChange={handleChange} required></Input>
                        </div>
                        <div>
                            <label>Heure de réservation:</label>
                            <Input type="time" name="time" value={time} onChange={handleChange} required></Input>
                        </div>
                        <div>
                            <label>Date de réservation:</label>
                            <Input type="date" name="date" value={date} onChange={handleChange} required></Input>
                        </div>
                        <div>
                            <label>Nombre de convive:</label>
                            <Input type="number" name="guests" min="1" max="10" value={guests} onChange={handleChange} required></Input>
                        </div>
                        <Button onClick={handleSubmit} className="mt-5" type="submit"> Envoyer </Button>
                    </form>
                </CardContent>
            </Card>
                
                {confirmationMessage && ( 
                    <div className="mt-5">
                        <p>{confirmationMessage}</p>
                    </div>
                )}
            
        </div>
    );
};

export default Reservation;


