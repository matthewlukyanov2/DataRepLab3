import MovieItem from "./movieitem";

function Movies(props) {
    return (
        <>
            {props.mymovie.map((movie) => (
                <MovieItem
                    myMovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Movies;