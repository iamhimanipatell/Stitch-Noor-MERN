import React, { useContext, useState } from 'react';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState('');
  const [showError, setShowError] = useState(false);
  const [buttonText, setButtonText] = useState("ADD TO CART");

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowError(true);
      return;
    }
    addToCart(product.id);
    setButtonText("ADDED TO CART");
    setTimeout(() => setButtonText("ADD TO CART"), 2000);
  };

  return (
    <div className="product-display">
      <div className="product-left">
        <div className="product-images-gallery">
          <img src={product.image} alt="small-1" />
          <img src={product.image} alt="small-2" />
          <img src={product.image} alt="small-3" />
        </div>
        <div className="product-main-image">
          <img src={product.image} alt="main" />
        </div>
      </div>

      <div className="product-right">
        <h1>{product.name}</h1>

        <div className="product-rating">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="product-price">
          <div className="old-price">₹{product.old_price}</div>
          <div className="new-price">₹{product.new_price}</div>
        </div>

        <p className="product-description">
          This is a beautiful and stylish product perfect for your wardrobe. Durable, comfy, and trendy.
        </p>

        <div className="product-size-section">
          <h2>Select Size</h2>

          {showError && (
            <p className="size-error">* Please select a size before adding to cart</p>
          )}

          {selectedSize && !showError && (
            <p className="size-success">Size {selectedSize} selected </p>
          )}

          <div className="product-sizes">
  {["XS", "S", "M", "L", "XL"].map((size) => (
    <div
      key={size}
      className={`size-box ${selectedSize === size ? "active-size" : ""}`}
      onClick={() => {
        setSelectedSize(prev => (prev === size ? '' : size)); // ✅ This line allows toggle
        setShowError(false);
      }}
    >
      {size}
    </div>
  ))}
</div>

        </div>

        <button onClick={handleAddToCart} className={`add-to-cart-button ${buttonText !== "ADD TO CART" ? "added" : ""}`}>
          {buttonText}
        </button>

        <div className="product-meta">
          <p><span>Category:</span> Women, T-shirt, Crop Top</p>
          <p><span>Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
