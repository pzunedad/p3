'use client';
import { Product } from "@/types/products";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductById } from "@/lib/api/products";
import ProductCard from "@/components/ProductCard";

const ProductInfo = () => {

    const {id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        getProductById(Number(id))
            .then((productData) => {
                if (productData) {
                    setProduct(productData);
                } else {
                    setError("Producto no encontrado");
                }
            })
            .catch((e: AxiosError) => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    return (
        <div>
            {loading && <h1>Loading...</h1>}

            {product && <ProductCard product={product} />}

            {error && <h2>{error}</h2>}
        </div>
    );
};

export default ProductInfo;