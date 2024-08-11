import Image from "next/image";
import Link from "next/link"
import data from "./daf-data.json" 
import DictLayout1 from "@/components/dict-layout-1";
import Menu from "@/components/menu";
import Header from "@/components/header";

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
      <Header />
      <div className="flex-1">
        <p>welcome to the dictionary of alternative families</p>
      </div>
      <Menu />

    </DictLayout1>

    </>

    
  )
}
