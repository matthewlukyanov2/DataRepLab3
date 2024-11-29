// Importing modules
const express = require('express');  
const app = express();  
const port = 4000;  

// Importing and setting up CORS 
const cors = require('cors');
app.use(cors());  

// Custom middleware for setting CORS headers
app.use(function(req, res, next) {
  // Set the headers to allow methods
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();  
});

// Importing body-parser to handle request bodies 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  

// Importing and setting up MongoDB connection with Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14'); 

// Defining the movie schema using Mongoose
const movieSchema = new mongoose.Schema({
  title: String,   
  year: String,    
  poster: String   
});

// Creating a model from the movie schema to interact with the database
const movieModel = new mongoose.model('myMovies', movieSchema);

// GET route to fetch all movies from the database
app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({});  
    res.status(200).json({ movies });  
});

// GET route to fetch a single movie by its ID
app.get('/api/movie/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id);  
  res.json(movie); 
});

// DELETE route to remove a movie by its ID
app.delete('/api/movie/:id', async (req, res) => {
  console.log('Deleting movie with ID:', req.params.id); 
  const movie = await movieModel.findByIdAndDelete(req.params.id);  
  res.status(200).send({ message: "Movie deleted successfully", movie }); 
});


// PUT route to update a movie's details by its ID
app.put('/api/movie/:id', async (req, res) => {
  let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });  
  res.send(movie);  
});

// POST route to add a new movie to the database
app.post('/api/movies', async (req, res) => {
    console.log(req.body.title);  
    const { title, year, poster } = req.body;  

    // Create a new movie document using the movie model
    const newMovie = new movieModel({ title, year, poster });
    await newMovie.save();  // Save the new movie to the database

    res.status(201).json({ "message": "Movie Added!", Movie: newMovie });  // Respond with a success message and the newly added movie
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);  
});





// {
//   "Title": "Avengers: Infinity War (server)",
//   "Year": "2018",
//   "imdbID": "tt4154756",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
// },
// {
//   "Title": "Captain America: Civil War (server)",
//   "Year": "2016",
//   "imdbID": "tt3498820",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
// },
// {
//   "Title": "World War Z (server)",
//   "Year": "2013",
//   "imdbID": "tt0816711",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
// }