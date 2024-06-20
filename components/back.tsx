"use client"
import Link from "next/link";

export function Back() {
    return (
        <button
            className="peer inline-flex group items-center gap-2 text-lg font-medium transition-colors hover:text-neutral-600 text-neutral-500 focus:outline-none dark:text-gray-50 dark:hover:text-gray-300"
            onClick={() => window.history.back()}
        >
            <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 duration-200 " />
            Back
        </button>
    )
}

function ArrowLeftIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    )
}