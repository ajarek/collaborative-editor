import LogoutBtn from '@/components/LogoutBtn'
import Image from 'next/image'

const Logout = async ({ session }: any) => {
  return (
    <>
      {session ? (
        <LogoutBtn />
      ) : null}
      {session && (
        <Image src={session.user?.image} width={30} height={30} className="rounded-full" alt={'photo'} />
      )}
    </>
  )
}

export default Logout
