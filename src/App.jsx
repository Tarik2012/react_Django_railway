import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Producto from './components/Producto';
import GlobalStyle from './components/GlobalStyle';
import Contador from './components/Contador'; // Verifica el nombre del archivo
import EjemploConValue from './components/EjemploConValue';
import TodoList from './components/TodoList';
import ComponenteUseEffect from './components/ComponenteUseEffect';
import MyComponent from './components/MyComponent';
import { AppProvider } from './context/AppContext';
import ComponentContext from './components/ComponentContext';
import Ui from './components/Ui';
import ThemeConfig from './context/ThemeConfig';
import Props from './components/Props';
import ComponentePadre from './components/ComponentePadre';
import { CartProvider } from "./context/CartContext";
import Carrito from './components/Carrito';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeConfig >
        <CartProvider>
          <AppProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Producto" element={<Producto />} />
                <Route path="/Contador" element={<Contador />} />
                <Route path="/EjemploConValue" element={<EjemploConValue />} />
                <Route path="/TodoList" element={<TodoList />} />
                <Route path="/ComponenteUseEffect" element={<ComponenteUseEffect />} />
                <Route path="/MyComponent" element={<MyComponent />} />
                <Route path="/ComponentContext" element={<ComponentContext />} />
                <Route path="/Ui" element={<Ui />} />
                <Route path="/Props" element={<Props name={'tarik'} profession={'Estuddiante'} age={37} />} />
                <Route path="/ComponentePadre" element={<ComponentePadre />} />
                <Route path="/Carrito" element={<Carrito />} />
              </Routes>
            </BrowserRouter>
          </AppProvider>
        </CartProvider>
      </ThemeConfig>
    </>
  );
}

export default App;
