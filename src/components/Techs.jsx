import React from "react";
import { TechListItem } from "./TechListItem";

export const Techs = () => {
  return (
    <section className="h-screen bg-[#0a182e] flex flex-col justify-center items-center">
      <div className="w-4/6">
        <h1 className="text-gray-300 text-4xl md:text-7xl text-left font-bold font-Roboto mt-20 bg-[#0a182e] drop-shadow-2xl p-10 rounded-2xl">
          <span className="text-greenLight mr-3">02.</span> Tecnologías
        </h1>
        <div className="bg-[#0a182e] md:drop-shadow-2xl md:p-10 md:rounded-2xl mt-8">
          <p className="mt-8 font-Roboto text-greenLight text-left text-xl">
            A lo largo de la carrera he empleado gran variedad de lenguajes de
            programación y tecnologías. De todas maneras, aquí dejo unos cuantos
            con los cuales trabajo más a menudo:
          </p>
          <div className="flex flex-col items-center mt-10 pb-2">
            <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400 grid grid-cols-2 md:grid-cols-3 gap-x-14  md:gap-12">
              <TechListItem
                tech={"HTML"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png"
                }
              />
              <TechListItem
                tech={"CSS"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
                }
              />
              <TechListItem
                tech={"JavaScript"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                }
              />
              <TechListItem
                tech={"TypeScript"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png"
                }
              />
              <TechListItem
                tech={"Node"}
                url={
                  "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                }
              />
              <TechListItem
                tech={"SASS"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/245px-Sass_Logo_Color.svg.png"
                }
              />
              <TechListItem
                tech={"Tailwind"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                }
              />
              <TechListItem
                tech={"Jest"}
                url={
                  "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
                }
              />
              <TechListItem
                tech={"React"}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                }
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
