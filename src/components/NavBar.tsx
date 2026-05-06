const NavBar = () => {
  return (
    <nav className='px-5 animate-nav-in'>
      <ul>
        <li className='py-3 pb-8 font-semibold text-5xl text-gray-500 tracking-tight hover:text-gray-800 hover:cursor-pointer'>
          <span className='text-yellow-500 hover:text-yellow-600'>Cecilia</span>{' '}
          Iwata
        </li>
        <li className='py-3 font-medium text-gray-500 hover:text-gray-800 hover:cursor-pointer'>
          Edible Sculptures/Installations
        </li>
        <li className='py-3 font-medium text-gray-500 hover:text-gray-800 hover:cursor-pointer'>
          Painting
        </li>
        <li className='py-3 font-medium text-gray-500 hover:text-gray-800 hover:cursor-pointer'>
          Contact
        </li>
        <li className='py-3 font-medium text-gray-500 hover:text-gray-800 hover:cursor-pointer'>
          About
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
