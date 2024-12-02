import React from "react";
import { useCart } from "../context/CartContext";
import Header from "./Header";
const Carrito = () => {
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();

    return (
        <div>
            <Header />
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - Cantidad: {item.cantidad} - Precio: {item.price}€
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div>
                    <p>Total: {totalPrice}€</p>
                    <button onClick={clearCart}>Vaciar carrito</button>
                </div>
            )}
        </div>
    );
};

export default Carrito;
