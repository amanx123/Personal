import { Metadata } from 'next';
import Blogs from "./blogs";
import { getAllBlogs } from "./fetchcontent";
import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export const metadata: Metadata = {
    title: 'Blog | Aman Agarwal',
    description: "Technical articles and blogs by Aman Agarwal"
};
export const revalidate = 0;
export default async function BlogsPage() {
    const allBlogs = await getAllBlogs()
    const publishedBlogs = allBlogs.filter((blog) => blog.frontmatter.isDraft === 'false')
    const views = (
        await redis.mget<number[]>(
            ...publishedBlogs.map((p) => ['pageviews', 'blogs', p.slug].join(':')),
        )
    ).reduce(
        (acc, v, i) => {
            acc[publishedBlogs[i].slug] = v ?? 0;
            return acc;
        },
        {} as Record<string, number>,
    );

    return (
        <Blogs allPosts={publishedBlogs} views={views} />
    )
}


/* 
TODO
- Add tags

*/

