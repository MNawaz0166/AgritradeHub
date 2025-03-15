import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // To store the specific product details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logisticPopup,setLogisticPopup]=useState(false)
  const handleLogisticPopup=()=>{
    setLogisticPopup(true)
  }
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://agritrade-hub-backend.vercel.app/"); // Adjust the API endpoint as per your backend
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        const productDetails = data.products.find((prod) => prod._id === id); // Match the product by _id

        if (productDetails) {
          setProduct(productDetails);
        } else {
          throw new Error('Product not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Trigger when the id changes

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details-page">
      <h2>{product.proName}</h2>
      <img src={product.img} alt={product.proName} className="product-image" />
      
      {/* Product Details */}
      <div className="product-info">
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price} per kg</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
      <button className="buy-btn" onClick={handleLogisticPopup}>Buy Now</button>
      {logisticPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Do you want to Book a Logistic</h3>
            <Link to="/logistics"><button>Yes</button></Link>
            <Link to="/payments"><button>NO</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
