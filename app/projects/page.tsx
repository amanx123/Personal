"use client"
import Project from "./ProjectCard"
export default function Projects() {
    return (
        <div>
            <h1 className="h-12 mt-10 justify-center items-center flex font-bold text-3xl px-10">PROJECTS</h1>
            <section className="mx-auto p-10 space-y-10 ">

                <Project
                    imageUrl=""
                    productionLink='https://google.com'
                    title="First Project"
                    description='Best Project on the planet ever made fabfiua ajbfiua heg agew
                     aerwhiuhioefa  aewkjbfeuwiaf aeawkjb ibaweuhfaiu hefwabilu eabiueg awebjkr 
                      karguiaeb eiu UEFBA IUF BAUDB LI ag luiahb arbgiula re 
                       aebliugb alg au luieghb jaewbgui aewguihu ieauhgu augh uaihgjkae 
                        kagabgu iu iuah auwliug gweag liuh uaweuig a uguu ia AHIUFHEWbiu abfiugajbiua afguaifbjkeB EAFUOYAESU
                        FAKBFUYAEFHJBA AFBIUAFEJBL FABFOIUEWA'
                    link="https://google.com"
                />


                <Project
                    imageUrl=""
                    productionLink='https://google.com'
                    title="First Project"
                    description='Best Project on the planet ever made'
                    link="https://google.com"
                />


                <Project
                    imageUrl=""
                    productionLink='https://google.com'
                    title="First Project"
                    description='Best Project on the planet ever made'
                    link="https://google.com"
                />


                <Project
                    imageUrl=""
                    productionLink='https://google.com'
                    title="First Project"
                    description='Best Project on the planet ever made'
                    link="https://google.com"
                />

            </section>
        </div>
    )
}