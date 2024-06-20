"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Blogs({ allPosts, views }: any) {

    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
    const filteredPosts = tag ? allPosts.filter((post: any) => post.frontmatter.tag.includes(tag)) : allPosts

    return (
        <div className=' mx-auto pb-8'>
            <h1 className=" text-start text-4xl font-bold">All Blogs</h1>
            <div className="px-4 items-center  justify-start my-6 flex flex-row space-x-4 text-sm overflow-x-auto line-clamp-1">
                <Link
                    href="/blogs"
                    className={`${tag === null ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    All
                </Link>
                <Link
                    href="/blogs?tag=technical"
                    className={`${tag === 'technical' ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    Technical
                </Link>
                <Link
                    href="/blogs?tag=ai"
                    className={`${tag === 'ai' ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    Ai
                </Link>
                <Link
                    href="/blogs?tag=personal"
                    className={`${tag === "personal" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    Personal
                </Link>
                <Link
                    href="/blogs?tag=experiments"
                    className={`${tag === "experiments" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    Experiments
                </Link>

            </div>
            <main className=" justify-center items-start flex flex-col gap-2 text-white">

                {filteredPosts.map((post: any) => (
                    <Link href={`/blogs/${post.slug}`} key={post.slug} className="w-full rounded-lg text-start hover:bg-neutral-800 transition duration-150 px-4 py-3 flex justify-between items-center">
                        <h2 className="text-lg text-neutral-200 font-normal w-[70%]">{post.frontmatter.title}</h2>
                        <h2 className="w-[10%] text-neutral-500 text-sm">{Intl.NumberFormat('en-US', {
                            notation: 'compact',
                        }).format(views[post.slug])}{' '}
                            {' views'}</h2>
                        <span className="text-sm text-neutral-500 w-[20%] text-end">
                            <h2>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.frontmatter.publishedAt))}</h2>
                        </span>
                    </Link>
                ))}
            </main>
        </div>
    )
}