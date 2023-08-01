import Image from 'next/image'
import capture1 from '@png/capture3.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'css gradient as background',
  description: 'Nextjs tailwindcss bacground image implementations',
  creator: 'SazzadTanim',
}

export default function Home() {
  return (
    <main className='h-screen w-screen bg-radial_gradient bg-contain py-10'>
      <div className='prose mx-auto px-2  text-white'>
        <h1 className='mx-auto py-10 text-center font-mono lowercase text-white first-letter:capitalize lg:whitespace-nowrap'>
          css gradient as background
        </h1>
        <div>
          <ol className='marker:text-white'>
            <li className='lowercase first-letter:capitalize'>
              <span>
                Add radial gradients in tailwind.config.js as background image.
              </span>
              <Image alt='' src={capture1} />
            </li>

            <li className='lowercase first-letter:capitalize'>
              Add width and height.{' '}
            </li>
            <li className='lowercase first-letter:capitalize'>
              Add bg-my_bg in className.{' '}
            </li>
          </ol>
        </div>
        <pre className='text-xs'>
          {`<main className='h-screen w-screen bg-my_bg bg-contain py-10'>`}
        </pre>
      </div>
    </main>
  )
}