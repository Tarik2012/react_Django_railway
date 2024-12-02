// // // Hijo.js
// // import React from "react";

// // function ComponenteHijo({ enviarAlPadre, enviarAlPadre2 }) {
// //     return (
// //         <div>
// //             <h2>Componente Hijo</h2>
// //             <button onClick={() => enviarAlPadre("Hola, soy el Hijo!")}>
// //                 Enviar mensaje
// //             </button>
// //             <button onClick={() => enviarAlPadre2("Hola, soy el Hijo2!")}>
// //                 Enviar mensaje 2
// //             </button>
// //         </div>
// //     );
// // }

// export default ComponenteHijo;

import React from "react";
import Header from "./Header";

const FuncionHijo = ({ ComponenteHijo1, ComponenteHijo2 }) => {
    return (
        <>
            <Header />
            <button onClick={() => ComponenteHijo1("Hola soy el hijo 1")}>manda al padre 1</button>
            <button onClick={() => ComponenteHijo2("Hola soy el hijo 2")}>manda al padre 2</button>
        </>
    );
}

export default FuncionHijo;
