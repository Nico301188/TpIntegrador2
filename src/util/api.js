import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://65f8d55edf15145246101010.mockapi.io/api/"
    baseURL: "https://66044fc62393662c31d126a2.mockapi.io/"
})

export const getProducts = async () => {
    // const resp = await axiosInstance.get("/products")
    const resp = await axiosInstance.get("/juegos")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/Contact", body)
    return resp.data;
} 

export const postProducts = async body => {
    const resp = await axiosInstance.post("/juegos", body)
    return resp.data;
} 