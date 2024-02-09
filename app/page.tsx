import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiLinkedin, SiX, SiWhatsapp } from 'react-icons/si'
export default function Home() {
  return (
    <div className='text-white px-2 md:px-10'>
      <div className='mt-4 md:mt-8'>
        <figure className='mx-auto md:hidden mt-2 relative h-60 w-72 p-5 '>
          <Image className="rounded-full opacity-90 object-cover" src='/me.jpg' fill alt="Aman Photo"></Image>
        </figure>
        <div className='flex'>
          <figure className='hidden md:block relative h-60 w-72 ml-20 mt-10 p-5'>
            <Image className="rounded-full opacity-90 object-cover" src='/me.jpg' fill alt="Aman Photo"></Image>
          </figure>

          <section className='container mt-10 md:mt-16 space-y-6 mx-auto '>
            <h1 className=' tracking-tight text-2xl text-center h-auto font-bold'>
              Hey, I'm Aman 👋
              <br />
              I'm a Full Stack engineer.
            </h1>
            <h2 className='text-gray-200 px-4 text-center tracking-tight font-normal text-lg md:px-16'>
              I love to network with like minded people and build products on Ai and web3.
            </h2>
            <h3 className='text-gray-300 px-4 text-center font-extralight text-xs md:text-sm md:px-16'>
              Tech Stack : Typescript , Nextjs , GraphQL , MongoDb , Nodejs , Expressjs , PostgreSql , Python , Java , Solidity , Golang
            </h3>
          </section>
        </div>
        {/*  */}
        <div className='mx-auto mt-10 space-y-10 font-light prose prose-gray prose-invert max-w-none'>
          <div>
            <p>
              Currently I am working on an edtech platform{" "}<Link className='underline text-amber-100 font-medium' href='/work#topdevs'>TopDevs</Link>{" 🚀 "}where developers can upskill in areas like frontend development, backend development and full-stack development. The platform is all inclusive where devs upskill, get ready for interviews by giving mock ai driven interviews, build cool, aesthetic and real world usecase driven projects, look for vetted job opportunities, compete in project leaderboards by getting featured and much more.
            </p>
          </div>
          <div className='-space-y-6'>
            <p>
              I have an innate passion for technology and spend most of my time building side projects (mostly saas) on ideas which I find interesting or have a real passion for.
            </p>
            <div className='space-y-2'>
              <h3>Some notable projects include :{" "}</h3>
              <h4>Web</h4>
              <span className='space-x-3 text-sm'>
                - <Link className="text-amber-100 font-medium" href='/work#nomadsfuel'>NomadsFuel</Link>
                <Link className="text-amber-100 font-medium" href='/work#playdex' >PlayDex</Link>
                <Link className="text-amber-100 font-medium" href='/work#nightspace' >NightSpace</Link>
                <Link className="text-amber-100 font-medium" href='/work#ideashub' >IdeasHub</Link>
              </span>
              <h4>Mobile</h4>
              <span className='space-x-3 text-sm'>
                - <Link className="text-amber-100 font-medium" href='/work#nomadsfuel'>NomadsFuel</Link>
              </span>
            </div>
          </div>
          <div className='-space-y-2'>
            <p>
              I create educational content for developers, teaching them about full-stack development, Ai and Web3. This comes in all forms: blog posts, videos, tweets etc. I like to keep things simple and minimal by following the 80-20 rule while learning and teaching to get the maximum output, as people can always learn the other stuff as required.
            </p>
            <h3>Notable blog posts to read:</h3>
          </div>

        </div>
        {/* Socials */}
        <div className='text-center w-full md:px-10 my-10'>
          <h1 className='text-xl font-semibold pb-5'>Connect</h1>
          <div className='flex text-white justify-center items-center flex-row gap-6 '>
            <Link className='hover:text-pink-600 text-pink-500 transition' href='https://www.instagram.com/amanagarwal.x/'><SiInstagram size={30} /></Link>
            <Link className='hover:text-green-600 text-green-500 transition' href='https://wa.me/7007829376'><SiWhatsapp size={30} /></Link>
            <Link className='hover:text-slate-400 text-slate-200 transition' href='https://github.com/amanx123'><SiGithub size={30} /></Link>
            <Link className='hover:text-slate-400 text-slate-200 transition' href='https://twitter.com/supertramp_aman'><SiX size={30} /></Link>
            <Link className='hover:text-sky-700 text-sky-600 transition' href='https://www.linkedin.com/in/amanx123/'><SiLinkedin size={30} /></Link>
          </div>
        </div>
      </div>

      {/* <footer className='text-center mx-auto flex items-end justify-center h-20 md:h-32 lg:h-48 pb-6 lg:pb-1'>
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
      </footer> */}
    </div>

  )
}
