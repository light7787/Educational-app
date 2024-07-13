import React from 'react'
import BlogItem from './BlogItem';
import BlogList from './BlogList';

const App = () => {
  return (
    <>

    <div className='sticky top-0  flex justify-between  text-center bg-black w-full h-[80px] items-center text-white'>
         <div className='flex gap-3 items-center '>
          <h1 className='px-5 font-bold text-2xl '>Skill Forge</h1>
          <h3 className='px-5'>Browse</h3>
          <h3 className='px-5'>Learning Paths</h3>
         </div>
         <div className='flex gap-3 mx-5'>
          <input type="text" className='w-[300px] h-[30px] rounded-md' placeholder='Search for any skills or teachers' />
          <button className=" hover:font-semibold ">Search</button>
         
          

         </div>

       
    </div>
    <div className='grid grid-cols-2 w-full h-screen'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl'>Unlock Your Potential with</h1>
        <h1 className='text-6xl font-bold text-shadow-lg'>Skill Forge</h1>
        <h3 className='text-2xl'>Your gateway to master new skills</h3>
        <div className='flex  gap-5'><button className='border border-black bg-amber-300 w-[80px] h-[40px] font-bold rounded-sm hover:bg-transparent'>Sign in</button>
        <button className='border border-black bg-amber-300 w-[80px] h-[40px] font-bold rounded-sm hover:bg-transparent'>Log in</button></div>
      </div>
      <div className=' flex justify-center items-center'>
        <img  className=" w-[500px] h-[500px]"src="/hero1.jpg" alt="" />
      </div>

    </div>
    <div className='grid grid-cols-2 w-full h-screen '>
      <div className='bg-zinc-800 flex flex-col  justify-center items-center'>
        <img className='rounded-md w-[450px] h-[300px]' src="/business.jpg" alt="" />
        <div className='  w-full flex  justify-evenly  mt-20'>
          <div className='bg-[#1a1c1c] w-[200px] h-[100px] flex flex-col justify-center items-center'><div className='text-orange-300 font-bold text-2xl'>10k+</div><div className='text-white font-bold'>CLASSES</div></div>
          <div className='bg-[#1a1c1c] w-[200px] h-[100px] flex flex-col justify-center items-center'><div className='text-orange-300 font-bold text-2xl'>100k+</div><div className='text-white font-bold'>MEMBERS</div></div>
        </div>

        
      </div>
      <div className='bg-zinc-800 flex flex-col text-white items-center py-20'>
      <h1 className='text-5xl'>Creative Learning</h1>
      <h1 className='text-5xl'>Made Easy</h1>
      <div className='m-8 flex flex-col items-start'>
      <span className='flex gap-2 justify-center m-2  '><img src="/checkbox.png " className='h-6 mt-1' alt="" /><h3 className='text-2xl'>Thousands of creative classes. Beginer to pro.</h3></span>
      <span className='flex gap-2 justify-center m-2 '><img src="/checkbox.png " className='h-6 mt-1' alt="" /><h3 className='text-2xl'>Taught by creative pros and industry icons.</h3></span>
      <span className='flex gap-2 justify-center m-2  '><img src="/checkbox.png " className='h-6 mt-1' alt="" /><h3 className='text-2xl'>Learning Paths to help you achieve your goals.</h3></span>
      <span className='flex gap-2 justify-center m-2'><img src="/checkbox.png " className='h-6 mt-1' alt="" /><h3 className='text-2xl'>Certificates to celebrate your accomplishments.</h3></span>

      </div>
      <div className='  w-full flex  justify-evenly  mt-20'>
          <div className='bg-[#1a1c1c] w-[200px] h-[100px] flex flex-col justify-center items-center'><div className='text-orange-300 font-bold text-2xl'>5k+</div><div className='text-white font-bold'>TEACHERS</div></div>
          <div className='bg-[#1a1c1c] w-[200px] h-[100px] flex flex-col justify-center items-center'><div className='text-orange-300 font-bold text-2xl'>2k+</div><div className='text-white font-bold'>RATINGS</div></div>
        </div>
     
      </div>
    </div>
    <div className='flex justify-center items-center text-5xl font-extrabold m-20 '>Explore Inspiring Online Courses</div>
    <BlogList/>
   
    </>
  )
}

export default App;
