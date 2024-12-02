import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 15px;
    margin: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const TaskList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 500px;
`;

const TaskItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const TaskText = styled.span`
    margin-right: 10px;
    word-break: break-word;
`;

const TodoList = () => {
    const [tareas, setTareas] = useState([]);
    const [newTarea, setNewTarea] = useState("");

    const handleAddTarea = () => {
        if (newTarea.trim()) {
            setTareas([...tareas, { text: newTarea, completed: false, priority: 'alta' }]);
            setNewTarea('');
        }
    };

    const handleInputChange = (e) => {
        setNewTarea(e.target.value);
    };

    const handleDeleteTarea = (indexToDelete) => {
        setTareas(tareas.filter((_, index) => index !== indexToDelete));
    };

    return (
        <Container>
            <Header />
            <Input
                type="text"
                value={newTarea}
                placeholder="Escribe tarea"
                onChange={handleInputChange}
            />
            <Button onClick={handleAddTarea}>Agregar</Button>
            <TaskList>
                {tareas.map((tarea, index) => (
                    <TaskItem key={index}>
                        <TaskText>{tarea.text}</TaskText>
                        <TaskText>{tarea.completed ? "Completada" : "Pendiente"}</TaskText>
                        <TaskText>{tarea.priority}</TaskText>
                        <Button onClick={() => handleDeleteTarea(index)}>Eliminar tarea</Button>
                    </TaskItem>
                ))}
            </TaskList>
        </Container>
    );
};

export default TodoList;
