"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import New from './New'
export default function LeftSlider() {
  const [input,setinput]=useState("")
 const Router=useRouter()
const SubmitHandler=(e)=>{
  e.preventDefault()
  if(!input) return
Router.push(`/search/${input}`)

}
  return (
    <>
    <form className='w-5rem p-2' onSubmit={SubmitHandler} >
    <input id='input' className='border rounded-xl h-8 ali  border-black w-[22rem] bg-white'  type="text" value={input} onChange={(e)=>setinput(e.target.value)}  />
    
    </form>
    <New/>
    </>
  )
}