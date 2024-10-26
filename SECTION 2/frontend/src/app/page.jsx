import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-5 text-3xl font-bold'>Home</h1>

      <p style={{ color:'red', fontSize:50, fontWeight:'bold' }}>This is a JSX Page</p>
      <button className='global-btn'>Home Button</button>
      <img src="/globe.svg" className='size-16' alt="" />
    </div>
  )
}

export default Home;