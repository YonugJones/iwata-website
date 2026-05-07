import { NavLink, Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className='px-5 text-right animate-nav-in'>
      <ul>
        <li className='py-3 pb-8 font-semibold text-5xl text-gray-500 tracking-tight hover:text-gray-800 hover:cursor-pointer transition-colors duration-200'>
          <Link to='/'>
            <span className='text-yellow-500 hover:text-yellow-600'>
              Cecilia
            </span>
            Iwata
          </Link>
        </li>
        <li className='py-3'>
          <NavLink
            to='/sculpture'
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 hover:text-gray-800 hover:cursor-pointer ${
                isActive ? 'text-gray-800' : 'text-gray-400'
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
              `font-medium transition-colors duration-200 hover:text-gray-800 hover:cursor-pointer ${
                isActive ? 'text-gray-800' : 'text-gray-400'
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
              `font-medium transition-colors duration-200 hover:text-gray-800 hover:cursor-pointer ${
                isActive ? 'text-gray-800' : 'text-gray-400'
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
              `font-medium transition-colors duration-200 hover:text-gray-800 hover:cursor-pointer ${
                isActive ? 'text-gray-800' : 'text-gray-400'
              }`
            }
          >
            About
          </NavLink>
        </li>
        <div className='flex gap-3 justify-end py-3 font-semibold'>
          <li className='text-gray-400 hover:text-gray-800 transition-colors duration-200'>
            <a
              href='https://www.instagram.com/cecilia.iwata/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
          </li>
          <li className='text-gray-400 hover:text-gray-800 transition-colors duration-200'>
            <a
              href='https://www.facebook.com/cecilia.iwata'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
