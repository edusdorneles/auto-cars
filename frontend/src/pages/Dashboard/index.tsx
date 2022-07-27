import React, { useState } from "react";
import { Layout } from "components/Layout";
import { Table, TableHead, TableBody, TableRow, TableCell, Alert } from "@mui/material";
import { useDashboardContext } from "providers/DashboardContext";
import AddCar from "components/Modals/AddCar";
import DeleteCar from "components/Modals/DeleteCar";
import * as S from "./styles";

const Dashboard = () => {
    const { cars, page, setPage, rowsPerPage, setRowsPerPage } = useDashboardContext();
    const [modalOpenAdd, setModalOpenAdd] = useState(false);
    const [modalOpenDelete, setModalOpenDelete] = useState(false);

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

            {cars.length > 0 ? (
                <>
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
                                                onClick={() => setModalOpenDelete(true)}
                                            >
                                                Excluir
                                            </S.TableButton>
                                        </TableCell>

                                        <DeleteCar
                                            modalOpen={modalOpenDelete}
                                            setModalOpen={setModalOpenDelete}
                                            carId={car.id}
                                        />
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
                </>
            ) : (
                <Alert variant="outlined" severity="info">
                    Nenhum registro de carro encontrado.
                </Alert>
            )}

            <AddCar modalOpen={modalOpenAdd} setModalOpen={setModalOpenAdd} />
        </Layout>
    );
};

export default Dashboard;
