import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MovieItem = (props) => {

    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]);

    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={props.myMovie.Poster} alt={`${props.myMovie.Title} poster`} />
            <Card.Body>
                <Card.Title>{props.myMovie.Title}</Card.Title>
                <Card.Text>
                    Year: {props.myMovie.Year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieItem;
