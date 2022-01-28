import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";

import "./List.css";

const InputMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}]);
  //const [moviename, setMoviename] = useState("");
  const [search, setSearch] = useState([""]);
  const [title, setTitle] = useState({});
  


  const getSearch =  async (e) => {

      e.preventDefault();

    let apiURL = `https://api.themoviedb.org/3/search/movie?api_key=5932b064e032c45eb55f4b0bc2b65dc8&query=${search}&page=1`

    const response = await fetch(apiURL);
 
    const json = await response.json();

    setData(json.results);



if (data.length !== 0) {
    setIsLoading(false);
  }

  
  
  };



  const AddMovie = async (e) => {


     let  moviename = e;


    try {
      const body = {moviename};

      console.log(body);

       const response2 = await fetch("http://localhost:5000/movielist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
             window.location = "/list";
            }catch (err) {
                console.error(err.message);
            }

            console.log(search);

  };



  return (

    <Fragment>
      <Nav></Nav>

<br/>
<br/>
<br/>

<form className="search-cont" onSubmit={getSearch} >
                <input placeholder="Specific Movie Name"
                    type="text"
                    className="form-control-lg border border-dark border-5"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />

                <button className="btn btn-dark" id="search-btn" type="submit"> Search </button>

            </form> 

            <br/>
            <br/>

   

          <div class="container">
            <h1 className="search-title">Search Results</h1>
            <div class="row">
              {isLoading ? (
                <h1 className="text-white"></h1>
              ) : (
                data.map((data) => (
                  <div>
                    <div class="card">
                    <td>
                      
                      <button
                          className="btn btn-dark" id = "list-button"
                          onClick={(e) => AddMovie(data.original_title)} >
                          Add
                        </button>
                
                      </td>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                      />
                      <p id="rating" class="card-text text-center">
                        {`${data.vote_average}`}/10
                      </p>
                      <p class="card-text font-weight-bold text-center text-white">
                        {data.original_title}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>


  
    </Fragment>
  );
};

export default InputMovie;