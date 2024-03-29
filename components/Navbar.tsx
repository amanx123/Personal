import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className='h-12 w-full font-light z-10 bg-[#111010] text-white bg-opacity-95 sticky top-0 text-lg mt-4 mx-auto flex text-center justify-center items-center gap-2 md:gap-20'>
                <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition duration-200 p-1 px-4 rounded-xl' href='/'>home</Link>
                <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition duration-200 p-1 px-4 rounded-xl' href='/work'>work</Link>
                <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition duration-200 p-1 px-4 rounded-xl' href='/blogs'>blog</Link>
            </nav>
        </>
    )
}