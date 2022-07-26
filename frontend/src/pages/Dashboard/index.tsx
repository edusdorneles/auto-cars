import React, { useState, useEffect } from "react";
import { Layout } from "components/Layout";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";
import API from "services/API";
import * as S from "./styles";

const Dashboard = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const getCars = async () => {
        const response = await API.get("/cars");
        setCars(response.data);
    };

    const openEditModal = (carId: string) => {
        console.log(carId);
    };

    const openDeleteModal = (carId: string) => {
        console.log(carId);
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <Layout>
            <S.AddButton size="small" variant="outlined" color="success" fullWidth>
                Adicionar carro
            </S.AddButton>

            <S.TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Carro</TableCell>
                            <TableCell>Cor</TableCell>
                            <TableCell>Ano</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {cars.map((car: Car) => (
                            <TableRow>
                                <TableCell>{car.name}</TableCell>
                                <TableCell>{car.color}</TableCell>
                                <TableCell>{car.year}</TableCell>
                                <TableCell>{car.price}</TableCell>
                                <TableCell>
                                    <S.TableButton
                                        size="small"
                                        variant="outlined"
                                        color="info"
                                        onClick={() => openEditModal(car.id)}
                                    >
                                        Editar
                                    </S.TableButton>

                                    <S.TableButton
                                        size="small"
                                        variant="outlined"
                                        color="error"
                                        onClick={() => openDeleteModal(car.id)}
                                    >
                                        Excluir
                                    </S.TableButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </S.TableContainer>

            <S.TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                count={10}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage="Linhas por página"
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
                onPageChange={(e, page) => setPage(page)}
                onRowsPerPageChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRowsPerPage(parseInt(e.target.value));
                    setPage(0);
                }}
            />
        </Layout>
    );
};

export default Dashboard;
