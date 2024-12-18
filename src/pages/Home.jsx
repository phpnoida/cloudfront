import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";  
import { useEffect, useState } from "react";

const Home = () => {
    const [res,setRes] = useState('')
 useEffect(()=>{
    (async function(){
        try {
    const response = await axios.get(
      "https://d2mtengiu2iwzp.cloudfront.net/api/1m"
    ); // Await response from the URL
    const result = response.data; // Store the result
    console.log('Data fetched successfully:', result);
    setRes(result)
    return result; // Return the result if needed elsewhere
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Optional: throw the error to be handled by the caller
  }


    })()

 },[])
  return (
    <Container maxWidth="md">
      <Typography variant="h5">Welcome to Home Page</Typography>
      <Typography variant="h3">{JSON.stringify(res)}</Typography>
      <Link to='products'>Products</Link>
    </Container>
  );
};

export default Home;