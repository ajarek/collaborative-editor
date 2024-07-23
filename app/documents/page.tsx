import { Room } from '@/components/Room'
import { Editor } from '@/components/Editor'
import React from 'react'

const Documents = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <Room>
        <Editor />
      </Room>
    </div>
  )
}

export default Documents
