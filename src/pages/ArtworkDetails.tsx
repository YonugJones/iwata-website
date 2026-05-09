import { useParams, useNavigate } from 'react-router-dom'
import { artworks } from '../data/artworks'

const ArtworkDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const artwork = artworks.find((a) => a.id === id)

  if (!artwork) return <div>Artwork not found</div>

  return (
    <div className='animate-fade-in m-auto px-4 pb-10 w-full max-w-5xl h-full'>
      <div className='relative flex items-center justify-center text-gray-500 mb-6 min-h-9'>
        <button
          className='absolute left-0 hover:text-gray-800 hover:cursor-pointer transition-colors duration-200'
          onClick={() => navigate(`/${artwork.category}`)}
        >
          BACK
        </button>
      </div>
      <div className='flex gap-6'>
        <img src={artwork.src} alt={artwork.title} className='max-w-3xl' />
        <div className='flex justify-end flex-col text-gray-500 italic text-sm font-light'>
          <h1 className='text-gray-800 text-base font-normal'>
            {artwork.title}
          </h1>
          <p>{artwork.year}</p>
          <p>{artwork.materials}</p>
          <p>{artwork.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ArtworkDetails
