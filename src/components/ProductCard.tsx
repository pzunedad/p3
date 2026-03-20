import { Product } from "@/types/products";
import { useRouter } from "next/navigation";
import SectionContainer from "./SectionContainer";
import "./productcard.css"


type ProductCardProps = {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const router = useRouter();

  return (
    <SectionContainer className="mainContainer">
      <div className="imageContainer">
        <img 
          src={product.thumbnail} 
          alt={product.title}
        />
      </div>
      <div className="infoWrapper">
        <div className="productDataContainer">
          <h2>{product.title}</h2>
          <p><strong>Disponibilidad: </strong>{product.stock}</p>
          <p><strong>{product.availabilityStatus}</strong></p>
          <p><strong>Precio: </strong>{product.price}€</p>
          <p><strong>Descripcion: </strong>{product.description}</p>
          <p><strong>Marca: </strong>{product.brand}</p>
          <p><strong>Valoracion: </strong>{product.rating}/5</p>
          <p><strong>Dimensiones: </strong>{product.dimensions.depth} x {product.dimensions.height} x {product.dimensions.width} cm</p>
          <p><strong>Peso: </strong>{product.weight} gr</p>
        </div>
        <div className="boton">
          <button onClick={() => router.back()}>Volver</button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProductCard;