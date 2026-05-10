import { useParams, useNavigate } from 'react-router-dom'
import { artworks } from '../data/artworks'

const ArtworkDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const artwork = artworks.find((a) => a.id === id)

  if (!artwork) return <div>Artwork not found</div>

  return (
    <div className='animate-fade-in m-auto px-4 pb-10 w-full max-w-5xl'>
      <div className='relative flex items-center justify-center mb-6 min-h-9 pt-9'>
        <button
          className='absolute left-0 gray gray-hover hover:cursor-pointer transition-colors duration-200'
          onClick={() => navigate(`/${artwork.category}`)}
        >
          back
        </button>
      </div>
      <div className='flex gap-6'>
        <img src={artwork.src} alt={artwork.title} className='max-w-3xl' />
        <div className='flex justify-end flex-col gray italic text-sm font-light'>
          <h1 className='dark-gray font-ultra italic'>{artwork.title}</h1>
          <p className='pb-2'>{artwork.year}</p>
          <p className='dark-gray pb-2'>{artwork.materials}</p>
          <p className='font-josefin italic'>{artwork.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ArtworkDetails
