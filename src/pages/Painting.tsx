import { artworks } from '../data/artworks'
import { useNavigate } from 'react-router-dom'

const Painting = () => {
  const navigate = useNavigate()
  const paintingWorks = artworks.filter((p) => p.category === 'painting')

  return (
    <div className='animate-fade-in ml-[15%] px-4 pt-9 w-full max-w-lg'>
      <div className='gray mb-6 min-h-9'>
        <h1 className='tracking-wide font-ultra italic text-2xl'>Painting</h1>
      </div>
      <div className='flex flex-col gap-6'>
        {paintingWorks.map((p) => (
          <img
            key={p.id}
            src={p.src}
            alt={p.title}
            onClick={() => navigate(`/artwork/${p.id}`)}
            className='w-full shadow-sm hover:opacity-90 hover:cursor-pointer transition-opacity duration-200'
          />
        ))}
      </div>
    </div>
  )
}

export default Painting
