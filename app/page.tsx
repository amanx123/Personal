import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiWhatsapp, SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si'
export default function Home() {
  return (
    <div className=''>
      <nav className='h-20 bg-black z-10 bg-opacity-90 sticky top-0 sm:min-w-sm text-xl font-semibold mt-6 w-full mx-auto flex justify-center items-center px-4 gap-2 md:gap-20'>
        <Link className='hover:bg-zinc-800 hover:bg-opacity-60 transition duration-200 p-2 px-4 rounded-xl' href='/projects'>Projects</Link>
        <Link className='hover:bg-zinc-800 hover:bg-opacity-60 transition duration-200 p-2 px-4 rounded-xl' href='/blogs'>Blogs</Link>
        <Link className='bg-zinc-700 bg-opacity-40 hover:bg-zinc-800 transition duration-200 p-2 px-4 rounded-xl min-w-fit' href='mailto:amanagarwalx123@gmail.com'>Contact Me</Link>
      </nav>
      <figure className='mx-auto md:hidden mt-2 relative h-60 w-72 p-5 animate-pulse '>
        <Image className="rounded-full opacity-90 object-cover" src='/hero.png' fill alt="Hero Figure"></Image>
      </figure>
      <div className='flex'>
        <figure className='hidden md:block relative h-60 w-72 ml-20 mt-10 p-5 animate-pulse '>
          <Image className="rounded-full opacity-90 object-cover" src='/hero.png' fill alt="Hero Figure"></Image>
        </figure>

        <section className='container mt-10 space-y-6 mx-auto '>
          <div className='text-gray-100 text-4xl text-center tracking-tighter font-mono font-bold h-auto '>
            Hi 👋 I'm Aman!
            <br />
            I'm a Full Stack engineer.
          </div>
          <div className='px-4 text-center font-medium font-mono text-xl h-auto md:px-16'>
            I love to network with like minded people and discuss building products on AI and blockchain.
          </div>
          <div className='px-4 text-center font-light text-xs md:text-base h-auto md:px-16'>
            Fav Tech Stack : Typescript , Nextjs , GraphQL , MongoDb , Nodejs , Expressjs , PostgreSql , Python , Java , Solidity , Web3
          </div>
        </section>
      </div>
      <div className='flex p-10 mx-auto gap-20 md:space-x-0 '>
        <div className='w-1/2 md:ml-10 text-lg space-y-2'>
          <h1 className='font-bold '>📍 India (earth)</h1>
          <h1 className='font-medium'>🖥 Currently working on an AI saas</h1>
          <h1 className='font-medium'>👥 Open to opportunities ~ contract/fulltime</h1>
          <h2 className='font-mono tracking-tighter font-medium flex-wrap'>😸 Please don't hesitate to reach out, I can also work for free or future equity if the product excites me!
          </h2>
        </div>
        <div className='text-center w-1/2 md:px-10'>
          <h1 className='text-lg font-semibold pb-5'>Socials</h1>
          <div className='flex text-white justify-center items-center flex-col md:flex-row gap-6 '>
            <Link className='hover:text-pink-600 text-pink-500 transition' href=''><SiInstagram size={30} /></Link>
            <Link className='hover:text-green-600 text-green-500 transition' href=''><SiWhatsapp size={30} /></Link>
            <Link className='hover:text-slate-400 text-slate-200 transition' href=''><SiGithub size={30} /></Link>
            <Link className='hover:text-cyan-400 text-cyan-300 transition' href=''><SiTwitter size={30} /></Link>
            <Link className='hover:text-sky-700 text-sky-600 transition' href=''><SiLinkedin size={30} /></Link>
          </div>
        </div>
      </div>
      <footer className='hidden w-full h-10 md:flex justify-center px-10'>
        <h1 className='absolute bottom-5 text-md'>
          I am an avid reader , currently reading ~{" "}
          <Link className='bg-slate-800 rounded-lg p-2 hover:bg-slate-700 transition' target="_blank" href='https://en.wikipedia.org/wiki/Zero_to_One'>
            Zero to One
          </Link>
        </h1>
        <h1 className='absolute bottom-5 right-20 text-xl font-semibold hover:underline hover:text-gray-300'>
          <Link className='' href='mailto:amanagarwalx123@gmail.com' target='_blank'>
            {'--> '}Contact me..
          </Link>
        </h1>
      </footer>
    </div>

  )
}
