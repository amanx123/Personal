import { getAllBlogSlugs, getBlogBySlug } from "../fetchcontent"
import { Back } from "@/components/back";
import { ReportView } from "./ view";
import { Redis } from "@upstash/redis";
export const revalidate = 0;
const redis = Redis.fromEnv();
export default async function BlogPage({ params }: { params: { slug: string } }) {

    const blogFromSlug = await getBlogBySlug(params.slug)
    const views =
        (await redis.get<number>(['pageviews', 'blogs', params.slug].join(':'))) ??
        0;
    return (
        <>
            <ReportView slug={blogFromSlug.slug} />
            <title>{blogFromSlug.frontmatter.title}</title>
            <span className="flex items-start px-1 mb-4">
                <Back />
            </span>
            <div className="flex items-center justify-between pr-6 px-1">
                <h1 className="text-3xl font-medium tracking-tight text-neutral-200 font-sans">{blogFromSlug.frontmatter.title}</h1>
                <p className="text-sm text-neutral-500 font-sans">{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(blogFromSlug.frontmatter.publishedAt))}</p>
            </div>
            <p className="text-sm text-end mr-6 text-neutral-500 font-sans">{views} views</p>
            <div className="prose prose-invert px-1 pb-8">
                <article className="text-start px-2">{blogFromSlug.content}</article>
            </div>
        </>
    )
}
