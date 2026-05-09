import Masonry from 'react-masonry-css'
import { artworks } from '../data/artworks'
import { useNavigate } from 'react-router-dom'

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

const Painting = () => {
  const navigate = useNavigate()
  const paintingWorks = artworks.filter((p) => p.category === 'painting')

  return (
    <div className='animate-fade-in m-auto px-4 pb-10 w-full max-w-5xl'>
      <div className='relative flex items-center justify-center gray mb-6 min-h-9'>
        <button
          className='absolute left-0 gray-hover hover:cursor-pointer transition-colors duration-200'
          onClick={() => navigate('/')}
        >
          back
        </button>
        <h1 className='tracking-wide font-ultra italic text-2xl font-light'>
          Painting
        </h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumns}
        className='flex gap-4'
        columnClassName='flex flex-col gap-4'
      >
        {paintingWorks.map((p) => (
          <img
            key={p.id}
            src={p.src}
            alt={p.title}
            onClick={() => navigate(`/artwork/${p.id}`)}
            className='w-full shadow-sm hover:opacity-90 hover:cursor-pointer transition-opacity duration-200'
          />
        ))}
      </Masonry>
    </div>
  )
}

export default Painting
