import Link from "next/link"

type BlogCardProps = {
    title: string
    link?: string
}
export default function BlogCard({ title, link = '' }: BlogCardProps) {
    return (
        <Link target="_blank" href={link} className="h-auto border w-full lg:w-1/2 rounded-lg border-white p-4 bg-slate-300 bg-opacity-20 hover:bg-slate-400 hover:bg-opacity-20 transition-all">
            <h2 className="text-ellipsis items-center justify-center">
                {title}{".."}
            </h2>
        </Link>
    )
}