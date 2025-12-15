import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from './User/Home/LandingPage';
import LoginPage from "./Pages/authPages/loginPage/loginPage";

const App = () => {
  return (
  
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

        </Routes>
    </Router>
  )
}

export default App