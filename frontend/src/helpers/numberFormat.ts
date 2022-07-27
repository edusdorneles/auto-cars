export const priceFormat = (price: string) => {
    price = price.replace(".", "").replace(",", "").replace(/\D/g, "");
    const result = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(parseFloat(price) / 100);
    return price ? `R$ ${result}` : "R$ ";
};

export const yearFormat = (year: string) => {
    return year ? `${year.substring(0, 4)}` : "";
};
