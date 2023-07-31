import React from "react";
import '../App.css';
import olylogo from "../img/logo2.png";

const Footer = () => {
  return (
    <>
      <footer class="bg-gradient-to-r from-blue-200 to-green-200 dark:bg-gray-900 mt-3 footer">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-8 lg:px-4">
          <div class="flex flex-col items-start space-y-4 md:flex-row md:space-between justify-between mb-14 ">
            <div class="lg:w-1/5">
              <img src={olylogo} alt="" class="w-full"></img>
            </div>

            <div>
              <p class="font-medium text-xl text-gray-900 dark:text-white">
                Olympic Games
              </p>

            </div>

            <div>
              <p class="font-medium text-xl text-gray-900 dark:text-white">
                Olympic Channel
              </p>

              <ul class="mt-5 space-y-4 text-base">
                <li>
                  <a
                    href="https://youtu.be/lrYFimZ_1aA"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Video Link
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Live Events
                  </a>
                </li> */}

                {/* <li>
                  <a
                    href="#"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Original Series
                  </a>
                </li> */}

                {/* <li>
                  <a
                    href="#"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Corporate
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <p class="font-medium text-xl text-gray-900 dark:text-white">
                Stats
              </p>

              <ul class="mt-5 space-y-4 text-base">
                <li>
                  <a
                    href="/stats"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Stats
                  </a>
                </li>

                <li>
                  <a
                    href="/sports"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Sports
                  </a>
                </li>

                <li>
                  <a
                    href="/country"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Country
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-xl text-gray-900 dark:text-white">
                Account
              </p>

              <ul class="mt-5 space-y-4 text-base">
                <li>
                  <a
                    href="/signertype"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Sign Up
                  </a>
                </li>

                <li>
                  <a
                    href="/login"
                    class=" text-gray-600 transition hover:text-gray-900 hover:underline dark:text-gray-200"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr class="border-t-2 border-gray-900" />

          {/* Add logos here */}
        </div>

        <p class="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2023. Om Namah Shivay. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
