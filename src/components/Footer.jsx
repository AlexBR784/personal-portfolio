import React from "react";

export const Footer = () => {
  return (
    <footer className="h-[20vh] w-full p-4 flex flex-col items-center justify-center md:p-6 bg-gray-800">
      <h2 className="text-3xl font-Roboto text-white">
        Puedes ver más en mis otras redes
      </h2>
      <div className="flex flex-row items-center justify-center mt-4">
        <div className="flex flex-col items-center mr-10">
          <img
            width="60"
            height="60"
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            className="filter grayscale hover:filter-none cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center mr-10">
          <img
            width="60"
            height="60"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            className="filter grayscale hover:filter-none cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center mr-10">
          <img
            width="60"
            height="60"
            src="https://seeklogo.com/images/F/frontend-mentor-logo-DD85EFE0E9-seeklogo.com.png"
            className="filter grayscale hover:filter-none cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};
