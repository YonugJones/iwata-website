// Layout

import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='px-5 py-10 flex h-full'>
      <NavBar />
      <main className='flex flex-1'>
        <Outlet />
      </main>
    </div>
  )
}
export default App
