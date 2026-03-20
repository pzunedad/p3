import { Products, Product } from "@/types/products";
import { api } from "./axios";

export const getProducts = async () => {
    const response = await api.get<Products>(`/products`);
    return response.data;
}

export const getProductById = async (id: number) => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
};
