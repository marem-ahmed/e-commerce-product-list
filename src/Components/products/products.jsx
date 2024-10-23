import React, { useEffect, useState } from "react";
import Loader from "./Loader/loader";

export default function Products() {
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {setProducts(data)
                setLoading(false);

      })      
      .catch((error) =>{console.error("Error fetching products:", error)
        setLoading(false)
      });
      console.log(products);
      

  }, []); 

  return (
    <div className="container">
      <h1 className="text-center">E-commerce Products List</h1>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="products row gap-3 mt-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="product col-md-4"
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                className="w-100 h-50"
                src={product.image}
                alt={product.title}
              />
              <div className="d-flex flex-column justify-content-between">
                <h5 className="mt-4">{product.title}</h5>
                <div className="d-flex flex-column ">
                  <span>Price: ${product.price}</span>
                  <span>rating: {product.rating.rate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
