import { artworks } from '../data/artworks'
import { useNavigate } from 'react-router-dom'

const Sculpture = () => {
  const navigate = useNavigate()
  const sculptureWorks = artworks.filter((a) => a.category === 'sculpture')

  return (
    <div className='animate-fade-in ml-[15%] px-4 pt-9 w-full max-w-lg'>
      <div className='gray mb-6 min-h-9'>
        <h1 className='tracking-wide font-ultra italic text-2xl'>
          Edible Sculpture / Installation
        </h1>
      </div>
      <div className='flex flex-col gap-4'>
        {sculptureWorks.map((s) => (
          <img
            key={s.id}
            src={s.src}
            alt={s.title}
            onClick={() => navigate(`/artwork/${s.id}`)}
            className='w-full shadow-sm hover:opacity-90 hover:cursor-pointer transition-opacity duration-200'
          />
        ))}
      </div>
    </div>
  )
}

export default Sculpture
