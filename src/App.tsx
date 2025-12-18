import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from './User/Home/LandingPage';
import SignUp from "./Pages/authPages/signUp/SignUpPage";
import Login from "./Pages/authPages/loginPage/loginPage";

const App = () => {
  return (
  
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            

        </Routes>
    </Router>
  )
}

export default App