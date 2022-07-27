import API from "./API";
import { priceFormat } from "helpers/numberFormat";

export const addCar = async (car: Car) => {
    return await API.post("/cars", {
        ...car,
        price: priceFormat(car.price)
    });
};
