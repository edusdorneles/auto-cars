import React, { useState } from "react";
import { Modal, Typography, Button } from "@mui/material";
import { priceFormat, yearFormat } from "helpers/numberFormat";
import { addCar } from "services/CarService";
import * as S from "./styles";

type Props = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    getCars: () => Promise<void>;
};

export const AddCar = ({ modalOpen, setModalOpen, getCars }: Props) => {
    const [values, setValues] = useState<Car>({ name: "", color: "", year: "", price: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetValuesAndCloseModal = () => {
        setModalOpen(false);
        setValues({ name: "", color: "", year: "", price: "" });
        setError("");
        setSuccess("");
    };

    const getCarsAndCallReset = async () => {
        await getCars();

        setTimeout(() => {
            resetValuesAndCloseModal();
        }, 1000);
    };

    const hasError = () => {
        if (!values.name) {
            setError("Name is required.");
            return true;
        }

        if (!values.color) {
            setError("Color is required.");
            return true;
        }

        if (!values.year) {
            setError("Year is required.");
            return true;
        }

        if (values.year.length < 4) {
            setError("Year must be 4 digits.");
            return true;
        }

        if (!values.price) {
            setError("Price is required.");
            return true;
        }

        setError("");
        return false;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        if (!hasError()) {
            const response = await addCar(values);

            if (response.status === 200) {
                setSuccess("Carro adicionado com sucesso.");
            } else {
                setError("Ocorreu algum erro.");
            }

            getCarsAndCallReset();
        }
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
                        name="name"
                        label="Nome:"
                        variant="outlined"
                        size="small"
                        value={values.name}
                        onChange={handleChange}
                    />

                    <S.ModalTextField
                        name="color"
                        label="Cor:"
                        variant="outlined"
                        size="small"
                        value={values.color}
                        onChange={handleChange}
                    />

                    <S.ModalTextField
                        name="year"
                        label="Ano:"
                        variant="outlined"
                        size="small"
                        value={yearFormat(values.year)}
                        onChange={handleChange}
                        type="number"
                    />

                    <S.ModalTextField
                        name="price"
                        label="Preço:"
                        variant="outlined"
                        size="small"
                        value={priceFormat(values.price)}
                        onChange={handleChange}
                    />

                    <S.ModalAlerts>
                        {error && (
                            <Typography variant="body2" color="error">
                                {error}
                            </Typography>
                        )}

                        {success && (
                            <Typography variant="body2" color="success.main">
                                {success}
                            </Typography>
                        )}
                    </S.ModalAlerts>

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
