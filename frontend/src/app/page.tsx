'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import fetchData from '../../model/fetchData'

const HomePage = () => {

  const getApiData = async () => {
    const response = await fetchData('/hello', 'GET', null)
    if (response?.status === 200) {
      const data = await response.json()
      console.log(data)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className="min-h-full">
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-500">選擇一個分類來看吧!</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="/sample1.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"></img>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href="/blogLists">
                    <span className="absolute inset-0"></span>
                    工程師日常
                  </ Link>
                </h3>
                <p className="text-base font-semibold text-gray-500">紀錄平常生活的大小事</p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="/sample2.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"></img>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    遊戲日常
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-500">分享近期遊戲心得</p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="/sample3.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"></img>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    貓咪日常生活(曬貓咪)
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-500">沒錯就跟標題一樣曬貓咪XD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default HomePage