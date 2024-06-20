'use client'
import { useState } from "react"
import { Quicksand } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import Modal from 'react-modal'
import { X } from "react-feather"

type ProjectCardProps = {
    logoUrl?: string,
    imageUrl?: string,
    title: string,
    description?: string,
    githubLink?: string,
    productionLink?: string,
    demoLink?: string,
    type?: string[],
    summary?: string
}

const quicksand = Quicksand({ subsets: ['latin'], display: 'swap', variable: '--font-quicksand', })

export default function ProjectCard({ imageUrl, logoUrl, title, description, githubLink, productionLink, demoLink, summary, type }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }
    return (
        <div className={`hover:bg-neutral-900 transition gap-4 flex flex-col p-5 bg-black bg-opacity-50 text-white rounded-2xl ${quicksand.className} `}>
            <div className="flex gap-4 items-center">
                <img className="h-10 rounded-lg" src={logoUrl!} alt={title}></img>
                <h1 className="text-xl font-medium">{title}</h1>
            </div>
            <p className="font-extralight flex-1">
                {description}
            </p>
            <img src={imageUrl!} className=" rounded-lg object-cover h-56 " alt={title}></img>
            <div className="justify-start text-gray-400 h-5 items-center font-semibold flex gap-2 max-w-[600px]">
                <Link target="_blank" className="hover:text-gray-600 hover:font-normal hover:bg-gradient-to-r hover:from-yellow-200 hover:to-purple-200 hover:-translate-y-0.5 hover:scale-95  duration-300 rounded-md px-2" href={productionLink!}>Live</Link>
                {githubLink?.length != 0 ? <Link target="_blank" className="hover:text-gray-600 hover:bg-gradient-to-r hover:font-normal hover:from-lime-200  hover:to-cyan-200 hover:-translate-y-0.5 hover:scale-95  duration-300 rounded-md px-2" href={githubLink!}>Github</Link> : <></>}
                <button className="hover:text-gray-600 hover:bg-gradient-to-r hover:font-normal hover:from-blue-200  hover:to-red-200 hover:-translate-y-0.5 hover:scale-95  duration-300 rounded-md px-2" onClick={openModal}>Summary</button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.80)',
                    },
                    content: {
                        width: '750px',
                        height: '80vh',
                        margin: 'auto',
                        padding: '2rem',
                        overflow: 'auto',
                        backgroundColor: 'lightgray',
                        borderRadius: '12px',
                        border: 'none'
                    },

                }}
            >
                <button className="float-right" onClick={closeModal}><X size={25} color="black" /></button>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <hr className="my-4 border-neutral-400" />
                <p className="text-base font-light text-black">
                    {summary}
                </p>
            </Modal>
        </div >

    )
}