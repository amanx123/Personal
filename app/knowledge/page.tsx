
import { Metadata } from 'next';
import AllKnowledge from './allKnowledge';
import { getAllBlogs } from './fetchcontent';

export const metadata: Metadata = {
    title: 'Knowledge | Aman Agarwal',
};
export async function KnowledgePage() {
    const allBlogs = await getAllBlogs()
    const publishedBlogs = allBlogs.filter((blog) => blog.frontmatter.isDraft === 'false')

    return (
        <div className="text-white mt-16 ml-5">
            <AllKnowledge allBlogs={publishedBlogs} />
        </div>
    )
}

export default KnowledgePage