"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export function AllKnowledge({ allBlogs }: any) {
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
    const filteredPosts = tag ? allBlogs.filter((post: any) => post.frontmatter.tag.includes(tag)) : allBlogs
    return (
        <div className="mx-auto">
            <h2 className="font-bold text-4xl text-white">
                Collection of notes, thoughts, and learnings. Updated regularly.
            </h2>

            <div className="px-2 items-center justify-start my-6 flex flex-row space-x-4 text-base overflow-x-auto line-clamp-1">
                <Link
                    href="/knowledge"
                    className={`${tag === null ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    All
                </Link>
                <Link
                    href="/knowledge?tag=books"
                    className={`${tag === "books" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    books
                </Link>
                <Link
                    href="/knowledge?tag=entrepreneurship"
                    className={`${tag === "entrepreneurship" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    entrepreneurship
                </Link>
                <Link
                    href="/knowledge?tag=miscellaneous"
                    className={`${tag === "miscellaneous" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    miscellaneous
                </Link>
                <Link
                    href="/knowledge?tag=people"
                    className={`${tag === "people" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    people
                </Link>
                <Link
                    href="/knowledge?tag=philosophy"
                    className={`${tag === "philosophy" ? 'text-neutral-300 underline -translate-y-0.5 transform duration-200' : 'text-neutral-500'} hover:text-neutral-400 transition duration-200 hover:underline`}
                >
                    philosophy
                </Link>
            </div>
            <main className="justify-center items-start flex flex-col gap-2">
                {filteredPosts.map((post: any) => (
                    <Link
                        href={`/knowledge/${post.slug}`}
                        key={post.slug}
                        className="w-full rounded-lg hover:bg-neutral-800 transition duration-150 px-2 py-3 flex justify-between items-center"
                    >
                        <h1 className="text-lg font-normal w-[80%] text-neutral-200">{post.frontmatter.title}</h1>
                        <h2 className="text-sm text-neutral-500 w-[20%] text-end" >{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.frontmatter.publishedAt))}</h2>
                    </Link>
                ))}
            </main>
        </div>
    )
}

export default AllKnowledge
