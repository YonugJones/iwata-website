import Masonry from 'react-masonry-css'
import { artworks } from '../data/artworks'
import { useNavigate } from 'react-router-dom'

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

const Sculpture = () => {
  const navigate = useNavigate()
  const sculptureWorks = artworks.filter((a) => a.category === 'sculpture')

  return (
    <div className='animate-fade-in m-auto px-4 pb-10'>
      <div className='relative flex items-center justify-center text-gray-500 mb-6'>
        <button
          className='absolute left-0 hover:text-gray-800 hover:cursor-pointer transition-colors duration-200'
          onClick={() => navigate('/')}
        >
          BACK
        </button>
        <h1 className='tracking-tighter text-3xl font-light'>
          EDIBLE SCULPTURE/INSTALLATION
        </h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumns}
        className='flex gap-4'
        columnClassName='flex flex-col gap-4'
      >
        {sculptureWorks.map((s) => (
          <img
            key={s.id}
            src={s.src}
            alt={s.title}
            onClick={() => navigate(`/artwork/${s.id}`)}
            className='w-full shadow-sm hover:opacity-90 hover:cursor-pointer transition-opacity duration-200'
          />
        ))}
      </Masonry>
    </div>
  )
}

export default Sculpture
