
// import React from "react";
// import ComponenteHijo from "./ComponenteHijo";
// import Header from "./Header";

// function ComponentePadre() {
//     const recibirMensaje = (mensaje) => {
//         alert(`Mensaje recibido: ${mensaje}`);
//     };

//     return (
//         <div>
//             <Header />
//             <h1>Componente Padre</h1>
//             <ComponenteHijo enviarAlPadre={recibirMensaje} enviarAlPadre2={recibirMensaje} />
//         </div>
//     );
// }

// export default ComponentePadre;

import React from "react";
import FuncionHijo from "./ComponenteHijo";

const ComponentePadre = () => {
    const FuncionSaludar = (mensaje) => {
        alert(`Hola soy el componente ${mensaje}`)
    }
    return (
        <>
            <h2>saluda desde padre </h2>
            <FuncionHijo ComponenteHijo1={FuncionSaludar} ComponenteHijo2={FuncionSaludar} />

        </>
    );
}

export default ComponentePadre;