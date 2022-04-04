import React from "react";
import { useParams } from 'react-router-dom';
const Home = (props)=>{
    const {id} = useParams()
  console.log(id,"id parametro en home")
    return (<h1> Hello {id}</h1>);
}
export default Home;