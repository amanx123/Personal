"use client"
import Project from "./ProjectCard"
import projects from './projects.json'
export default function Projects() {
    return (
        <div className="text-white">
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