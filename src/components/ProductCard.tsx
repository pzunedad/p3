import { Product } from "@/types/products";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SectionContainer from "./SectionContainer";
import "./productcard.css"


type ProductCardProps = {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const router = useRouter();
  const safeRating = Math.max(0, Math.min(product.rating, 5));
  const ratingPercentage = (safeRating / 5) * 100;

  const productImages = (() => {
    const images = product.images.filter(Boolean);
    return images.length > 0 ? images : [product.thumbnail];
  })();
const [selectedImage, setSelectedImage] = useState(productImages[0]);

useEffect(() => {
  setSelectedImage(productImages[0]);
}, [product.images, product.thumbnail]);

  return (
    <SectionContainer className="mainContainer">
      <div className="imageContainer">
        <img
          className="mainImage"
          src={selectedImage}
        />
        <div className="thumbnailList">
          {productImages.map((imageUrl, index) => (
            <button
              key={`${imageUrl}`}
              className="thumbnailButton"
              onClick={() => setSelectedImage(imageUrl)}>
              <img src={imageUrl}/>
            </button>
          ))}
        </div>
      </div>
      <div className="infoWrapper">
        <div className="productDataContainer">
          <h2>{product.title}</h2>
          <p><strong>Disponibilidad: </strong>{product.stock}</p>
          <p><strong>{product.availabilityStatus}</strong></p>
          <p><strong>Precio: </strong>{product.price}€</p>
          <p><strong>Descripcion: </strong>{product.description}</p>
          <p><strong>Marca: </strong>{product.brand}</p>
          <div>
            <span className="productRatingLabel">Valoración</span>
            <div>
              <span className="productRatingStars" style={{ ["--rating-fill" as string]: `${ratingPercentage}%` }} />
              <span>{product.rating}/5</span>
            </div>
          </div>
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