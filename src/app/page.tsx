'use client'
import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api/products';
import { Product } from '@/types/products';
import Products from '@/components/Products';
import SectionContainer from '@/components/SectionContainer';

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInitialproducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getProducts();
      setProducts(data.products);
    } catch {
      setError('Error al cargar los products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialproducts();
  }, []);

  return (
    <SectionContainer className="">
      <h1>Buscador de products</h1>

      {loading && <h2>Loading...</h2>}
      {error && <h3>Error...{error}</h3>}
      {!loading && !error && (!products || products.length === 0) && (
        <p>No se encontraron products</p>
      )}

      {!loading && !error && products && products.length > 0 && (
        <Products products={products} />
      )}
    </SectionContainer>
  );
};

export default Home;