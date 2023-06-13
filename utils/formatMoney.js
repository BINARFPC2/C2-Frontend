export const getMoneyFormat = (number) => {
    return Number(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
