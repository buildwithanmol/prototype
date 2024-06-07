import DashboardComponent from '@/components/dashboard-component'
import { Metadata } from 'next'
import React from 'react'

const DashboardPage = () => {
  return (
    <main className='max-w-screen-xl mx-auto border-l border-r py-10 px-16'>
        <h1 className='text-2xl capitalize font-light'>Create a post</h1>
        <p className='text-gray-600 text-sm'>Create and publish your post with area mapping functionality.</p>
        <br />
        <hr />
        <br />
        <DashboardComponent/>
    </main>
  )
}

export default DashboardPage

export const metadata: Metadata = {
    title: "Dashboard Page | Create Post"
}