import { useSearchParams } from "next/navigation";

export const getMoneyFormat = (number) => {
    return Number(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getToken = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        return token;
    }
}

export const getCode = (value) => {
    let even = [];
    for (var i = 0; i < value.length; i++) {
        i % 2 === 0 && even.push(value[i])
    }
    return even.join("")
}