import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Header from './Header';

const ComponentContext = () => {
    const { state, updateState } = useContext(AppContext);  // Desestructuración correcta

    return (
        <>
            <Header />
            <p>{state}</p>
        </>
    );
};

export default ComponentContext;

