// import  { useEffect, useState } from 'react';
// import axios from 'axios'; 
import Home from "./pages/Home/Home"

const App = () => {
  // const [data, setData] = useState(null); 
  // const getData = async () => {
  //     const response = await axios.get('http://localhost:5000/getData');
  //     setData(response.data.message);
  // };

  // useEffect(() => {
  //   getData();
  // }, []); 

  // return (
  //   <div>
  //       <p>{data}</p>
  //   </div>
  // );
  return(
    <Home/>
  )
};

export default App;
