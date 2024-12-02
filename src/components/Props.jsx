import React from "react";
import Header from "./Header";

const Props = ({ name, profession, age }) => {
    return (
        <>
            <Header />
            <h2>Nombre : {name}</h2>
            <h2>Profesioon : {profession}</h2>
            <h2>edad : {age}</h2>
        </>
    );
}
export default Props;