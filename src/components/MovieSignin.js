import React, {useState, Fragment} from "react";
import {Link} from 'react-router-dom';
import './MovieSignin.css';

const MovieSignin = () => {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const MovieSignup = async e => {

try {
    e.preventDefault();
    
    const body = {username, email, password};
    const response = await fetch("http://localhost:5000/users", { 
        method:"POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body),
    });
      
      if(response.status == 500)
      {
        alert("Server Error.");
      }
      else{
        window.location = "/";
      }
 
} catch (err) {
    console.error(err.response.data);
}
}
 

return (
   <Fragment>
       <style> {document.body.style.backgroundColor = "#222222"} </style>
       <img src="https://www.fool.ca/wp-content/uploads/2020/11/movie-theatre.jpg" id="bg-2" alt=""></img>
       <div className="background-login">
    <div className="overall-info-2 " >
    <div className="login-info" >
  
      
    <form onSubmit={MovieSignup} className="cont-signup">
    <img className = "form-control" id ="logo-signup" src = "https://github.com/J-Laur/capstone-backend/blob/main/logo.png?raw=true" />
    <h1 className="text-primary"> Register Here</h1>
    <h5 className="font-weight-bold text-light">Enter a Username</h5>
        <input  placeholder="Username" type = "text" className="form-control border border-dark border-5" value={username} onChange={e => setUsername(e.target.value)}/>
<br/>
    <h5 className="font-weight-bold text-light">Enter an Email</h5>
        <input placeholder="Email" type = "text" className="form-control border border-dark border-5" value={email} onChange={e => setEmail(e.target.value)}/>
  <br/>
    <h5 className="font-weight-bold text-light">Enter a Password</h5>
        <input placeholder="Password" type = "password" className="form-control border border-dark border-5" value={password} onChange={e => setPassword(e.target.value)}/>
        <br/>
        <div className="form-control-lg">
    <button type = "submit" className="signup-btn">Submit</button>
  </div>
  <br/>
  <h6 className="text-light"> Return to Login:  
<Link to="/">
 Click Here
</Link>
</h6>
    </form>
    </div>
</div>
</div>
</Fragment>

)

}
export default MovieSignin;