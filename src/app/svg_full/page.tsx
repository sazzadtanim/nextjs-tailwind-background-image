import capture from '@png/capture2.png'
import bg2 from '@svg/stacked-waves.svg'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Single svg as background',
  description: 'Nextjs tailwindcss bacground image implementations',
  creator: 'SazzadTanim',
}

export default function Home() {
  return (
    <main className=''>
      {/* background */}
      <Image
        alt='background'
        src={bg2}
        className='absolute top-0 -z-10 h-full w-full object-cover'
      />
      <div className='prose mx-auto px-2 text-white'>
        <h1 className='mx-auto text-center font-mono lowercase text-white first-letter:capitalize lg:whitespace-nowrap'>
          Single svg as background
        </h1>
        <div>
          <ol className='list-decimal marker:text-white'>
            <li className='lowercase first-letter:capitalize'>
              Add svg in nextjs image component.
            </li>
            <li className='lowercase first-letter:capitalize'>
              In image component add negative z index to make it background
            </li>
            <li className='lowercase first-letter:capitalize'>
              In image component use object-cover, object-contain etc object
              property.
            </li>
            <li className='lowercase first-letter:capitalize'>
              Give image component widht and height to use object-cover
            </li>
          </ol>
          <Image alt='image component' src={capture} />
        </div>
        <pre className='text-xs'>
          {`<Image
        alt='background'
        src={bg2}
        className='absolute top-0 -z-10 h-full w-full object-cover'
      />`}
        </pre>
      </div>
    </main>
  )
}
