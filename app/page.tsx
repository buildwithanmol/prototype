import { Metadata } from 'next'
import React from 'react'

const HomePage = () => {
  return (
   <div className='text-center h-screen flex items-center justify-center flex-col gap-5'>
     <h1>  Welcome to E-Newspaper's Prototype</h1> 
     <p> Hit <code className='bg-gray-100 text-sm text-gray-600 px-2 rounded-sm py-1'>/dashboard</code> to get started. </p>
   </div>
  )
}

export default HomePage

export const metadata: Metadata = {
  title: "E-Newspaper Home "
}