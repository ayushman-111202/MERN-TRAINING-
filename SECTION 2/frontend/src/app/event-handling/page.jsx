'use client';
import React from 'react'

const EventHandling = () => {

  const previewImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (data) => {
      const image = new Image();
      image.src = data.target.result;
      document.body.appendChild(image);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div className='container mx-auto h-screen'>
        <h1 className='my-5 text-center font-bold text-3xl'>Event Handling</h1>

        <button className='mt-4 bg-black text-white p-3'
          onClick={() => { alert('button was clicked') }}
        >Click Event</button>

        <input className='border block w-full p-3 mt-4'
          onChange={(e) => {
            console.log(e.target.value);
          }} type="text"
        />

        <input className='border block w-full p-3 mt-4'
          placeholder='Press any key'
          onKeyDown={(e) => {
            console.log(e.code);
          }} type="text"
        />

        <input type="color"
          onChange={(e) => {
            console.log(document.body.style.backgroundColor = e.target.value);
          }}
        />

        <input type="file"
          onChange={(e) => {
            console.log(e.target.files);
          }}
        />

        <input type="file" accept='image/*' onChange={previewImage} />

      </div>
    </div>
  )
}

export default EventHandling;