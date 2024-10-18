import { useEffect, useState } from "react";
import axios from "axios";// axios is a HTTP client for making requests
import Movies from "./movies";
const Read = () => {

  //useState Initializes movies state as an empty array
  const [movies, setMovies] = useState([]);
    
  // useEffect lets you perform side effects in function components
      useEffect(
        ()=>{
           axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
           .then((response)=>{
             console.log(response.data);
             setMovies(response.data.movies);
           })
           .catch(
            (error)=>{
              console.log(error);
            }
           );
        }, []
      );

    return (
        <div>
            <h3>Hello from read component!</h3>
            <Movies myMovies={movies}/>
        </div>
    );
}

export default Read;