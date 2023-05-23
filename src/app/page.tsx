import Image from 'next/image'
import { useState } from 'react'

export default async function Home() {
  await fetch('ENDPOINT', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then((res) => {
    console.log(res)
  })
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        HELLO
      </div>
    </main>
  )
}
