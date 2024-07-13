import React from 'react'



const BlogItem = ({title,description,category,image,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer '>
     
       <img src={image} alt='' width={400} height={400} className="border-b border-black"/>
    
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
       
           
      </div>
     
    </div>
  )
}

export default BlogItem