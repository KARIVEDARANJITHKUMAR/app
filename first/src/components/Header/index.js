import { Link } from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className='bg-head'>
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title"  ><span className='span'>P</span>ortfolio.</h1>
      <ul className="nav-menu">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>About</li>
        </Link>
        <Link className="nav-link" to="/Skill">
          <li>Skills</li>
        </Link>
        <Link className="nav-link" to="/projects">
          <li>Projects</li>
        </Link>
        <Link className="nav-link" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

    </div>
  </nav>
  </div>
)

export default Header