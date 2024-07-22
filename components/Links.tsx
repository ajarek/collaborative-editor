'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = () => {
  const pathname = usePathname()
  return (
    <div className='max-lg:hidden w-full flex items-center justify-between  '>
      <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >

       <Image src='/images/logo.png' alt='' width={40} height={40} />
        <h1 className='font-semibold text-xl text-[#2563eb] capitalize '>
         LiveDocs
        </h1>
      </Link>

      <div className='flex items-center gap-8 mr-4 '>
       
      </div>
    </div>
  )
}

export default Links
