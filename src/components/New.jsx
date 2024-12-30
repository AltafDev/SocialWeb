"use client"
import React, { useState ,useEffect} from 'react'

export default function News() {
const [Article,setArticle]=useState([])
const [articlenum ,setarticlenum]=useState(10)
console.log(Article)
useEffect(() => {
fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`).then(res=>res.json()).then(data=>setArticle(data.articles))
}, [])


  return (
<>

<div className="pb-5">
    {Article.slice(2,articlenum).map((news,index)=>(
     <div className="  flex gap-4 m-2 bg-white rounded-xl shadow mb-4">
        <a href={news.url} target='blank' > 
            <img src={news.urlToImage}  alt="" className='rounded-xl' />
            <div className="p-2">
                <h3  className='text-start text-xs	font-bold text-black font-sans'>{news.author}</h3>
                <p className='text-start text-xs text-black font-sans' >{news.description}</p>
            </div>
        </a>
     </div>
    ))

    }
    <div className="flex gap-4">
      
    <button onClick={()=>{
      setarticlenum(articlenum+6)
    }} className='bg-black text-white p-1'>Load more</button>
    <button onClick={()=>{
      setarticlenum(articlenum-6)
    }}  className='bg-black text-white p-1'>Previous</button>

    </div>
</div>

</>
  )
}