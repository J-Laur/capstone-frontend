
import React, { useState } from "react";
import './Home.css';
import Nav from "./nav";
import './Trailers.css';




function Trailer() {
    let array = [];

    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [key, setkey] = useState("");
    const [title, setTitle] = useState("");
    const [releaseDate, setReleasedate] = useState("");
    const [overview, setOverview] = useState("");
    const [rating, setRating] = useState("");
    


    const getTrailer = async e => {

        e.preventDefault();
        let apiURL = `https://api.themoviedb.org/3/search/movie?api_key=5932b064e032c45eb55f4b0bc2b65dc8&query=${search}&page=1`

        const response = await fetch(apiURL);
        const json = await response.json();

        setTitle((json.results[0].original_title));
        setOverview((json.results[0].overview));
        setReleasedate((json.results[0].release_date));
        setRating((json.results[0].vote_average));   


      const backdropURL = `https://image.tmdb.org/t/p/original/` + json.results[0].backdrop_path;
      console.log(backdropURL);
    document.body.style.backgroundImage = `url(${backdropURL})`;
    

        console.log(title);
        console.log(releaseDate);
        console.log(overview);


        for (let i = 0; i < json.results.length; i++) {
            array[i] = json.results[i].id;
        }


        let movieId = array[0];

        let apiURL2 = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=5932b064e032c45eb55f4b0bc2b65dc8&language=en-US`

        const response2 = await fetch(apiURL2);
        const json2 = await response2.json();
        console.log(json2);


        setkey((json2.results[0].key).toString());

        console.log(key);

        document.querySelector(".video").style.display = "block";
        document.querySelector(".cont-trailer").style.display = "block";
    }





    return (
        <div>
            <Nav></Nav>

            <style> {document.body.style.backgroundColor = "#222222"} </style>
            <br />
            <br />

   <form className="search-cont" onSubmit={getTrailer} >
                <input placeholder="Specific Movie Name"
                    type="text"
                    className="form-control-lg border border-dark border-5"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />


                <button className="btn btn-dark" id="search-btn" type="submit"> Search </button>

            </form> 


          
            <br />
            <br />
            <br />
            <br />
             <br />
            <br />
            <br />
            <br />

            <div className="video">
                <iframe width="680" height="500"
                    src={`https://www.youtube.com/embed/` + key}>
                </iframe>
            </div>
           
          
           <div className="cont-trailer">
            <h2 class="video-text font-weight-bold">{title}</h2>
            <h6 class="video-text">{overview}</h6>
            <h6 class="video-text">{`User Rating: ${rating}`}</h6>
            <h6 class="video-text">{`Release Date: ${releaseDate}`}</h6>

            </div>
                

        </div >



    );
}

export default Trailer;