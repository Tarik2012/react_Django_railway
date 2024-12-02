import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/imagenes/fondo2.webp'; // Asegúrate de ajustar la ruta a tu imagen

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif; /* Cambia la fuente si prefieres */
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover; /* Asegura que la imagen cubra toda la pantalla */
  }

  * {
    box-sizing: inherit; /* Asegura que todos los elementos usen el mismo box-sizing */
    margin: 0; /* Remueve márgenes por defecto */
    padding: 0; /* Remueve padding por defecto */
  }
`;

export default GlobalStyle;
