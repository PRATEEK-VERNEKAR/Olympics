import React from "react";

const MiniHeader = () => {
  return (
    <>
      <header className="container mx-auto flex flex-wrap px-5 py-4 flex-col justify-evenly items-center mt-1 mb-1.5 body-font bg-gradient-to-r from-blue-400 to-indigo-200 rounded-full ">
        <nav className="flex lg:w flex-wrap items-center text-base ">
          <a
            href="https://olympics.com/en/gangwon-2024/"
            target="_blank"
            rel="noreferrer"
            className="mr-20 text-gray-800 hover:text-green-800 text-2xl"
          >
            Gangwon 2024
          </a>
          <a
            href="https://olympics.com/en/olympic-games/paris-2024"
            target="_blank"
            rel="noreferrer"
            className="mr-20 text-gray-800 hover:text-green-800 text-2xl"
          >
            Paris 2024
          </a>
          <a
            href="https://olympics.com/en/olympic-games/milano-cortina-2026"
            target="_blank"
            rel="noreferrer"
            className="mr-20 text-gray-800 hover:text-green-800 text-2xl"
          >
            MilanoCortina 2026
          </a>
          <a
            href="https://olympics.com/en/olympic-games/los-angeles-2028"
            target="_blank"
            rel="noreferrer"
            className="mr-20 text-gray-800 hover:text-green-800 text-2xl"
          >
            LosAngles 2028
          </a>
          <a
            href="https://olympics.com/en/olympic-games/brisbane-2032"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-green-800 text-2xl"
          >
            Brisbane 2032
          </a>
        </nav>
      </header>
    </>
  );
};

export default MiniHeader;
