import React, {useState} from "react";
import {Navigate} from "react-router-dom";

function LogIn(props) {

    const [user, setUser] = useState({ userName: "", password: ""})
    const [redirect, setRedirect] = useState(false)

    const handleChange = (e) => {

        const updateUser = {...user}
        const inputField = e.target.userName
        const inputValue = e.target.inputValue
        updateUser[inputField] = inputValue

        setUser(updateUser)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        props.mockLogIn(user)
        setRedirect(true)
    }

    if(redirect) {
        return (<Navigate to="/UserProfile"/>)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input name="text" name="userName" onChange={handleChange} value={user.userName}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button class="btn btn-secondary">Log In</button>
            </form>
        </div>
    )
}

export default LogIn;