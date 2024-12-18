import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [res, setRes] = useState("");
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://dy2vwfau6udnh.cloudfront.net/api/2m"
        ); // Await response from the URL
        const result = response.data; // Store the result
        console.log("Data fetched successfully:", result);
        setRes(result);
        return result; // Return the result if needed elsewhere
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error; // Optional: throw the error to be handled by the caller
      }
    })();
  }, []);
  return (
    <Container maxWidth="md">
      <Typography>Product page</Typography>
      <Typography variant="h3">{JSON.stringify(res)}</Typography>
      <Link to="/images">Private Image</Link>
    </Container>
  );
};
export default Product;
