import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); 

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
            .then(() => {
                props.Reload(); // Refresh the movie list after deletion
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
    };

    return (
        <div>
            {/* Other movie details */}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
    );


  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
      </Card>
    </div>
  );
}

export default MovieItem;