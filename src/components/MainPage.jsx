import React from "react";

export const MainPage = () => {
  return (
    <div className="h-[100vh] flex flex-col md:flex-row">
      <section className="h-4/6 md:h-screen md:w-2/3 md:items-center bg-blueDark flex justify-center p-20 pt-20 pb-0">
        <div className="flex flex-col bg-[#0a182e] md:drop-shadow-2xl md:p-10 md:rounded-2xl">
          <p className="text-greyLight font-Roboto text-left text-base mb-2 tracking-wider">
            Bienvenido
          </p>
          <h1 className="text-greenLight text-5xl md:text-7xl text-left font-bold font-Roboto">
            Desarrollador Web.
          </h1>
          <p className="text-left text-base text-white mt-8 font-Roboto md:text-2xl">
            Soy un ingeniero Multimedia con interés en el desarrollo web.
          </p>
          <button
            type="button"
            className="mt-8 text-white bg-gradient-to-r bg-greenLight hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-greyLight font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Descargar CV
          </button>

          <p className="mt-8 self-center text-left text-gray-600 font-Caveat text-2xl">
            ¡Interesado en aprender nuevas tecnologías y mejorar las ya
            exploradas!
          </p>
        </div>
      </section>
      <section className="h-2/6 md:h-screen md:w-1/3 bg-greenLight flex justify-center items-center">
        <div className="p-1 flex flex-row md:flex-col items-center ">
          <img
            className="w-52 h-44 rounded-2xl drop-shadow-2xl bg-[#3c968b] mr-10 md:self-center md:mr-0"
            src="https://res.cloudinary.com/diynu0wll/image/upload/v1668696500/personal/snpwm669tbnp7urg8ecm.png"
            alt="Avatar"
          />

          <div>
            <p className="font-Caveat font-bold text-xl w-full md:mt-10 text-gray-300">
              Alejandro Bernardo Rupérez.
            </p>
            <p className="font-Caveat font-bold text-xl w-full text-gray-300">
              Ingeniero Multimedia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
