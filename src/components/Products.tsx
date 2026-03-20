import { Product as ProductType } from '@/types/products';
import { useRouter } from 'next/navigation'
import SectionContainer from './SectionContainer';
import "./products.css"


type Props = {
  products: ProductType[];
};

const Products = ({ products }: Props) => {

  const router = useRouter();

  const handleProductClick =(id: number) => {
    router.push(`/product/${id}`)
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <SectionContainer key={product.id} className="product-card">
          {product.thumbnail && (
            <img
              src={product.thumbnail}
              className="product-img"
            />
          )}
          <div className="product-content">
            <h3>{product.title}</h3>
            <p><strong>Categoria: </strong> {product.category}</p>
            <p><strong>Precio: </strong>{product.price}€</p>
            <div className="product-button">
              <button onClick={() => handleProductClick(product.id)}>Ver detalles</button>
            </div>
          </div>
        </SectionContainer>
      ))}
    </div>
  );
};

export default Products;