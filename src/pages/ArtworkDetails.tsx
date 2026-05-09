import { useParams } from 'react-router-dom'
import { artworks } from '../data/artworks'

const ArtworkDetails = () => {
  const { id } = useParams()
  const artwork = artworks.find((a) => a.id === id)

  if (!artwork) return <div>Artwork not found</div>

  return (
    <div className='m-auto text-gray-500 space-y-3'>
      <img src={artwork.src} alt={artwork.title} />
      <div className='flex gap-10'>
        <h1 className='text-gray-800'>{artwork.title}</h1>
        <p className='text-gray-500'>{artwork.year}</p>
      </div>
      <p>{artwork.materials}</p>
      <p className='text-gray-800'>{artwork.description}</p>
    </div>
  )
}

export default ArtworkDetails
