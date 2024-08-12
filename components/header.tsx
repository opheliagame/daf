import { INTRO_STRING } from "@/app/constants";
import { Rock_3D } from "next/font/google";
import Link from "next/link";

const rock3d = Rock_3D({ weight: "400", subsets: ["latin"] })


export default function Header() {
  return (
    <Link href="/">
      <div className={rock3d.className}>
        <div className="flex flex-row text-3xl">
          {/* {Array.from(INTRO_STRING).map((letter, index) => <span key={index}>{letter}</span>)}           */}
          <p>{INTRO_STRING}</p>    

        </div>
      </div>
    
    </Link>
    
    
  )

}