import aboutImg from '../assets/cecilia-about-photo.jpg'

const About = () => {
  return (
    <div className='text-gray-500 animate-fade-in m-auto'>
      <h1 className='text-4xl text-start font-normal pb-4'>About</h1>
      <div className='grid grid-cols-2 gap-10 text-sm'>
        <div className='max-w-md'>
          <p>
            My practice focuses on the exchange of social, economic and cultural
            capital within art, and explores alternative metrics of value that
            are based on service rather than scarcity.
          </p>
          <p className='py-3'>
            My CV can be found{' '}
            <a href='#' className='underline'>
              here
            </a>
            .
          </p>
          <p className='pb-2 text-center'>...</p>
          <p className='py-3'>
            Cecilia Masuko Iwata was born May 1992 in Seattle, WA. In 2000, at
            the age of 7, she was told by Robin Sadinsky's mom that she was good
            at drawing. "Look," said Robin Sadinsky's mom in a low voice, "I'm
            supposed to tell all the kids that their drawings are good, but
            yours is actually good." Equipped with a profound sense of
            confidence, Iwata began making good drawings, and later, good
            paintings.
          </p>
          <p className='py-3'>
            In 2010, Iwata was admitted to the School of the Art Institute of
            Chicago, at which point her idea of "good" shifted to accommodate
            the institution.
          </p>
          <p className='py-3'>
            In 2013, she started to realize that nobody knows anything about
            goodness, but that some people are better at leveraging capital to
            prove their point.
          </p>
          <p className='py-3'>
            Last we heard, she decorates birthday cakes for a living.
          </p>
        </div>
        <div>
          <img src={aboutImg} alt='Cecilia Iwata' className='w-80' />
        </div>
      </div>
    </div>
  )
}

export default About
