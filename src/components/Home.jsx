import React from "react";
import { useGetAllProductsQuery } from "../redux/services";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
