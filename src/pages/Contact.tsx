const Contact = () => {
  return (
    <div className='animate-fade-in ml-[15%] px-4 pt-9  w-full flex flex-col gap-4 max-w-lg gray'>
      <h2 className='text-2xl tracking-wide font-ultra gray italic'>
        Get in touch
      </h2>
      <form className='space-y-4 w-full'>
        <div className='flex gap-4'>
          <input
            type='text'
            placeholder='Name'
            required
            className='border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 gray-focus rounded-md p-2 w-full'
          />
          <input
            type='email'
            placeholder='Email'
            required
            className='border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 gray-focus rounded-md p-2 w-full'
          />
        </div>
        <textarea
          name='message'
          rows={4}
          id='message'
          placeholder='Hey!'
          required
          className='border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 gray-focus rounded-md p-2 w-full resize-none'
        />
        <button
          type='submit'
          className='w-full bg-[gray] dark-gray-background-hover text-white font-normal px-6 py-2 rounded-md hover:cursor-pointer transition-colors duration-200  '
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
