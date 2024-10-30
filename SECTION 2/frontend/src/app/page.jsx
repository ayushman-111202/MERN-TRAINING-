import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react';

const Home = () => {
  return (
    <div>

      <h1 className='text-center my-5 text-3xl font-bold'>Home</h1>

      <p style={{ color:'red', fontSize:50, fontWeight:'bold' }}>This is a JSX Page</p>
      <button className='global-btn'>Home Button</button>
      <img src="/globe.svg" className='size-16' alt="" />

      <div className="m-10 w1/2">
        <Card title="Card Title 1" description={"Card Description 1"}/>
        <Card title="Card Title 2" description={"Card Description 2"}/>
        <Card title="Card Title 3" description={"Card Description 3"}/>
        <Card title="Card Title 4" description={"Card Description 4"}/>
        <Card title="Card Title 5" description={"Card Description 5"}/>
        <Card title="Card Title 6" description={"Card Description 6"}/>
        <Card title="Card Title 7" description={"Card Description 7"}/>
        <Card title="Card Title 8" description={"Card Description 8"}/>
        <MyButton>
          qwerty
        </MyButton>
      </div>
    </div>
  )
}

export default Home;