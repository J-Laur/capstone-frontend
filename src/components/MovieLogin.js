
import React, {useState, Fragment} from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom"
import './MovieLogin.css';




const MovieLogin = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

const UserLogin = async e => {
    try {

        e.preventDefault();
        
        const body = {email, password};
        const response = await fetch("http://localhost:5000/login", { 
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body),

        });
    
        if(response.status == 200)
        {
         window.location = "/home";
        }
        else if (response.status == 404)
        {
            alert("User Not Found.");
        }

        else if (response.status == 401)
        {
            alert("Incorrect Password.");
        }
        else if (response.status == 500)
        {
            alert("Server Error.");
        }

        document.body.style.backgroundColor = "#222222"; 
    } catch (err) {
        console.error(err.message);
    }

    }    



return (
   <Fragment>
       <div className="background-login">
        <style> {document.body.style.backgroundColor = "#222222"} </style>
        <img src="https://www.fool.ca/wp-content/uploads/2020/11/movie-theatre.jpg" id="bg" alt=""></img>
       
       

    <div className="overall-inf " >

    <div className="login-info">
        <br/>
    <br/>

<form onSubmit={UserLogin} class = "cont-login">
<img className = "form-control" id ="logo-login" src = "https://github.com/J-Laur/capstone-backend/blob/main/logo.png?raw=true" />
    <h1 className="text-primary"> Login Here</h1>

<h5 className="font-weight-bold text-light">Username</h5>
    <input placeholder="Username" type = "text" className="form-control border border-dark border-5"/>
    <br/>

<h5 className="font-weight-bold text-light">Email</h5>
    <input placeholder="Email" type = "text" className="form-control border border-dark border-5" value={email} onChange={e => setEmail(e.target.value)}/>
    <br/>

<h5 className="font-weight-bold text-light">Password</h5>
    <input placeholder="Password" type = "password" className="form-control border border-dark border-5"  value={password} onChange={e => setPassword(e.target.value)}/>

    <div className="form-control-lg">
        <br/>

    <button type = "submit" className="login-btn" >Login</button>
    <div>
<br/>
    <h6 className="text-light"> Need to Sign Up? 
<Link to="/signup">
 Click Here
</Link>
</h6>
</div>
  </div>
</form>


  

</div>
</div>
</div>
</Fragment>

)

}
export default MovieLogin;