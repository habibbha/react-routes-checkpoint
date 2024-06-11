
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';
import { Route,Routes } from 'react-router';
import Trailer from "./Trailer";


const App = () => {
  const [movies, setMovies] = useState([
    {
      id:1,
      trailer:"https://www.youtube.com/embed/YoHD9XEInc0?si=t6S-eBRGIywkfDUa",
      title: 'InceptioN',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      posterURL: 'https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF1000,1000_QL80_.jpg',
      rating: 8.8,
      genre: 'A mind-bending thriller',
      backimg:'https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg',
    },
    {
      id:2,
      trailer:"https://www.youtube.com/embed/vKQi3bBA1y8?si=GSHPbMxF54v3lAWS",
      title: 'The MatriX',
      description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      rating: 8.7,
      genre: 'A sci-fi classic',
      backimg:'https://wp-pa.phonandroid.com/uploads/2024/04/matrix-5e-film.jpg',
    },
    {
      id:3,
      trailer:"https://www.youtube.com/embed/x3t0Nc6fg7w?si=N92sqsJKEMHncAhY",
      title: ' The Usual SuspecT',
      description: 'The sole survivor of a pier shoot-out tells the story of how a notorious criminal influenced the events that began with five criminals meeting in a seemingly random police lineup.',
      posterURL: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-172369979.jpg',
      rating: 10,
      genre: 'Crime-Drama-Mystery',
      backimg:'https://m.media-amazon.com/images/M/MV5BYmI2NTk3ODQtYWFiNC00NDgxLTkxY2UtYTNhNTI3YTNkNzdmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
    },
    {
      id:4,
      trailer:"https://www.youtube.com/embed/sY1S34973zA?si=ycZ7-dVdzKEYxjnS",
      title: 'The GodfatheR',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWU4BB_TIirPXQyr6BJpNkh0aYJ3HuhOxlg&s',
      rating: 9.2,
      genre: 'Crime-Drama',
      backimg:'https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg',
    },
    {
      id:5,
      trailer:"https://www.youtube.com/embed/V75dMMIW2B4?si=dTwUYyM4vteUe1aR",
      title: 'The Lord of the RingS',
      description: 'Gandalf and Aragorn lead the World of Men against Sauron"s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBhSj6SGjvDroTSsOzr_8UaVZmFFXAtmdlg&s',
      rating: 9.0,
      genre: 'Action-Adventure-Drama',
      backimg:'https://hips.hearstapps.com/hmg-prod/images/lordoftherings-1636391090.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*',
    },
    {
      id:6,
      trailer:"https://www.youtube.com/embed/P5ieIbInFpg?si=d9jNmFUUQVtKtX5S",
      title: 'GladiatoR',
      description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      posterURL: 'https://m.media-amazon.com/images/I/71qx-AMnP-L._AC_UF894,1000_QL80_.jpg',
      rating: 8.5,
      genre: 'Action-Adventure-Drama',
      backimg:'https://cdn.britannica.com/93/77293-050-CF984388/Russell-Crowe-Gladiator.jpg',
    },
    // Add more initial movies if needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterMovies = (title, rating) => {
    setFilteredMovies(
      movies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.rating >= rating)
      )
    );
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1 className='habib'>Best Movies</h1>
      <br/>
      <Filter filterMovies={filterMovies} />
      <Routes>
      <Route path="/" element={<><MovieList movies={filteredMovies} /> <AddMovie addMovie={addMovie} /></>} />

        <Route path="/trailer/:id" element ={<Trailer movies={movies}/>}/>


      </Routes>
      
      
    </div>
  );
};

export default App;
