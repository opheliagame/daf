import Image from "next/image";
import Link from "next/link"
import data from "./daf-data.json" 
import DictLayout1 from "@/components/dict-layout-1";
import Menu from "@/components/menu";
import Header from "@/components/header";
import { Rock_3D } from "next/font/google";
import { INTRO_STRING } from "./constants";

const rock3d = Rock_3D({ weight: "400", subsets: ["latin"] })

interface DictItem {
  title: string
  content: string
}

// export default function Index({ params }: { params: { props: {list: DictItem[]} }}) { 
export default function Home() { 
  // const { list } = params.props


  return (
    <>
    <DictLayout1>
      {/* <Header /> */}
      <div className="flex-1">
        <div className={rock3d.className}>
          <div className="text-[64px] md:text-[72px] grid grid-cols-5 justify-items-center">
            {Array.from(INTRO_STRING).map((letter, index) => {
              const rLetter = Math.random() < 0.5 ? letter.toLowerCase() : letter.toUpperCase()
              return <span key={index}>{rLetter}</span>
            })}          

          </div>
        </div>
      </div>
      <Menu />

    </DictLayout1>

    </>

    
  )
}
