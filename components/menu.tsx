"use client"
import Link from "next/link"
import dictionary from "../app/daf-data.json" 
import { useState } from "react"

type DictItem = {
  slug: string;
  title: string;
  content: string;
}


export default function Menu() {
  const uniqueLetters = Array.from(new Set(dictionary.map(item => item.title[0].toUpperCase()))).sort()
  const [connectedItems, setConnectedItems] = useState<DictItem[] | undefined>(undefined)

  function handleDIndexClick(letter: string) {
    const result = dictionary.filter(item => item.title[0].toLowerCase() === letter.toLowerCase())
    setConnectedItems(result)
  }

  return (
    <>
    <div >
      <div className="flex flex-row flex-nowrap items-center overflow-x-auto gap-x-2 px-2">
        {connectedItems?.map((item, index) => {
          const href = item.title.toLowerCase().replaceAll(' ', '-')

          return <Link href={`/d/${href}`} key={index} className="flex-1">
            <p 
              key={index} 
              className="">
                {item.title}
            </p>

          </Link>
          
        })}
      </div>

      <div className="flex flex-row flex-nowrap items-center overflow-x-auto gap-x-2 px-2">
        {uniqueLetters.map((letter, index) => 
          <span 
            key={index} 
            onClick={() => handleDIndexClick(letter)}
            className="">
              {letter}
          </span>
        )}

      </div>
    </div>
    
    </>



      // {/* {dictionary.map(d => {
      //   // const headerTitle = d.title[0].toUpperCase()
      //   const headerTitle = d.title.toLowerCase()
      //   const firstLetter = d.title[0]

      //   const href = d.title.toLowerCase().replaceAll(' ', '-')

      //   return (
      //   <div key={d.title} className="text-sm "
      //   style={{ writingMode: 'vertical-rl' }}
      //   >
      //     <Link href={`/d/${href}`}>{headerTitle}</Link>
      //   </div>
      //   )
      // })} */}
  )
}

