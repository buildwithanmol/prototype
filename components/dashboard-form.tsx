import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import interact from 'interactjs'
import cn from 'clsx';
import { Key } from 'lucide-react';

const DashboardForm = ({image}: {image: string}) => {
  const [maps, setMaps] = useState<{
    height: number;
    width: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number
  }[]>([])

  useEffect(() => {
    console.log(maps)
  }, [maps])

  return (
    <section>
      <div className='flex items-center justify-between py-4' >
      <h1 className='text-gray-600 text-sm' >Post Details</h1>
      <button className='text-sm text-gray-600 bg-slate-50 border rounded-full px-4 py-2' onClick={() => {
        setMaps((prev) => (
          [
            ...prev, {
              width: 200,
              height: 200,
              top: 0,  
              left: 0
            }
          ]
        ));

      }}
      >
        Add Map
      </button>
      </div>
      <div className='relative'>
      <Image 
        className='w-full relative'
        width={1920}
        height={1920}
        alt='Image'
        src={image}
      />
      {
        maps.map((item, index) => (
          <div style={{
            top: item.top,
            left: item.left,
            width: item.width,
            height: item.height,
            position: 'absolute',
            border: '2px solid red',
            boxSizing: 'border-box',
          }}
          className='absolute draggable-image'
          key={index}
          > 
          
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default DashboardForm