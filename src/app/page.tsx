import { db } from '@/db'
import Link from 'next/link'
import React from 'react'

const HomePage = async () => {

  const snipptes = await db.snippet.findMany()

  const renderSnippets = snipptes.map((snippet) => (

    <Link
      href={`snippet/${snippet.id}`}
      key={snippet.id}
      className='flex border rounded justify-between items-center p-2'>
      <div>{snippet.title}</div>
      <div>View</div>

    </Link>



  ))
  return (

    <div>
      <div className='flex justify-between items-center m-3'>
        <h1 className='font-bold text-xl '>Snipet</h1>
        <Link href={`snippet/new`}
          className='border rounded p-2'>New Snipet</Link>
      </div>

      <div className='flex gap-2  flex-col m-4' >{renderSnippets}</div>
    </div>
  )
}

export default HomePage