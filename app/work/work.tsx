'use client'
import { useState } from 'react'
import Project from "./ProjectCard"
import { projects } from './projects'

type ProjectType = 'all' | 'open-source' | 'mobile' | 'random' | 'tools' | 'ai'

export default function Work() {
    const [filter, setFilter] = useState<ProjectType>('all')
    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true
        return project.type.includes(filter)
    })
    return (
        <div className="mt-16 mx-auto mb-16">
            <h2 className={`text-5xl font-bold text-white pl-6 pr-32 mt-16 `}>Things I have made trying to put my dent in the universe.</h2>
            {/* tags for projects */}
            <div className="text-neutral-500 mt-6 pl-8 w-full">
                <ul className='flex flex-row gap-6'>
                    <li className={`hover:underline transition duration-200 cursor-pointer ${filter === 'all' ? 'underline text-neutral-400 -translate-y-0.5 transform duration-200' : ''}`}
                        onClick={() => setFilter('all')}>All</li>
                    <li className={`hover:underline transition duration-200 cursor-pointer ${filter === 'open-source' ? 'underline text-neutral-400 -translate-y-0.5 transform duration-200' : ''}`}
                        onClick={() => setFilter('open-source')}>Open Source</li>
                    <li className={`hover:underline transition duration-200 cursor-pointer ${filter === 'mobile' ? 'underline text-neutral-400 -translate-y-0.5 transform duration-200' : ''}`}
                        onClick={() => setFilter('mobile')}>Mobile</li>
                    <li className={`hover:underline transition duration-200 cursor-pointer ${filter === 'tools' ? 'underline text-neutral-400 -translate-y-0.5 transform duration-200' : ''}`}
                        onClick={() => setFilter('tools')}>Tools</li>
                    <li className={`hover:underline transition duration-200 cursor-pointer ${filter === 'ai' ? 'underline text-neutral-400 -translate-y-0.5 transform duration-200' : ''}`}
                        onClick={() => setFilter('ai')}>Ai</li>
                    <li className={`hover:underline transition duration-200 cursor-pointer ${filter === 'random' ? 'underline text-neutral-400 -translate-y-0.5 transform duration-200' : ''}`}
                        onClick={() => setFilter('random')}>Random</li>
                </ul>
            </div>
            <main className={`gap-6 grid grid-cols-2 p-6 mt-2`}>
                {filteredProjects.map(({ imageUrl, logoUrl, type, demoLink, productionLink, title, description, githubLink = '', summary }: any, idx: any) => (
                    <Project
                        key={idx}
                        type={type}
                        logoUrl={logoUrl}
                        imageUrl={imageUrl}
                        productionLink={productionLink}
                        title={title}
                        description={description}
                        githubLink={githubLink}
                        demoLink={demoLink}
                        summary={summary}
                    />
                ))}
            </main>
        </div>
    )
}
