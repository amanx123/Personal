
import Link from "next/link"
import { motion } from "framer-motion"

type ProjectCardProps = {
    imageUrl: string,
    title: string,
    description: string,
    link: string
    productionLink?: string
}


export default function ProjectCard({ imageUrl, title, description, link, productionLink = '' }: ProjectCardProps) {
    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="container border md:flex gap-6 border-lime-100 rounded-xl mx-auto p-4">
                <img className="sm:h-1/2 sm:w-full md:h-auto md:w-1/2 rounded-lg object-cover opacity-80 shadow-md" src={imageUrl} alt='image' ></img>
                <div className="relative text-center space-y-4 w-full">
                    <h1 className="text-xl font-semibold mt-4">
                        {title}
                    </h1>
                    <h2 className="pb-12 font-mono text-md tracking-tight font-normal">
                        {description}
                    </h2>
                    <div className="space-x-12 w-full absolute bottom-0">
                        <Link className="bg-lime-700 hover:bg-lime-800 transition w-full rounded-lg p-2 px-4" href={link}>Github</Link>
                        <Link className="bg-lime-700 hover:bg-lime-800 transition w-full rounded-lg p-2 px-4" href={productionLink}>Production</Link>
                    </div>

                </div>
            </div>
        </motion.div>

    )
}