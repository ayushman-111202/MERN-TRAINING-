import { IconCircleDotted, IconHistory, IconHome, IconMenu, IconMessage, IconPhone, IconSettings, IconStatusChange, IconUser, IconUsersGroup } from '@tabler/icons-react'
import React from 'react'

const ChatUI = () => {

  const [chatMessage, setchatMessage] = useState([]);

  const addNewMessage = (message) => {

    if (message.code === 'enter') {

      console.log(message.target.value);

      const newMessage = () => {
        text : message.target.value
      };
      setchatMessage ([
        newMessage, ...chatMessage
      ]);
      message.target.value = '';
      
    }

  }

  return (
    <div className='bg-slate-300 h-screen flex flex-col items-center justify-center'>

      <h1 className='bg-teal-700 h-[8vh] w-[90vw] text-center p-3 font-bold text-3xl text-white rounded-t-2xl'>Gossip's Hub</h1>

      <div className='flex mx-auto gap-4 bg-gradient-to-b from-green-300 to-teal-300 h-[90vh] w-[90vw] grid grid-cols-12 p-3 rounded-b-2xl'>

        <div className='col-span-1 bg-teal-800 rounded-xl grid grid-rows-12'>

          <div className="w-full rounded-t-xl"></div>
          <div className="w-full flex justify-center items-center">
            <div className='bg-teal-500 h-[90%] w-[70%] flex justify-center items-center rounded-xl'>
              <IconMessage size={40} color='white' />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className='bg-teal-500 h-[90%] w-[70%] flex justify-center items-center rounded-xl'>
              <IconUsersGroup size={40} color='white' />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className='bg-teal-500 h-[90%] w-[70%] flex justify-center items-center rounded-xl'>
              <IconCircleDotted size={40} color='white' />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className='bg-teal-500 h-[90%] w-[70%] flex justify-center items-center rounded-xl'>
              <IconPhone size={40} color='white' />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className='bg-teal-500 h-[90%] w-[70%] flex justify-center items-center rounded-xl'>
              <IconSettings size={40} color='white' />
            </div>
          </div>
          <div className=" w-full"></div>
          <div className=" w-full"></div>
          <div className=" w-full"></div>
          <div className=" w-full"></div>
          <div className="row-span-2  w-full rounded-b-xl flex justify-center items-center">
            <div className='bg-teal-500 h-[50%] w-[60%] flex justify-center items-center rounded-full'>
              <IconUser size={40} color='white' />
            </div>
          </div>
        </div>

        <div className='col-span-4 grid grid-rows-8 bg-teal-500 rounded-xl'>

          <div className="rounded-t-xl flex">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 rounded-tr-xl border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full rounded-tr-xl border border-black'>
                  <div className='w-full h-2/3 rounded-tr-xl border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className="flex items-center">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className="flex items-center">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className="flex items-center">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className="flex items-center">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className="flex items-center">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className="flex items-center">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 border border-black'></div>
            </div>
          </div>

          <div className=" flex">
            <div className='w-[15%] h-[90%] mx-auto border border-black rounded-full'></div>
            <div className='w-[85%] h-full'>
              <div className='w-full h-2/3 border border-black flex'>
                <div className='w-[80%] h-full border border-black'></div>
                <div className='w-[20%] h-full border border-black'>
                  <div className='w-full h-2/3 border border-black'></div>
                  <div className='w-full h-1/3 border border-black'></div>
                </div>
              </div>
              <div className='w-full h-1/3 rounded-br-xl border border-black'></div>
            </div>
          </div>

        </div>

        <div className='col-span-7 bg-stone-700 border border-green-500 rounded-xl'>
        </div>

      </div>

    </div>
  )
}

export default ChatUI;