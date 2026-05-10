import { NavLink, Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className='px-5 text-right animate-nav-in'>
      <ul>
        <li className='py-3 pb-8 hover:cursor-pointer'>
          <h1 className='text-3xl gray gray-hover transition-colors duration-200 tracking-wide italic font-ultra'>
            <Link to='/'>Cecilia Iwata</Link>
          </h1>
        </li>
        <li className='py-3'>
          <NavLink
            to='/sculpture'
            className={({ isActive }) =>
              `font-normal transition-colors duration-200 gray-hover nav-underline text-sm ${
                isActive ? 'dark-gray nav-underline-active' : 'gray'
              }`
            }
          >
            Edible Sculpture/Installation
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/painting'
            className={({ isActive }) =>
              `font-normal transition-colors duration-200 gray-hover nav-underline text-sm ${
                isActive ? 'dark-gray nav-underline-active' : 'gray'
              }`
            }
          >
            Painting
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `font-normal transition-colors duration-200 gray-hover nav-underline text-sm ${
                isActive ? 'dark-gray nav-underline-active' : 'gray'
              }`
            }
          >
            Contact
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `font-normal transition-colors duration-200 gray-hover nav-underline text-sm ${
                isActive ? 'dark-gray nav-underline-active' : 'gray'
              }`
            }
          >
            About
          </NavLink>
        </li>
        <div className='flex gap-3 justify-end py-3 font-bold'>
          <li className='gray gray-hover transition-colors duration-200'>
            <a
              href='https://www.instagram.com/cecilia.iwata/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
