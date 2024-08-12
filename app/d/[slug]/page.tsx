import { GetStaticPaths } from "next";
import data from "../../daf-data.json";
import DictLayout1 from "@/components/dict-layout-1";
import Menu from "@/components/menu";
import Header from "@/components/header";


export default function Page({ params }: { params: { slug: string } }) {
  const item = data.find(d => d.slug == params.slug)
  
  return (
    <>

    <DictLayout1>
      <Header />
      <div className="italic flex-1 overflow-y-auto">
        <p>{item?.title}</p>
        <p>{item?.content}</p>
        
      </div>
      <Menu />

    </DictLayout1>

    </>
  )
  
}


export const generateStaticParams = (() => {
  return data.map((d) => ({
    slug: d.slug
  }))
})

// export const getStaticPaths = (async () => {
//   return {
//     paths: data.map((d) => {
//       return {
//         params: {
//           slug: d.slug,
//         },
//       };
//     }),
//     fallback: true,
//   };
// }) satisfies GetStaticPaths;

// type Params = {
//   params: {
//     slug: string
//   }
// }

// export async function getStaticProps({ params }: Params) {
//   const item = data.find(d => d.slug === params.slug)

//   return {
//     props: item
//   }
// }
