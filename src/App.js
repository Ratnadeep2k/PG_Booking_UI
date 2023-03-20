import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Hotel from "./pages/pg/Pg";
import List from "./pages/list/List";
import Login from "./components/Authentication/login";
import Register from "./components/Authentication/register";
import Book from "./components/book/booked";
import Subscribe from "./components/mailList/Subscribe";
import Available from "./components/Available/available";
function App() {
  return (


    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/Subscribe" element={<Subscribe/>}/>
        <Route path="/available" element={<Available/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
