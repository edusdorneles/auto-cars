import React, { useState } from "react";
import { Modal, Typography, Button } from "@mui/material";
import * as S from "./styles";

type Props = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
};

export const AddCar = ({ modalOpen, setModalOpen }: Props) => {
    const [values, setValues] = useState({ carName: "", carColor: "", carYear: "", carPrice: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        console.log("Em desenvolvimento!");
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <S.ModalContainer>
                <Typography variant="h6" sx={{ pb: 1 }}>
                    Adicionar carro
                </Typography>

                <S.ModalForm onSubmit={handleSubmit}>
                    <S.ModalTextField
                        name="carName"
                        label="Nome:"
                        variant="outlined"
                        size="small"
                        value={values.carName}
                        onChange={handleChange}
                    />

                    <S.ModalTextField
                        name="carColor"
                        label="Cor:"
                        variant="outlined"
                        size="small"
                        value={values.carColor}
                        onChange={handleChange}
                    />

                    <S.ModalTextField
                        name="carYear"
                        label="Ano:"
                        variant="outlined"
                        size="small"
                        value={values.carYear}
                        onChange={handleChange}
                        type="number"
                    />

                    <S.ModalTextField
                        name="carPrice"
                        label="Preço:"
                        variant="outlined"
                        size="small"
                        value={values.carPrice}
                        onChange={handleChange}
                        type="number"
                    />

                    <S.ModalButtons>
                        <Button variant="contained" color="primary" size="small" type="submit" disabled={loading}>
                            Enviar
                        </Button>

                        <Button
                            variant="outlined"
                            color="primary"
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
