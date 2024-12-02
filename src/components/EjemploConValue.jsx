import React, { useState } from "react";
import Header from "./Header";

const EjemploConValue = () => {
    const [valor, setValor] = useState('')

    const escribir = (e) => {
        setValor(e.target.value)
    }

    return (
        <>
            <Header />
            <input
                value={valor}
                placeholder="Escribe tu texto"
                onChange={escribir}
            />
            <p>Haz escrito:{valor}</p>
        </>
    );
}

export default EjemploConValue;