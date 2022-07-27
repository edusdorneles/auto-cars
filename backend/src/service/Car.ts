import carFakeData from "../model/CarFakeData";

// Types
import Car from "../@types/Car";

export const queryListCars = (): Car[] => {
    return carFakeData;
};

export const queryFindCarById = (id: string): Car => {
    const car = carFakeData.find((car) => car.id === id);

    if (!car) {
        throw new Error("Carro não encontrado.");
    }

    return car;
};

export const queryAddCar = (car: Car): Car => {
    carFakeData.push(car);
    return car;
};

export const queryUpdateCar = (car: Car): Car => {
    const carIndex: number = carFakeData.findIndex((c: Car) => c.id === car.id);

    if (carIndex === -1) {
        throw new Error("Carro não encontrado.");
    }

    carFakeData[carIndex] = car;
    return car;
};

export const queryDeleteCar = (id: string): Car => {
    const carIndex: number = carFakeData.findIndex((c: Car) => c.id === id);

    if (carIndex === -1) {
        throw new Error("Carro não encontrado.");
    }

    const car = carFakeData[carIndex];

    carFakeData.splice(carIndex, 1);
    return car;
};
