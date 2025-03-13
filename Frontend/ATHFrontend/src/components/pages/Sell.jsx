import React, { useRef, useState } from "react";
import "./Sell.css";

const Sell = () => {
  const [listingInputs, setListingInputs] = useState({
    proName: "",
    category: "wheat",
    price: "",
    quantity: "",
    description: "",
    img: null, // Image file will be handled as a file object
  });
  // image for preview
  const [showImage,setShowImage]=useState(null)
  // pop up for response message
  const [responseMessage,setResponseMessage]=useState("")
  const [showPopup,setShowPopup]=useState(false)
  const closePopup=()=>{
    setShowPopup(false)
  }
  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListingInputs({ ...listingInputs, [name]: value });
  };

  // Handle file input changes
  const handleImageChange = (e) => {
    const image=e.target.files[0]
    setShowImage(URL.createObjectURL(image))
    setListingInputs({ ...listingInputs, img: image });
  };
  const ImageRef=useRef()
  // Handle form submit
  const handleListingSubmitForm = async (e) => {
    e.preventDefault();

    // Create FormData to hold both text fields and the file
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append("proName", listingInputs.proName);
    formData.append("category", listingInputs.category);
    formData.append("price", listingInputs.price);
    formData.append("quantity", listingInputs.quantity);
    formData.append("description", listingInputs.description);
    formData.append("img", listingInputs.img); // The image file

    try {
      const response = await fetch("agritrade-hub-backend1.vercel.app", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
      },
        body: formData,
      });
      if(response.status===400){
        const data=await response.json();
        setResponseMessage(data.msg)
        setShowPopup(true);
        setListingInputs({
          proName: "",
          category: "wheat",
          price: "",
          quantity: "",
          description: "",
          img: null,
        });
        setShowImage(null)
        if (ImageRef.current) {
          ImageRef.current.value = "";
        }
      }
      if(response.status===403){
        const data=await response.json();
        setResponseMessage(data.msg)
        setShowPopup(true)
        setListingInputs({
          proName: "",
          category: "wheat",
          price: "",
          quantity: "",
          description: "",
          img: null,
        });
        setShowImage(null)
        if (ImageRef.current) {
          ImageRef.current.value = "";
        }
      }

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.msg)
        setShowPopup(true)
        // Clear the form inputs
        setListingInputs({
          proName: "",
          category: "wheat",
          price: "",
          quantity: "",
          description: "",
          img: null,
        });
        setShowImage(null)
        if (ImageRef.current) {
          ImageRef.current.value = "";
        }
      } else {
        throw new Error("Failed to add the product");
      }
    } catch (error) {
      console.error("Error while posting the data:", error.msg);
      // alert("Error while posting the data");
    }
  };

  return (
    <div className="sell-page">
      <section className="product-listing">
        <h2>Product Listing Form</h2>
        <form className="listing-form" onSubmit={handleListingSubmitForm}>
          <div className="form-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              placeholder="Enter product name"
              name="proName"
              value={listingInputs.proName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-category">Category</label>
            <select
              id="product-category"
              name="category"
              value={listingInputs.category}
              onChange={handleInputChange}
            >
              <option value="wheat">Wheat Seeds</option>
              <option value="rice">Rice Seeds</option>
              <option value="maize">Maize Seeds</option>
              <option value="sesame">Sesame Seeds</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="number"
              id="product-price"
              placeholder="Enter price"
              name="price"
              value={listingInputs.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="number"
              id="product-quantity"
              placeholder="Enter quantity in kilograms"
              name="quantity"
              value={listingInputs.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-description">Description</label>
            <textarea
              id="product-description"
              placeholder="Describe the product"
              name="description"
              value={listingInputs.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Upload Product Image</label>
            <input
              type="file"
              id="product-image"
              ref={ImageRef}
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {showImage && (
            <img
              src={showImage}
              alt="Product Preview"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          </div>
          <button type="submit" className="submit-btn">
            Submit Listing
          </button>
        </form>
      </section>
       {showPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{responseMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sell;
