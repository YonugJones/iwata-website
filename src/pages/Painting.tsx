import Masonry from 'react-masonry-css'
import { artworks } from '../data/artworks'

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

const Painting = () => {
  const paintingWorks = artworks.filter((p) => p.category === 'painting')

  return (
    <div className='animate-fade-in m-auto px-4 pb-10'>
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
            className='w-full shadow-sm hover:opacity-90 hover:cursor-pointer transition-opacity duration-200'
          />
        ))}
      </Masonry>
    </div>
  )
}

export default Painting
