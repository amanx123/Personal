import blogs from './blogs.json'
import Blog from "./BlogCard"

export default function Blogs() {
    return (
        <div >
            <h1 className="h-12 mt-10 justify-center items-center flex font-bold text-3xl px-10">BLOGS</h1>
            <section className="container mx-auto p-8 justify-center items-center flex flex-col gap-4">
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

