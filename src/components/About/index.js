import React from "react";
import ProfileImg from "../../assets/portfolio-img.jpg";

function About() {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Rogelio,
            <br className=" lg:inline-block" />Full stack web developer
          </h1>
          <p className="mb-8 leading-relaxed">
          Full stack web developer with a coding certificate from UC Berkeley. Born in Mexico City and raised in San Francisco, CA. Currently based in Chicago, IL.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={ProfileImg}
          />
        </div>
      </div>
    </section>
    )
}

export default About;