'use client'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../model/fetchData'

type User = {
  name: String;
  phoneNumber: String;
}

const autobiography = () => {

  const [users, setUsers] = useState<(User[])>([])

  const getAutobiography = async () => {
    const response = await fetchData('/hello', 'GET', null)
    if (response?.status === 200) {
      const data = await response.json()
      setUsers(data)
    }
  }

  useEffect(() => {
    getAutobiography()
  }, [])
  return (
    <div className=''>
      <div className='grid giid-cols-3 gap-4 mt-20'>
        <div className='place-self-center'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex space-x-6'>
              <div className='flex-3'>
                <img className="w-60 h-60 rounded-full" src="/selfie.jpg" />
              </div>
              <div className='grid grid-rows-2 grid-flow-col'>
                <div className='mt-1'>
                  <h1 className='text-4xl'>關於我</h1>
                  <p className='text-2xl w-52'>fsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default autobiography