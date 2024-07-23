import { Button } from '@/components/ui/button'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { Plus, FileText, Trash2 } from 'lucide-react'
import Link from 'next/link'


export default async function Home() {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 max-sm:px-4 gap-8">

      <div className="w-3/4 max-lg:w-full flex flex-wrap  justify-between max-sm:justify-center items-center">
        <h1 className="text-3xl font-bold">All documents</h1>
        <Link href='/documents' className="flex gap-2 bg-primary px-4 py-1 rounded-sm  text-white">
          <Plus />
          Start a blank document
        </Link>
      </div>
      <div className="w-3/4 max-lg:w-full flex flex-col gap-4">
        <div className="flex justify-between items-center bg-secondary p-4 rounded-md">
          <div className='flex items-center gap-6 '>
            <FileText className='text-primary text-3xl ' size={36} />
            <div>
              <h1 className="text-xl font-semibold">Untitled</h1>
              <p>Created about 38 minutes ago</p>
            </div>
          </div>
          <Trash2 className='text-destructive text-3xl ' size={36}/>
        </div>
        <div className="flex justify-between items-center bg-secondary p-4 rounded-md">
          <div className='flex items-center gap-6 '>
            <FileText className='text-primary text-3xl ' size={36}  />
            <div>
              <h1 className="text-xl font-semibold">Untitled</h1>
              <p>Created about 38 minutes ago</p>
            </div>
          </div>
          <Trash2 className='text-destructive text-3xl ' size={36}  />
        </div>
      </div>
      
    </main>
  )
}
