import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin: 20px auto;
  max-width: 90%;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    padding: 16px;
    width: 95%;
  }
`;

const CountDisplay = styled.p`
  font-size: 2rem;
  margin: 16px 0;
  color: #333;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 8px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const Contador = () => {
    const [contador, setContador] = useState(0);

    const subir = () => {
        setContador(contador + 1);
    };

    const restablecer = () => {
        setContador(0);
    };

    return (
        <>
            <Header />
            <Container>
                <CountDisplay>{contador}</CountDisplay>
                <Button onClick={subir}>Incrementar</Button>
                <Button onClick={restablecer}>Restablecer</Button>
            </Container>
        </>
    );
};

export default Contador;
