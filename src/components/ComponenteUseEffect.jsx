import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  width: 90%;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 16px;
    max-width: 95%;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  color: #333;
  text-align: center;
  font-size: 1.8rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

const ComponenteUseEffect = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Header />
            <Container>
                <Title>Aquí puedes cambiar el Título de la página</Title>
                <Input
                    type="text"
                    value={title}
                    placeholder="Escribe tu título"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Container>
        </>
    );
};

export default ComponenteUseEffect;
