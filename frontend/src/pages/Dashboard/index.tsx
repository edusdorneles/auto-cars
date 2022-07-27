import React, { useState, useEffect } from "react";
import { Layout } from "components/Layout";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { AddCar } from "components/Modals/AddCar";
import API from "services/API";
import * as S from "./styles";

const Dashboard = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Modals
    const [modalOpenAdd, setModalOpenAdd] = useState(false);

    const getCars = async () => {
        const response = await API.get("/cars");
        setCars(response.data);
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <Layout>
            <S.AddButton
                fullWidth
                size="small"
                variant="outlined"
                color="success"
                onClick={() => setModalOpenAdd(true)}
            >
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
                            <TableRow key={car.id}>
                                <TableCell>{car.name}</TableCell>
                                <TableCell>{car.color}</TableCell>
                                <TableCell>{car.year}</TableCell>
                                <TableCell>{car.price}</TableCell>
                                <TableCell>
                                    <S.TableButton
                                        size="small"
                                        variant="outlined"
                                        color="info"
                                        onClick={() => setModalOpenAdd(true)}
                                    >
                                        Editar
                                    </S.TableButton>

                                    <S.TableButton
                                        size="small"
                                        variant="outlined"
                                        color="error"
                                        onClick={() => setModalOpenAdd(true)}
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

            <AddCar modalOpen={modalOpenAdd} setModalOpen={setModalOpenAdd} getCars={getCars} />
        </Layout>
    );
};

export default Dashboard;
