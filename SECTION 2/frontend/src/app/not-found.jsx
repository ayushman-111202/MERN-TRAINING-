import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen bg-gray-500">
      <div className="text-center space-y-5">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl font-bold">Page Not Found</p>

        <button className='bg-black rounded-lg px-4 py-2 text-white'>Go To Home Page</button>
      </div>
    </div>
  )
}

export default NotFound;
