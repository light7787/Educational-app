
import React, { useState } from 'react'

import BlogItem from './BlogItem'
import { blog_data } from './assets/assets';

const BlogList = () => {
    const [menu,setMenu]= useState("All");

    const filteredData = menu=="All"? blog_data : blog_data.filter(item=>item.category===menu)
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>Featured</button>
            <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>Technology</button>
            <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>Startup</button>

            <button onClick={()=>setMenu('Drawing')} className={menu==="Drawing"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>Drawing</button>
            <button onClick={()=>setMenu('Music')} className={menu==="Music"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>Music</button>
           
            <button onClick={()=>setMenu('UIUX')} className={menu==="UIUX"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>UI UX</button>
            <button onClick={()=>setMenu('animation')} className={menu==="animation"?'bg-amber-400 text-black py-1 px-4 rounded-md border border-black':'bg-black text-white border border-black px-4 py-1 rounded-md'}>Animation</button>
        
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
            {filteredData.map((item,index)=>{
                return <BlogItem key={index} id={item.id}image={item.image} title={item.title} description={item.description} category={item.category}/>

            })}

        </div>
    </div>
  )
}

export default BlogList