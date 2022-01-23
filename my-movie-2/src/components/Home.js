import React from 'react';
import { Link } from 'react-router-dom';
    
    function Home() {
        return (
            <div>
              <img src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank"/>
              <h1>My Movie</h1>

              <Link to="/userProfile">User Profile</Link>
              <br></br>
              <Link to="/Login">Log In</Link>
            </div>
        );
      }
    
    export default Home;