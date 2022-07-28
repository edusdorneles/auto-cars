import API from "./API";
import { priceFormat } from "helpers/numberFormat";

export const getCars = async () => {
    return await API.get(`/cars`, {
        headers: {
            Authorization: `${sessionStorage.getItem("@auto-cars:token")}`
        }
    });
};

export const addCar = async (car: Car) => {
    return await API.post(
        "/cars",
        {
            ...car,
            price: priceFormat(car.price)
        },
        {
            headers: {
                Authorization: `${sessionStorage.getItem("@auto-cars:token")}`
            }
        }
    );
};

export const deleteCar = async (id?: string) => {
    return await API.delete(`/cars/${id}`, {
        headers: {
            Authorization: `${sessionStorage.getItem("@auto-cars:token")}`
        }
    });
};
