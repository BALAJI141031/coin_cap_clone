import Link from 'next/link'
interface props {
    path: string
    text:React.ReactNode
}

const HeaderLink = ({ path,text}:props) => {
  return (
      <Link href={path} className='text-base'><div>
      {text}
      </div></Link>
  )
}

export default HeaderLink