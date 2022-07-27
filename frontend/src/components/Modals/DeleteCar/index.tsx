import React, { useState } from "react";
import { Modal, Typography, Button } from "@mui/material";
import { useDashboardContext } from "providers/DashboardContext";
import { deleteCar } from "services/CarService";
import * as S from "./styles";

type Props = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    carId?: string;
};

const DeleteCar = ({ modalOpen, setModalOpen, carId }: Props) => {
    const { setAlert, getCars } = useDashboardContext();
    const [loading, setLoading] = useState(false);

    const getCarsAndCloseModal = async () => {
        setModalOpen(false);
        setAlert({ open: true, message: "Car deleted successfully", severity: "success" });
        await getCars();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        await deleteCar(carId);
        getCarsAndCloseModal();
        setLoading(false);
    };

    return (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <S.ModalContainer>
                <Typography variant="h6" sx={{ pb: 1 }}>
                    Deletar carro
                </Typography>

                <Typography variant="body2" sx={{ pb: 1 }}>
                    Você tem certeza que deseja deletar este carro?
                </Typography>

                <S.ModalForm onSubmit={handleSubmit}>
                    <S.ModalButtons>
                        <Button variant="contained" color="error" size="small" type="submit" disabled={loading}>
                            Deletar
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={() => setModalOpen(false)}
                            disabled={loading}
                        >
                            Cancelar
                        </Button>
                    </S.ModalButtons>
                </S.ModalForm>
            </S.ModalContainer>
        </Modal>
    );
};

export default DeleteCar;
