import React from "react";
import Slide from "react-reveal/Slide";

export const About = () => {
  return (
    <section className="h-screen bg-[#0a182e] flex flex-col justify-center items-center">
      <Slide bottom>
        <div className="w-4/6">
          <div className="text-gray-300 text-4xl flex flex-col md:block items-center md:text-7xl text-left font-bold font-Roboto bg-[#0a182e] drop-shadow-2xl p-10 rounded-2xl">
            <span className="text-greenLight mr-3">01.</span> Sobre mi
          </div>
          <div className="bg-[#0a182e] md:drop-shadow-2xl md:p-10 md:rounded-2xl mt-8">
            <p className=" font-Roboto text-greenLight text-left text-xl ">
              Mi nombre es Alejandro Bernardo Rupérez y recientemente terminé la
              carrera de Ingeniería Multimedia en la Universitad de Valencia, en
              la ETSE.
            </p>
            <p className="mt-8 font-Roboto text-greenLight text-left text-xl ">
              Mi interés sobre el desarrollo web comenzó más o menos en mi
              segundo año en la carrera, aunque desde joven siempre me ha
              interesado la creación de interfaces, incluso por aquella epoca
              creé algún sitio web sencillo.
            </p>
          </div>
        </div>
      </Slide>
    </section>
  );
};
