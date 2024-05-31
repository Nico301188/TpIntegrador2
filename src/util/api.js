import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://65f8d55edf15145246101010.mockapi.io/api/"
    // baseURL: "https://66044fc62393662c31d126a2.mockapi.io/"
     //"mongodb+srv://nico301188:EduIt2024@products.kjpndol.mongodb.net/products"
     baseURL: process.env.REACT_APP_BASE_URL_API
})

export const getProducts = async () => {
    // const resp = await axiosInstance.get("/products")
    const resp = await axiosInstance.get("/products")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 

// export const postProducts = async body => {
//     const resp = await axiosInstance.post("/products", body)
//     return resp.data;
// } 
export const postProducts = async body => {
    console.log(body)
    const formData = new FormData()
    Object.entries(body).forEach(([key, value]) => {
        formData.append(key, value)
    })
    const resp = await axiosInstance.post("/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    return resp.data;
}

export const postCart = async body => {
    const resp = await axiosInstance.post("/cart", {items: body})
    return resp.data;
} 

export const editCart = async (id, body) => {
    const resp = await axiosInstance.put(`/cart/edit/${id}`, {items: body})
    return resp.data;
} 

export const getCart = async id => {
    const resp = await axiosInstance.get(`/cart/get/${id}`)
    return resp.data;
} 
