import React, { useState, useEffect } from "react";



const Const = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetechProduct = async () => {
            try {
                const response = fetch('la ruta de la api')
                if (response.ok) {
                    const data = await response.json();
                    setProductos(data)
                }
            } catch (error) {
                console.log('Error de la api', error)
            } finally {
                setLoading(false)
            }


        }
    })
    return (
        <>

        </>
    );
}

export default Const;