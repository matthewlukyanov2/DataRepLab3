import React from 'react';  
import { useParams } from 'react-router-dom';  // Importing useParams to access the URL parameters
import { useState, useEffect } from 'react';  
import axios from 'axios';  
import { useNavigate } from "react-router-dom";  

export default function Edit(props) {
  // Extracting the movie id
  let { id } = useParams();

  // Variables for movie details
  const [title, setTitle] = useState("");  
  const [year, setYear] = useState("");  
  const [poster, setPoster] = useState("");  
  const navigate = useNavigate(); 

  // useEffect used to fetch movie data when id changes
  useEffect(() => {
    axios.get('http://localhost:4000/api/movie/' + id)  
      .then((response) => {
        setTitle(response.data.title);  
        setYear(response.data.year);  
        setPoster(response.data.poster);  
      })
      .catch((error) => {
      
        console.log(error);
      });
  }, [id]);  

  // handleSubmit function when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();  
    const newMovie = { id, title, year, poster };  

    // Making request to update movie
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
      .then((res) => {
       
        console.log(res.data);
        navigate('/read');  
      });
  }

  return (
    <div>
      {/* Form to edit movie details */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {}
          <label>Movie Title: </label>
          <input 
            type="text" 
            className="form-control" 
            value={title}  
            onChange={(e) => setTitle(e.target.value)}  
          />
        </div>
        <div className="form-group">
          {}
          <label>Release Year: </label>
          <input 
            type="text" 
            className="form-control" 
            value={year}  
            onChange={(e) => setYear(e.target.value)}  
          />
        </div>
        <div className="form-group">
          {}
          <label>Poster URL: </label>
          <input 
            type="text" 
            className="form-control" 
            value={poster}  
            onChange={(e) => setPoster(e.target.value)}  // Update state when input changes
          />
        </div>
        <div className="form-group">
          {}
          <input type="submit" value="Edit Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
