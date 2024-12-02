import React, { useState } from "react";
import Header from "./Header";

const MyComponent = () => {
    const [contador, setContado] = useState(0)

    const handleContador = () => {
        setContado(contador + 2)
    }
    const resetContador = () => {
        setContado(0)
    }
    return (
        <>
            <Header />
            <button
                onClick={handleContador}
            >
                pisame
            </button>
            <button
                onClick={resetContador}
            >
                Resetear
            </button>
            <p>{contador}</p>
        </>
    );
}
export default MyComponent;