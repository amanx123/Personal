import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function Navbar() {
    return (
        <>
            <span className="h-12 font-light z-10 bg-[#111010] text-white bg-opacity-95 fixed top-0 p-4 mx-auto flex max-w-[950px] gap-48 w-full">
                <nav className='flex text-center justify-start items-center gap-2'>
                    <Link className='hover:bg-neutral-700 hover:bg-opacity-50  transition  p-1 px-2 rounded-xl' href='/'>home</Link>
                    <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition p-1 px-2 rounded-xl' href='/work'>work</Link>
                    <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition  p-1 px-2 rounded-xl' href='/blogs'>blog</Link>
                    <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition  p-1 px-2 rounded-xl' href='/knowledge'>knowledge</Link>
                    <Link className='hover:bg-neutral-700 hover:bg-opacity-50 transition  p-1 px-2 rounded-xl' href='/travel'>travel</Link>
                </nav>
                <div className="flex items-center gap-8">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="text-white hover:opacity-50" href="https://x.com/amanagarwalx" target="_blank">
                                    <TwitterIcon className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Twitter / X</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="text-white hover:text-gray-400" href="https://github.com/amanx123" target="_blank">
                                    <GithubIcon className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="text-white hover:text-gray-400" href="https://linkedin.com/in/amanagarwalx" target="_blank">
                                    <LinkedinIcon className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="text-white hover:text-gray-400" href="https://youtube.com/@amanagarwalx" target="_blank">
                                    <YoutubeIcon className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>YouTube</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="text-white hover:text-gray-400" href="mailto:amanagarwalx1@gmail.com" target="_blank">
                                    <MailIcon className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Email</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </span>
        </>
    )
}


function GithubIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}



function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function MailIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function RocketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}


function TwitterIcon(props: any) {
    return (
        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMi4zNjcxOSwzbDcuMDk1NywxMC4xNDA2M2wtNi43MjI2Niw3Ljg1OTM4aDIuNjQwNjNsNS4yNjM2NywtNi4xNjk5Mmw0LjMxNjQxLDYuMTY5OTJoNi45MTAxNmwtNy40MjE4NywtMTAuNjI1bDYuMjkxMDIsLTcuMzc1aC0yLjU5OTYxbC00Ljg2OTE0LDUuNjg3NWwtMy45NzI2NiwtNS42ODc1ek02LjIwNzAzLDVoMi4wNDg4M2w5Ljc3NzM0LDE0aC0yLjAzMTI1eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==" />
    )
}



function YoutubeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}