import React from 'react'

const blogLists = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className='text-5xl font-semibold ml-5 mt-4 text-gray-500'>
            文章列表
          </h1>
          <div className="space-y-12 lg:grid ml-5 mt-8 lg:gap-x-6 lg:space-y-0">
            <div className="group relative flex">
              {/* 圖片容器 */}
              <div className="flex-none h-80 w-1/3 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="/sample1.jpg" alt="四個隔熱旅行瓶放在木架上的集合" className="h-full w-full object-cover object-center"></img>
              </div>
              {/* 文字容器 */}
              <div className="flex-1 ml-4">
                <h1 className="text-3xl text-gray-500">
                  基於YOLO模型訓練的車牌辨識方法
                </h1>
                <p className="text-base font-semibold ml-1 mt-4 text-gray-400">藉由使用YOLO模型訓練出的車牌偵測以及車牌字型辨識來達到車牌辨識效果</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blogLists