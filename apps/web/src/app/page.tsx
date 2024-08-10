'use client'
import { CarScene } from '@vagasaservice/3d/src/scenes/CarScene'
import { IconSearch } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] ">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <CarScene />
      </div>
      <div className="flex flex-col items-start space-y-2 font-black text-black text-6xl">
        <div className="z-10 inline-block px-3 bg-primary mt-2">Precisa</div>{' '}
        <div className="z-10 inline-block w-full max-w-md px-3 bg-primary ">
          estacionar ?
        </div>
        <Link
          href="/search"
          className="z-10 flex items-center gap-2 px-3 py-2 text-xl font-medium text-black underline underline-offset-4 bg-primary"
        >
          <IconSearch /> Encontre já a sua vaga!
        </Link>
      </div>
    </main>
  )
}