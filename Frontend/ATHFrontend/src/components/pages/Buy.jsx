import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch} from 'react-icons/fa';
import './Buy.css';
const Buy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // To store fetched products
  const [loading, setLoading] = useState(true); // Loading state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("agritrade-hub-backend1.vercel.app");
        if (response.ok) {
          const data = await response.json();
          // console.log(data.products[0]._id)
          setProducts(data.products);
          console.log(data.products)
          setLoading(false);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.proName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    // console.log(matchesCategory)
    // console.log(selectedCategory)
    return matchesSearchTerm && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'low') return a.price - b.price;
    if (sortOption === 'high') return b.price - a.price;
    return 0;
  });
  const handleShowDetails = (_id) => {
    navigate(`/products/${_id}`);
  };

  return (
    <div className="buy-page">
      {/* Header Section */}
      <section className="buy-header">
        <h1>Buy Agricultural Products on AgriTradeHub</h1>
        <p>Find the best seeds and agricultural products from trusted sellers.</p>
      </section>
      <section className="search-filter">
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
         <FaSearch className="icon" />
        </div>
        <div className="filters">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="maize">Maize</option>
            <option value="seasame">Seasame</option>
          </select>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </section>
      <section className="product-listings">
        <h2>Available Products</h2>
        {loading?(
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products available.</p>
      ) :(
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price} per kg</p>
              <button className="buy-btn" onClick={() => handleShowDetails(product._id)}>Show Details</button>
            </div>
          ))}
        </div>
      )}
      </section>
    </div>
  );
};

export default Buy;
