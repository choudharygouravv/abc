import { NavLink } from 'react-router-dom'
import './header.css'

function Header()
{
    return(
        <nav className="navbar">
      <div className="container">
        <div className="logo">
          
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/clothes">Men's Clothing</NavLink>
            </li>
            <li>
              <NavLink to="/wclothes">Women's Clothing</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/post">Post</NavLink>
            </li>
            <li>
              <NavLink to="/update">Update</NavLink>
            </li>
            <li>
              <NavLink to="/delete">Delete</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Header;