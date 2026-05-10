import { useState } from 'react'
import { artworks } from '../data/artworks'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'

const Landing = () => {
  const [index, setIndex] = useState(0)
  const current = artworks[index]
  const lastArtworkIndex = artworks.length - 1

  const nextArtwork = () => {
    if (index !== lastArtworkIndex) {
      setIndex((prevIndex) => prevIndex + 1)
    } else {
      setIndex(0)
    }
    console.log('nextArtwork clicked!', `Artwork index ${index}`)
  }

  const prevArtwork = () => {
    if (index !== 0) {
      setIndex((prevIndex) => prevIndex - 1)
    } else {
      setIndex(lastArtworkIndex)
    }
    console.log('prevArtwork clicked!', `Artwork index ${index}`)
  }

  return (
    <div className='animate-fade-in mx-auto pt-10'>
      <img src={current.src} alt={current.title} className='shadow-xl' />
      <div className='flex justify-center items-center gap-6 py-6'>
        <button className='hover:cursor-pointer' onClick={prevArtwork}>
          <span className='inline-block transition-transform duration-500 hover:-translate-x-0.5'>
            <FaArrowLeftLong className='gray gray-hover transition-colors duration-300' />
          </span>
        </button>
        <button className='hover:cursor-pointer' onClick={nextArtwork}>
          <span className='inline-block transition-transform duration-500 hover:translate-x-0.5'>
            <FaArrowRightLong className='gray gray-hover transition-colors duration-300' />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Landing
