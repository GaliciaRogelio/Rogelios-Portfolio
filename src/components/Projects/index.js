import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../Data";
function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require(`../../assets/gifs/${project.image}.gif`).default}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-900 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <a
                    className="bg-transparent hover:bg-red-900 text-white-700 font-semibold inset-auto hover:text-white py-2 px-4 border border-red-900 hover:border-transparent rounded-full"
                    href={project.github}
                  >
                    GitHub
                  </a>
                  <a
                    className="bg-transparent hover:bg-red-900 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-900 hover:border-transparent rounded-full"
                    href={project.link}
                  >
                    Live page
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
