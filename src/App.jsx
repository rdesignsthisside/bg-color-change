import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBtn from './clrbtn'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>

      <div className='h-screen w-screen duration-400' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12'>

          <div className='flex flex-wrap justify-center gap-3'>

            <ColorBtn colorName="red" setColor={setColor}/>
            <ColorBtn colorName="blue" setColor={setColor}/>
            <ColorBtn colorName="green" setColor={setColor}/>
            <ColorBtn colorName="yellow" setColor={setColor}/>
            <ColorBtn colorName="purple" setColor={setColor}/>
            <ColorBtn colorName="pink" setColor={setColor}/>

          </div>

        </div>


      </div>



    </>
  )
}

export default App
