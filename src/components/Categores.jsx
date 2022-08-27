import React from 'react'


const Categores = (props) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flex flex-col justify-center items-start border-2 border-tara-bgblack px-3 py-12 cursor-pointer gap-1 rounded-lg flip-card-front'>
          
            
            <div className='text-4xl text-tara-yellow my-2 after:text-tara-orange'>
              {
                props.icon
              }
            </div>
            <h2 className='text-tara-black text-xl font-bold after:text-white'>
              {
                props.head
              }
            </h2>
            <h3 className='text-gray-500 text-4xl my-2'>
              {
                props.title
              }
            </h3>
        </div>
        <div class="flip-card-back rounded-lg flex justify-center items-center flex-col gap-6 cursor-pointer">
          <h1 className='text-2xl font-bold text-tara-orange'>Join Club</h1> 
          <a href={ props.link} target=" _blank">
            <button className="flex justify-center items-center gap-3 md:gap-6 bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-16 py-2 text-white hover:shadow-md hover:bg-gradient-to-r hover:from-tara-purple hover:to-tara-blueCard hover:text-tara-black font-bold">
              Join
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Categores;