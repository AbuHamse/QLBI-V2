import Image from "next/image"
import Link from "next/link"
import RootLayout from "./layout"
import HeroComponent from "./component/HeroComponent"

export default function Home() {
  return (
   <>
    <RootLayout>
      <HeroComponent/>
    </RootLayout>

   </>
  )
}

