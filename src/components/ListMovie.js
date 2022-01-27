import React, {Fragment, useEffect, useState} from "react";

import EditMovie from "./EditMovie";


const ListMovie = () => {

    const [movies, setItems] = useState([]);



    const deleteMovie = async (id) => {
        try {
            const deleteMovie = await fetch(`http://localhost:5000/movielist/${id}`, {method: "DELETE"}); 

        setItems(movies.filter(movie => movie.movie_id !== id));
        }catch (err) {
            console.error(err.message)
        }
    }

    const getMovies = async () => {
        try {
            const response = await fetch("http://localhost:5000/movielist")
            const jsonData = await response.json()
            
            setItems(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getMovies();  
    }, []);

    
    return (
    <Fragment>
     
    
       <style> {document.body.style.backgroundColor = "#222222"} </style>
       
        <div className = "container" id = "movie-list">
<table className="table mt-5 text-center table-dark table-striped table-bordered  " >
    <caption> Current List of Movies to Watch:</caption>
    <thead className="font-italic">
      <tr>
        <th>Movie</th>
        <th>Edit Movie</th>
        <th>Delete Movie</th>
      </tr>
    </thead>
    <tbody>
        {}
     {movies.map(movie => (
         <tr  className = "font-weight-bold "  key = {movie.movie_id}>
             <td>{movie.moviename}</td>
             <td><EditMovie movie = {movie} /></td>
             <td><button className="btn btn-light" onClick = {() => deleteMovie(movie.movie_id)}>Delete Movie</button></td>
         </tr>
     ))}
    </tbody>
  </table>
</div>
 
    </Fragment>


    )};

export default ListMovie;