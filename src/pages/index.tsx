import Link from 'next/link'
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Header title="Custom Header Title"/>

      <Link href='/StyledPage'>Go To Styled Page</Link>
    </>
  )
}

