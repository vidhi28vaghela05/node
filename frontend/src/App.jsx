import { Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import Home from "./Pages/Home"
import JoinUsPage from "./Pages/JoinUsPage"
import ProfilePage from "./Pages/ProfilePage"


const App = () => {
  return (
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/login" element = {<LoginPage/>}/>
    <Route path="/joinus" element = {<JoinUsPage/>}/>
    <Route path="/profile" element = {<ProfilePage/>}/>
    
  </Routes>
  )
}

export default App