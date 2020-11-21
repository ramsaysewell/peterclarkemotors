import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
function Home() {
  const [cars, setCars] = useState([]);
  const getCars = async () => {
    const result = await fetch("/api/cars").then((res) => res.json());
    setCars(result);
  };
  return (
    <div className='Home'>
      <h1>Home page</h1>
      <Link to='/about'>Go to About page</Link>
      <button onClick={getCars}>Get Cars</button>
      <p>{cars.length}</p>
    </div>
  );
}

export default Home;
