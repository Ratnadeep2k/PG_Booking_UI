import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">PG?booking</span>
        <div className="navItems">
          {/* <button className="navButtonR">Register</button> */}
          <a class="navButtonR" href="register">Register</a>
          <a class="navButtonL" href="login" role="button">Login</a>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar