"use client"
import Project from "./ProjectCard"
import projects from './projects.json'
export default function Projects() {
    return (
        <div>
            <h1 className="h-20 bg-black z-10 bg-opacity-90 sticky top-0 mt-6 justify-center items-center flex font-bold text-3xl px-10">PROJECTS</h1>
            <section className="mx-auto p-10 space-y-10 ">
                {projects.map(({ imageUrl, productionLink, title, description, link }, idx) => (
                    <Project
                        key={idx}
                        imageUrl={imageUrl}
                        productionLink={productionLink}
                        title={title}
                        description={description}
                        link={link}
                    />
                ))}

            </section>
        </div>
    )
}