import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Estiliza el NavLink usando styled-components
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  margin: 0 8px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  display: inline-block;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    color: white;
    background-color: #007bff;
  }
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
    margin: 4px 0;
    display: block; /* Cambia a bloque para ocupar toda la línea */
    text-align: center;
  }
`;

// Contenedor de los enlaces de navegación
const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start; /* Alinea los elementos al inicio horizontalmente */
  align-items: flex-start; /* Asegura que los elementos se alineen al inicio verticalmente */
  padding: 16px;
  width: 100%; /* Asegura que el contenedor ocupe el ancho completo */
  position: absolute; /* Posiciona el contenedor en la parte superior */
  top: 0; /* Se asegura de que esté en la parte superior */
  left: 0; /* Alinea el contenedor al lado izquierdo */
  box-sizing: border-box; /* Asegura que el padding no desborde el ancho */

  @media (max-width: 768px) {
    flex-direction: column; /* Cambia la dirección a columna en pantallas pequeñas */
    align-items: flex-start; /* Mantén alineado al principio */
  }
`;
const Header = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/Producto">
        Productos
      </StyledNavLink>
      <StyledNavLink to="/Contador">
        Contador
      </StyledNavLink>
      <StyledNavLink to="/EjemploConValue">
        Ejemplo de valor
      </StyledNavLink>
      <StyledNavLink to="/TodoList">
        Lista de tareas
      </StyledNavLink>
      <StyledNavLink to="/ComponenteUseEffect">
        useEffect
      </StyledNavLink>
      {/* <StyledNavLink to="/MyComponent">
        My component
      </StyledNavLink> */}
      <StyledNavLink to="/ComponentContext">
        Component Context
      </StyledNavLink>
      <StyledNavLink to="/Ui">
        Ui
      </StyledNavLink>
      <StyledNavLink to="/Props">
        Props
      </StyledNavLink>
      <StyledNavLink to="/ComponentePadre">
        Componente Padre
      </StyledNavLink>
      <StyledNavLink to="/Carrito">
        Carrito
      </StyledNavLink>
    </NavContainer>
  );
};
export default Header;
