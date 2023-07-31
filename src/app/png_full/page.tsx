import Image from 'next/image'
import bg2 from '@svg/stacked-waves.svg'
import capture from '@png/capture2.png'

export default function Home() {
  return (
    <main className='py-10'>
      {/* background */}
      <Image
        alt='background'
        src={bg2}
        className='absolute top-0 -z-10 h-full w-full object-cover'
      />
      <div className='prose mx-auto px-2 text-white'>
        <h1 className='py-10 text-center font-mono capitalize text-white lg:whitespace-nowrap'>
          Single svg as background
        </h1>
        <div>
          <ol className='list-decimal marker:text-white'>
            <li>Add svg in nextjs image component.</li>
            <li>
              In image component add negative z index to make it background
            </li>
            <li>
              In image component use object-cover, object-contain etc object
              property.
            </li>
            <li>Give image component widht and height to use object-cover</li>
          </ol>
          <Image alt='image component' src={capture} />
        </div>
        <pre>
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
