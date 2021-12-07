import React from "react";
// import { useGetAllProductsQuery } from "../redux/services";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
function Home() {
  const { items, status } = useSelector((state) => state.products);
  return (
    <div className="home-container">
      {status === "pending" ? (
        <p>Loading..</p>
      ) : status === "rejected" ? (
        <p>Error Occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {items?.map((product) => (
              <div key={product.id} className="product">
                <h3> {product.name}</h3>
                <img src={product.image} alt={product.name}></img>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
