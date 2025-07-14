import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value);
  }

  const onClear = ()=>{
    setInput('');
    inputRef.current.value = '';
  }

  return (
    <div
      className="mx-0 sm:mx-0 xl:mx-0 relative h-[400px] sm:h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${assets.headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center w-full">
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-white drop-shadow-lg">
          Welcome to <span className="text-telegram">Kamkam </span> <br /> Children's Foundation
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-100 drop-shadow">
          We're dedicated to nurturing the potential of children and building stronger communities.
        </p>
      </div>
    </div>
  )
}

export default Header