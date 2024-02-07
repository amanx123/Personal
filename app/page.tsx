import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiWhatsapp } from 'react-icons/si'
export default function Home() {
  return (
    <div className='text-white'>
      <div className='mt-4 md:mt-12'>
        <figure className='mx-auto md:hidden mt-2 relative h-60 w-72 p-5 '>
          <Image className="rounded-full opacity-90 object-cover" src='/me.jpg' fill alt="Aman Photo"></Image>
        </figure>
        <div className='flex'>
          <figure className='hidden md:block relative h-60 w-72 ml-20 mt-10 p-5'>
            <Image className="rounded-full opacity-90 object-cover" src='/me.jpg' fill alt="Aman Photo"></Image>
          </figure>

          <section className='container mt-16 space-y-6 mx-auto '>
            <h1 className=' tracking-tight text-2xl text-center h-auto font-bold'>
              Hey, I'm Aman 👋
              <br />
              I'm a Full Stack engineer.
            </h1>
            <h2 className='text-gray-200 px-4 text-center tracking-tight font-normal text-lg md:px-16'>
              I love to network with like minded people and building products on Ai and web3.
            </h2>
            <h3 className='text-gray-200 px-4 text-center font-extralight text-xs md:text-sm md:px-16'>
              Tech Stack : Typescript , Nextjs , GraphQL , MongoDb , Nodejs , Expressjs , PostgreSql , Python , Java , Solidity , Golang
            </h3>
          </section>
        </div>
        <div className='flex p-10 mx-auto gap-20 md:space-x-0 '>
          <div className='w-1/2 md:ml-10 text-lg space-y-2 font-medium'>
            <h1 className='font-bold '>📍 India (earth)</h1>
            <h1 className=''>🖥 Currently working on Full Stack Ai products.</h1>
            <h1 className=''>👥 Open to opportunities ~ contract/fulltime</h1>
            <h2 className='flex-wrap'>😸 Please don't hesitate to reach out, I can also work for free or future equity if the product excites me!
            </h2>
          </div>
          <div className='text-center w-1/2 md:px-10'>
            <h1 className='text-lg font-semibold pb-5'>Socials</h1>
            <div className='flex text-white justify-center items-center flex-col md:flex-row gap-6 '>
              <Link className='hover:text-pink-600 text-pink-500 transition' href='https://www.instagram.com/amanagarwal.x/'><SiInstagram size={30} /></Link>
              <Link className='hover:text-green-600 text-green-500 transition' href='https://wa.me/7007829376'><SiWhatsapp size={30} /></Link>
              <Link className='hover:text-slate-400 text-slate-200 transition' href='https://github.com/amanx123'><SiGithub size={30} /></Link>
              <Link className='hover:text-cyan-400 text-cyan-300 transition' href='https://twitter.com/supertramp_aman'><SiTwitter size={30} /></Link>
              <Link className='hover:text-sky-700 text-sky-600 transition' href='https://www.linkedin.com/in/amanx123/'><SiLinkedin size={30} /></Link>
            </div>
          </div>
        </div>
      </div>
      <footer className='text-center mx-auto flex items-end justify-center h-20 md:h-32 lg:h-48 pb-6 lg:pb-1'>
        <h1 className='absolute text-md'>
          I am an avid reader , currently reading ~{" "}
          <Link className='bg-slate-800 rounded-lg p-2 hover:bg-slate-700 transition' target="_blank" href='https://en.wikipedia.org/wiki/Zero_to_One'>
            Zero to One
          </Link>
        </h1>
        <h1 className='hidden lg:flex absolute right-20 text-xl font-semibold hover:underline hover:text-gray-300'>
          <Link className='' href='mailto:amanagarwalx123@gmail.com' target='_blank'>
            {'--> '}Contact me..
          </Link>
        </h1>
      </footer>
    </div>

  )
}
// footer alteration remains