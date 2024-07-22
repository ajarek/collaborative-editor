'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden"
      >
        <SheetHeader>
          <Link
            href="/"
            className="flex items-center gap-2 max-sm-gap-1"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
            />
            <h1 className="font-semibold text-xl text-[#2563eb] capitalize ">
              LiveDocs
            </h1>
          </Link>
        </SheetHeader>
        
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
