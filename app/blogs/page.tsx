import blogs from './blogs.json'
import Blog from "./BlogCard"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Aman Agarwal',
};
export default function Blogs() {
    return (
        <div >
            <section className="container mx-auto p-8 justify-center items-center flex flex-col gap-4 text-white">
                {
                    blogs.map((blog, idx) => (
                        <Blog key={idx} title={blog.title} link={blog.link} />
                    ))
                }
            </section>
        </div>
    )
}


/* 
TODO
- Add tags

*/

