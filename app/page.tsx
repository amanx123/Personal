import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='text-white px-2 md:px-10 mb-10'>

      <div className='mt-8'>
        <figure className='mx-auto md:hidden relative mt-2 h-40 w-40 p-5 '>
          <Image className="rounded-full opacity-90 object-cover" src='/me.jpg' fill alt="Aman Photo"></Image>
        </figure>
        <div className='flex ml-10 mt-12 justify-between'>
          <figure className='hidden md:block relative h-52 w-72 mt-16 '>
            <Image className="rounded-full opacity-90 object-cover" src='/me.jpg' fill alt="Aman Photo"></Image>
          </figure>

          <section className='container space-y-4 mt-4'>

            <h1 className='animate-fade-up tracking-wide text-3xl text-center h-auto font-bold'>
              Aman Agarwal 👋
              <br />
              <span className='text-xl font-normal text-neutral-500'>Entrepreneur, Full Stack engineer and Ai Enthusiast.</span>
            </h1>
            <h2 className='text-neutral-300 px-4 text-center tracking-tight font-normal text-md md:px-16'>
              I like to build stuff, talk about startups and open-source projects. I also love travelling and photography!
            </h2>
            <h3 className='px-4 text-center font-semibold md:text-lg md:px-16 '>
              Tech stack i like working with :
              <ul className='animate-fade-up font-semibold flex flex-row gap-3 mt-2'>
                <li className='text-blue-600'>Typescript</li>
                <li className='text-blue-400'>Go</li>
                <li className='text-blue-200'>Python</li>
                <li className='text-red-400'>Java</li>
                <li className='text-zinc-400'>Nextjs</li>
              </ul>
            </h3>
          </section>
        </div>
        {/*  */}
        <main className='mx-auto mt-8 max-w-none'>
          <div className=''>
            <p>
              I have an innate passion for technology and spend most of my time building projects (mostly saas) on problem solving ideas which I find interesting or have a real passion for.
            </p>
            {/* Work Stuff */}
            <div className='space-y-2 mt-8 w-full'>
              <h2 className='text-2xl font-semibold'>Work</h2>
              <div className='flex items-center h-28 justify-start cursor-pointer rounded-lg hover:bg-neutral-800 pr-2'>
                <Image className='ml-4 rounded-lg' src="/topdevs.png" width={50} height={50} alt="Topdevs"></Image>
                <span className='ml-4 flex flex-col p-2 gap-2'>
                  <h3 className='font-medium text-base text-amber-100'>TopDevs 🚀</h3>
                  <p className='text-sm'>The best practical and gamified learning platform ever for developers to upskill in areas like frontend development, backend development and full-stack development. </p>
                </span>
              </div>
              <div className='card flex items-center justify-start h-28 cursor-pointer rounded-lg hover:bg-neutral-800 pr-2'>
                <Image className='ml-4 rounded-lg' src="/nomadsfuel.png" width={50} height={50} alt="Nomadsfuel"></Image>
                <span className='ml-4 flex flex-col p-2 gap-2'>
                  <h3 className='font-medium text-base text-amber-100'>Nomadsfuel 🎒</h3>
                  <p className='text-sm'>The best social travel platform for solo travelers looking for group trips and to make like-minded connections by traveling together. </p>
                </span>
              </div>
              <div className='card flex items-center justify-start h-28 cursor-pointer rounded-lg hover:bg-neutral-800 pr-2'>
                <Image className='ml-4 rounded-lg' src="/devlance.png" width={50} height={50} alt="Devlance "></Image>
                <span className='ml-4 flex flex-col p-2 gap-2'>
                  <h3 className='font-medium text-base text-amber-100'>Devlance 🧑🏻‍💻</h3>
                  <p className='text-sm'>A freelancing SaaS marketplace for developers and businesses to connect and collaborate on projects. </p>
                </span>
              </div>
              <Link href="/work" className="flex justify-end p-2">
                <p className="group gap-2 flex items-center text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 text-base">
                  All Work
                  <span>
                    <img
                      src="/right-arrow.svg"
                      width={15}
                      height={15}
                      alt="Right Arrow"
                      className="group-hover:translate-x-2 transition-transform duration-200 ease-in-out"
                    />
                  </span>
                </p>
              </Link>
            </div>
            {/* Writing Stuff*/}
            <div className='space-y-2 w-full'>
              <h2 className='text-2xl font-semibold'>Writing</h2>
              <div className='flex items-center h-16 justify-start cursor-pointer rounded-lg hover:bg-neutral-900 pr-2'>
                <span className='ml-4 flex flex-col p-2 gap-2'>
                  <h3 className='font-medium text-base text-amber-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                </span>
              </div>
              <Link href="/blogs" className="flex justify-end p-2">
                <p className="group gap-2 flex items-center text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 text-base">
                  All Blogs
                  <span>
                    <img
                      src="/right-arrow.svg"
                      width={15}
                      height={15}
                      alt="Right Arrow"
                      className="group-hover:translate-x-2 transition-transform duration-200 ease-in-out"
                    />
                  </span>
                </p>
              </Link>

            </div>
          </div>
        </main>
      </div >
    </div >

  )
}
