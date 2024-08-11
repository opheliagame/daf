
import Link from "next/link"
import data from "../app/daf-data.json" 


export default function Menu() {
  return (
    <div className="h-32 flex flex-row flex-nowrap items-center overflow-x-auto gap-x-2"
      // style={{ writingMode: 'vertical-rl' }}
    >

      {data.map(d => {
        // const headerTitle = d.title[0].toUpperCase()
        const headerTitle = d.title.toLowerCase()

        const href = d.title.toLowerCase().replaceAll(' ', '-')

        return (
        <div key={d.title} className="text-sm "
        style={{ writingMode: 'vertical-rl' }}
        >
          {/* <p key={d.title}>{d.content}</p> */}

          {/* <a href="/">{d.title}</a> */}

          

          <Link href={`/d/${href}`}>{headerTitle}</Link>
        </div>
        )
      })}
    </div>
  )
}

