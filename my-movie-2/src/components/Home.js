import React, { useEffect, useState } from "react";
import './Home.css';
import Nav from "./nav";

function Home() {


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  window.onload = function() {
    getTrending();
    getPopular();
    getUpcoming();
  }

  const getTrending = async e => {
 
    let apiURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=5932b064e032c45eb55f4b0bc2b65dc8`
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));

    if (data.length !== 0) {
      setIsLoading(false);
    }

  }



  const [data2, setData2] = useState([]);
  const getPopular = async e => {
 
    let apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=5932b064e032c45eb55f4b0bc2b65dc8&language=en-US&page=1`
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setData2(json['results']))
      .catch((error) => console.log(error));

    if (data.length !== 0) {
      setIsLoading(false);
    }

  }

  const [data3, setData3] = useState([]);
  const getUpcoming = async e => {
 
    let apiURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=5932b064e032c45eb55f4b0bc2b65dc8&language=en-US&region=US`
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setData3(json['results']))
      .catch((error) => console.log(error));

    if (data.length !== 0) {
      setIsLoading(false);
    }

  }
  
 
  
  const [search, setSearch] = useState("");

  const [data4, setData4] = useState([]);
  const getSearch = async e => {
 
    e.preventDefault();
    for(let i = 0; i < 2; i++)
    {
    let apiURL = `https://api.themoviedb.org/3/search/movie?api_key=5932b064e032c45eb55f4b0bc2b65dc8&query=${search}&page=1`
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setData4(json['results']))
      .catch((error) => console.log(error));

     if (data.length !== 0) {
       setIsLoading(false);
     }
    }
    document.querySelector(".search-title").style.display = "block";
  }


  useEffect( () =>
  {
    for(let i = 0; i < 2; i++)
      { 
  getTrending();
  getPopular();
  getUpcoming();
      }
  },[])


  return (
    <div>
      <Nav></Nav>
      <style> {document.body.style.backgroundColor = "#222222"} </style>
      <br />
      <br />
      <form className="search-cont" onSubmit={getSearch}>
        <input placeholder="Keyword" 
               type="text" 
               className="form-control-lg border border-dark border-5" 
               value={search} 
               onChange={e => setSearch(e.target.value)}/>
        <button className="btn btn-dark" id="search-btn" type ="submit"> Search </button>
      </form>
      <br/>

      <br />
      <br />
      <br />
      <div class="container">
        <h1 className="search-title">SEARCH RESULTS</h1>
        <div class="row">
          
          {isLoading ? (
            <h1 className="text-white">Fetching Movies...</h1>
          ) : (
            data4.map((data4) => (
              <div>
                
                <div class="card">
                  <img src={`https://image.tmdb.org/t/p/original/${data4.poster_path}`} />
                  <p class="card-text font-weight-bold">{data4.original_title}</p>
                  <p class="card-text">{`Release date: ${data4.release_date}`}</p>


                </div>


              </div>


            ))
          )}

        </div>
      </div>

      <br/>

      <div class="container">
      <h1 className="text-light">Trending</h1>
        <div class="row">
          
          {isLoading ? (
            <h1 className="text-white">Fetching Movies...</h1>
          ) : (
            data.map((data) => (
              <div>

                <div class="card">
                  <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} />
                  <p class="card-text font-weight-bold">{data.original_title}</p>
                  <p class="card-text">{`Release date: ${data.release_date}`}</p>


                </div>


              </div>


            ))
          )}

        </div>
      </div>

      <br/>

      <div class="container">
      <h1 className="text-light">Popular</h1>
        <div class="row">
          
          {isLoading ? (
            <h1 className="text-white">Fetching Movies...</h1>
          ) : (
            data2.map((data2) => (
              <div>

                <div class="card">
                  <img src={`https://image.tmdb.org/t/p/original/${data2.poster_path}`} />
                  <p class="card-text font-weight-bold">{data2.original_title}</p>
                  <p class="card-text">{`Release date: ${data2.release_date}`}</p>


                </div>


              </div>


            ))
          )}

        </div>
      </div>
      <br/>
      <div class="container">
      <h1 className="text-light">Upcoming</h1>
        <div class="row">
          
          {isLoading ? (
            <h1 className="text-white">Fetching Movies...</h1>
          ) : (
            data3.map((data3) => (
              <div>

                <div class="card">
                  <img src={`https://image.tmdb.org/t/p/original/${data3.poster_path}`} />
                  <p class="card-text font-weight-bold">{data3.original_title}</p>
                  <p class="card-text">{`Release date: ${data3.release_date}`}</p>


                </div>


              </div>


            ))
          )}

        </div>
      </div>

    </div>
  );
}

export default Home;