import { createContext, useState } from "react";  // Elimina `Children`, ya que no es necesario

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState('mi valor inicial'); // Asegúrate de usar "valor inicial" correctamente

    const updateState = (newValue) => {
        setState(newValue);
    };

    return (
        <AppContext.Provider value={{ state, updateState }}>
            {children}
        </AppContext.Provider>
    );
};
