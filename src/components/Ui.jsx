import React, { useState, useEffect } from 'react';
import { Pagination, Stack, Typography, Card, CardContent } from '@mui/material';
import Header from './Header';

const data = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
    { id: 4, name: 'Producto 4', price: 25 },
    { id: 5, name: 'Producto 5', price: 30 },
    { id: 6, name: 'Producto 6', price: 35 },
    { id: 7, name: 'Producto 7', price: 40 },
    { id: 8, name: 'Producto 8', price: 45 },
    { id: 9, name: 'Producto 9', price: 50 },
    { id: 10, name: 'Producto 10', price: 55 },
    { id: 11, name: 'Producto 11', price: 60 },
    { id: 12, name: 'Producto 12', price: 65 },
]; // Datos de ejemplo

const ITEMS_PER_PAGE = 4; // Número de elementos por página

const PaginacionEjemplo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);

    useEffect(() => {
        // Calcular los elementos para la página actual
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setPaginatedData(data.slice(startIndex, endIndex));
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>

            <div style={{ padding: '20px', margin: '30px' }}>
                <Header />
                <Typography variant="h4" gutterBottom>
                    Lista de Productos
                </Typography>
                <Stack spacing={2}>
                    {paginatedData.map((item) => (
                        <Card key={item.id} variant="outlined">
                            <CardContent>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body2">Precio: {item.price}€</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
                <Stack spacing={2} direction="row" justifyContent="center" mt={4}>
                    <Pagination
                        count={Math.ceil(data.length / ITEMS_PER_PAGE)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </div >
        </>
    );
};

export default PaginacionEjemplo;
