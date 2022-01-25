import React, {Fragment, useState} from "react";

const EditMovie = ({movie}) => {
    const [moviename, setMoviename] = useState(movie.moviename);


    const updateMoviename = async e => {
        e.preventDefault();
        try{

            const body = {moviename};
            const response = await fetch(`http://localhost:5000/movielist/${movie.movie_id}`, 
            {
            method: "PUT" ,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        window.location = "/list";

        }catch (err) {
            console.error(err.message);
        }

    }

    return (
        <Fragment> 
        <button type="button" className="btn btn-light" data-toggle="modal" data-target={`#id${movie.movie_id}`}>
          Edit Movie
        </button>
        
       
        <div className="modal" id={`id${movie.movie_id}`} onClick = {() => setMoviename(movie.moviename)}>
          <div className="modal-dialog">
            <div className="modal-content">
        
              
              <div className="modal-header">
                <h4 className="modal-title">Edit Movie</h4>
                <button type="button" className="close" data-dismiss="modal" onClick = {() => setMoviename(movie.moviename)}>&times;</button>
              </div>
        
         
              <div className="modal-body">
               <input type = "text" className="form-control" value = {moviename} onChange = {e => setMoviename(e.target.value)}/>
              </div>
      
              <div className="modal-footer">
              <button type="button" className="btn btn-light" data-dismiss="modal" onClick = {e => updateMoviename(e)}>Edit Movie</button>
                <button type="button" className="btn btn-light" data-dismiss="modal" onClick = {() => setMoviename(movie.moviename)}>Close Movie Editor</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditMovie;