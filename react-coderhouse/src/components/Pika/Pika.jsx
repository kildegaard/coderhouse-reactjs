import React from "react";
import "./Pika.css";
import { useState } from "react";

export const Pika = () => {

    const [pokemon, setPokemon] = useState('')


    return (
        <h3 className="pika">Hi, I'm Pika!</h3>
    )
}