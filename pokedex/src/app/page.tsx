import Image from 'next/image'
import { TypeTag } from "./components/typetag/typetag";


export default function Home() {
  return (
    <div>
      <div className='searchBar'>
      <Image className='searchImage' alt='search icon' width={24} height={24} src='/search.svg'></Image>
      <input className='input' placeholder='search'></input>
      </div>
      <TypeTag typeName={"grass"} />

    </div>
  )
}
