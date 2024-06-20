
import { getBySlug } from "../fetchcontent"


export default async function Knowledge({ params }: { params: { slug: string } }) {
    const blogFromSlug = await getBySlug(params.slug)
    const publishedAt = blogFromSlug?.frontmatter.publishedAt;
    const formattedDate = publishedAt ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(publishedAt)) : '';

    return (
        <div className="text-white mt-16 mx-auto px-1 text-center ml-5">
            <title>{blogFromSlug?.frontmatter.title}</title>
            <div className="flex items-center justify-between pr-6 ">
                <h1 className="text-3xl font-medium tracking-tight text-neutral-200 font-sans">{blogFromSlug?.frontmatter.title}</h1>
                <p className="text-sm text-neutral-500 font-sans">{formattedDate}</p>
            </div>
            <div className="prose prose-invert pb-8">
                <article className="text-start px-2">{blogFromSlug?.content}</article>
            </div>
        </div>
    )
}
