import { useState } from "react";

const Create = () => {
    // State variables for movie details
    const [title, setTitle] = useState(''); // Movie title
    const [year, setYear] = useState(''); // Movie release year
    const [poster, setPoster] = useState(''); // URL for the movie poster

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Log the movie details to the console
        console.log('Title:', title);
        console.log('Year:', year);
        console.log('Poster URL:', poster);
    };

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                {/* Input for movie title */}
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Update title state on change
                    />
                </div>

                {/* Input for movie year */}
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)} // Update year state on change
                    />
                </div>

                {/* Input for movie poster URL */}
                <div className="form-group">
                    <label>Add Movie Poster URL: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)} // Update poster state on change
                    />
                </div>

                {/* Submit button */}
                <div>
                    <input type="submit" value="Add movie" />
                </div>
            </form>
        </div>
    );
};

export default Create;
