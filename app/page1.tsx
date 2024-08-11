import Image from "next/image";
import Link from "next/link"
import data from "../app/daf-data.json" 
import Header from "@/components/header";

interface DictItem {
  title: string
  content: string
}

// export default function Index({ params }: { params: { props: {list: DictItem[]} }}) { 
export default function Index() { 
  // const { list } = params.props

  return (
    <>
    <Header />
    
    <div>
      <p>welcome to the dictionary of alternative families</p>
    </div>
    </>
    
    // <div>
    //   {data.map(d => {
    //     const href = d.title.toLowerCase().replaceAll(' ', '-')

    //     return <>
    //     <div key={d.title} className="text-sm">
    //       {/* <p key={d.title}>{d.content}</p> */}

    //       {/* <a href="/">{d.title}</a> */}

          

    //       <Link href={`/d/${href}`}>{d.title}</Link>
    //     </div>
    //     </>
    //   })}
    // </div>
  )
}

// export async function getStaticProps() {
//   console.log("here")
//   const data = import("../app/daf-data.json")

//   console.log({
//     params: data
//   })

//   return {
//     params: data
//   }
// }