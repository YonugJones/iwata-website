const Contact = () => {
  return (
    <div className='flex flex-col gap-4 max-w-2xl w-full mr-[19%]'>
      <h2 className='text-3xl tracking-tight text-gray-500'>Get in touch</h2>
      <form className='space-y-4 w-full'>
        <div className='flex gap-4'>
          <input
            type='text'
            placeholder='Name'
            required
            className='border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md p-2 w-full'
          />
          <input
            type='email'
            placeholder='Email'
            required
            className='border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md p-2 w-full'
          />
        </div>
        <textarea
          name='message'
          rows={5}
          id='message'
          placeholder="What's up?"
          required
          className='border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md p-2 w-full resize-none'
        />
        <button
          type='submit'
          className='w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-md hover:cursor-pointer transition-colors duration-200'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
