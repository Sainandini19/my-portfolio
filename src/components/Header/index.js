import {Link} from 'react-router-dom'

import {AiOutlineHome, AiOutlineContacts} from 'react-icons/ai'

import {GiSkills} from 'react-icons/gi'

import {GoProjectSymlink} from 'react-icons/go'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <div>
        <img
          src="https://res.cloudinary.com/dhegijvfy/image/upload/v1695463398/attachment_8390576_vbulug.png"
          alt="logo"
          className="website-logo"
        />
      </div>

      <ul className="nav-desktop-content">
        <Link to="/" className="nav-link">
          <li className="nav-item">Home</li>
        </Link>

        <Link to="/skills" className="nav-link">
          <li className="nav-item">Skills</li>
        </Link>

        <Link to="/projects" className="nav-link">
          <li className="nav-item">Projects</li>
        </Link>

        <Link to="/contacts" className="nav-link">
          <li className="nav-item">Contacts</li>
        </Link>
      </ul>
      <ul className="nav-mobile-content">
        <Link to="/" className="nav-link">
          <li className="nav-item-mobile">
            <AiOutlineHome />
          </li>
        </Link>

        <Link to="/skills" className="nav-link">
          <li className="nav-item-mobile">
            <GiSkills />
          </li>
        </Link>

        <Link to="/projects" className="nav-link">
          <li className="nav-item-mobile">
            <GoProjectSymlink />
          </li>
        </Link>

        <Link to="/contacts" className="nav-link">
          <li className="nav-item-mobile">
            <AiOutlineContacts />
          </li>
        </Link>
      </ul>
    </nav>
  </>
)
export default Header
