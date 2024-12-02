import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Card, CardContent, CardHeader, Button, Typography } from "@mui/material"; // Importar Button
import { useCart } from '../context/CartContext'

const Producto = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Usar el custom hook para obtener `addToCart`
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/productos/");
                if (response.ok) {
                    const data = await response.json();
                    setProductos(data);
                }
            } catch {
                console.error("Error al obtener los productos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <Header />
            <h1>Lista de Productos</h1>
            {productos.map((producto) => (
                <Card key={producto.id} style={{ marginBottom: "1rem" }}>
                    <CardHeader title={producto.name} />
                    <CardContent>
                        <Typography variant="body2">Precio: {producto.price}€</Typography>
                        {/* Botón para agregar al carrito */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => addToCart(producto)} // Usar `addToCart` desde el custom hook
                        >
                            Agregar al carrito
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Producto;
