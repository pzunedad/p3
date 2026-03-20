'use client'
import { use, useEffect, useState } from 'react';
import { getProducts } from '@/lib/api/products';
import { Product } from '@/types/products';
import Products from '@/components/Products';
import SectionContainer from '@/components/SectionContainer';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
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

  const filteredProducts = (() => {
  if (!products) {
    return [];
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.title.toLowerCase().includes(normalizedQuery)
    );
  });
})();

  return (
    <SectionContainer className="">
      <h1>Buscador de productos</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchBar>

      {loading && <h2>Loading...</h2>}
      {error && <h3>Error...{error}</h3>}
      {!loading && !error && products?.length === 0 && 
      <p>No se encontraron productos</p>}

      {!loading && !error && products && products.length > 0 && filteredProducts.length === 0 && (
        <p>No hay resultados para la búsqueda actual.</p>
      )}


      {!loading && !error && filteredProducts.length > 0 && (
        <Products products={filteredProducts} />
      )}
    </SectionContainer>
  );
};

export default Home;