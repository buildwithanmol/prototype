'use client'
import React, { useState } from 'react'
import DashboardForm from './dashboard-form';


const DashboardComponent = () => {
    const [imageString, setImageString] =  useState<string>('');
    const [currentImage, setCurrentImage] = useState<string>('')

    return (
        <div
            className=''
        >
                <div className='flex flex-col'>
                    <label htmlFor="image_link" className='text-sm text-gray-600'>Image URL <span className='text-sm text-gray-400'>(use unsplash images only)</span></label>
                    <div className='w-full flex gap-2 items-center'> 
                    <input type="text" id='image_link' className='border p-2 px-4 mt-2 flex-1 rounded-full' placeholder='Enter image url' onChange={(e) => {
                        setImageString(e.target.value)
                    }}  />
                    <button className='bg-gray-800 text-white px-4 py-2 rounded-full' onClick={() => {
                        setCurrentImage(imageString)
                    }} > Add Image</button>
                    </div>
                </div>
                <br />
                <hr />
                {currentImage.length > 0 && <DashboardForm image={currentImage} />}
        </div>
    )
}

export default DashboardComponent
