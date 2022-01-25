import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';
import Nav from "./nav";

import './List.css';

const InputMovie = () => {

    const [moviename, setMoviename] = useState("");

   const onSubmitForm = async e => {
       e.preventDefault();
       try {
        const body = {moviename};
        const response = await fetch("http://localhost:5000/movielist", { 
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        window.location = "/list";
       }catch (err) {
           console.error(err.message);
       }
   }

 
    return (
    <Fragment>
           <Nav></Nav>
       
        <div className="container">
       <div className="text-center">
  
</div>
    <h1 className = "text-center mt-5 font-italic text-light font-weight-bold " id = "list-title">MyMovie List</h1>
    <br/>
    <h5 className="font-weight-bold text-light">Enter a Movie Title Below!</h5>
    <form className="d-flex mt-3" onSubmit={onSubmitForm}>
        <input type = "text" className="form-control border border-dark border-5"  value={moviename} onChange={e => setMoviename(e.target.value)}/>
        <button className="btn btn-light">Add Movie!</button>
    </form>
    </div>
    </Fragment>
    );
};

export default InputMovie;