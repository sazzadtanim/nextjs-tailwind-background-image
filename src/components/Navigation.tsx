import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='fixed flex w-full justify-center gap-10 bg-white/60 py-5 capitalize backdrop-blur-sm '>
      <Link href={'/svg_pattern'}>svg pattern</Link>
      <Link href={'/svg_full'}>svg full</Link>
      <Link href={'/png_full'}>png full</Link>
      <Link href={'/svg_blend'}>svg blend</Link>
    </div>
  )
}
