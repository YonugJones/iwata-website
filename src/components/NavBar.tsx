import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='px-5 animate-nav-in'>
      <ul>
        <li className='py-3 pb-8 font-semibold text-5xl text-gray-500 tracking-tight hover:text-gray-800 hover:cursor-pointer'>
          <Link to='/'>
            <span className='text-yellow-500 hover:text-yellow-600'>
              Cecilia
            </span>
            Iwata
          </Link>
        </li>
        <li className='py-3 font-medium text-gray-400 hover:text-gray-800 hover:cursor-pointer'>
          <Link to='/sculpture'>Edible Sculptures/Installations</Link>
        </li>
        <li className='py-3 font-medium text-gray-400 hover:text-gray-800 hover:cursor-pointer'>
          <Link to='/painting'>Painting</Link>
        </li>
        <li className='py-3 font-medium text-gray-400 hover:text-gray-800 hover:cursor-pointer'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='py-3 font-medium text-gray-400 hover:text-gray-800 hover:cursor-pointer'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
