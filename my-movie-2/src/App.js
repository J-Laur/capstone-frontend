import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from "./components/Login";
    
    function App() {

      const [currentUser, setCurrentUser] = useState("")
      
      const mockLogIn = (logInInfo) => {

        const newUser = {...currentUser}
        newUser.userName = logInInfo.userName
        setCurrentUser(newUser) 

      }

       return (
         <BrowserRouter>
            <Routes>
              <Route path= "/"/>
              <Route path="/UserProfile" element={<UserProfile userName={currentUser.userName} />}/>
              <Route path="/Login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
           </Routes>
         </BrowserRouter>
       );
     }
    
    export default App;
