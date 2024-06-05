'use client'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../model/fetchData'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/src/components/ui/3d-card";
import Link from "next/link";

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

    <div className='container mx-auto mt-20'>
      <div className='flex justify-center'>
        <div className='flex space-x-6 max-w-4xl'>
          <div className='flex-shrink-0'>
            <img className="w-60 h-60 rounded-full object-cover" src="/selfie.jpg" alt="Profile" />
          </div>
          <div className='flex flex-col justify-center max-w-2xl'>
            <h1 className='text-4xl'>關於我</h1>
            <p className='text-xl break-words'>
              你好,我是一名後端工程師。專注於使用Flask開發後端API以及相關文檔。在工作之餘,我熱衷於健身和騎自行車,這些活動幫助我保持精力充沛和思緒清晰。此外我也是一位線上遊戲愛好者，目前正在玩《流亡黯道》(Path of Exile)。我還喜歡聽JPOP音樂，特別是Back Number，King Gnu，One OK Rock和菅田將暉的歌曲。歡迎與我交流,一起探索技術和生活的更多奧秘!
            </p>
          </div>
        </div>
      </div>
      <div className='columns-2'>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              圖片一
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sample1.JPG"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              圖片二
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sample1.JPG"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div className='columns-2'>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              圖片三
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sample1.JPG"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              圖片四
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sample1.JPG"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

export default autobiography