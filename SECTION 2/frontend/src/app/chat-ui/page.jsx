import React from 'react'

const ChatUI = () => {
  return (
    <div className='bg-slate-300 h-screen flex flex-col items-center justify-center'>

      <h1 className='bg-teal-700 h-[8vh] w-[90vw] text-center p-3 font-bold text-3xl text-white rounded-t-2xl'>Gossip's Hub</h1>

      <div className='flex mx-auto gap-4 bg-gradient-to-b from-green-300 to-teal-300 h-[90vh] w-[90vw] grid grid-cols-12 border border-red-500 p-3 rounded-b-2xl'>

        <div className='col-span-1 border border-red-500 bg-teal-800 rounded-xl grid grid-rows-12'>

          <div className="border border-white w-full rounded-t-xl"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="border border-white w-full"></div>
          <div className="row-span-2 border border-white w-full rounded-b-xl"></div>

        </div>

        <div className='col-span-4 grid grid-rows-8 border bg-teal-500 border-white rounded-xl'>

          <div className="border border-black rounded-t-xl"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black rounded-b-xl"></div>

        </div>

        <div className='col-span-7 border border-green-500 rounded-xl'>


 
        </div>

      </div>

    </div>
  )
}

export default ChatUI