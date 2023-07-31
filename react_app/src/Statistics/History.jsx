import React from "react";
import {motion} from "framer-motion"


const Follow = () => {


  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
    style={{color:"red",fontSize:"30px",padding:"20px"}}
>
      <form class="flex flex-col items-center justify-around mx-auto md:flex-row md:items-start md:min-h-[500px] md:min-w-[1000px] py-10 my-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
        <div class="w-1/4">
          <label
            for="year"
            class="block mb-4 text-2xl font-bold tracking-wider text-gray-900 dark:text-white"
          >
            Select Olympic Year
          </label>
          <select
            id="year_multiple"
            required
            class="bg-blue-50 border-2 border-gray-300 text-gray-900 text-lg tracking-wider rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled selected value="">
              Choose an year
            </option>
            <option value="US">Tokyo 2020</option>
            <option value="CA">Bejing 2018</option>
            <option value="FR">India 2010</option>
            <option value="DE">India 2090</option>
          </select>
        </div>

        <div class="w-1/4">
          <label
            for="countries_mulitple"
            class="block mb-4 text-2xl font-bold tracking-wider text-gray-900 dark:text-white"
          >
            Select Country
          </label>
          <select
            id="country"
            required
            class="bg-sky-50 border-2 border-gray-300 text-gray-900 text-lg tracking-wider rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled selected value="">
              Choose a country
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div class="w-1/4">
          <label
            for="sports_multiple"
            class="block mb-4 text-2xl font-bold tracking-wider text-gray-900 dark:text-white"
          >
            Select Sport
          </label>
          <select
            id="sports"
            required
            class="bg-green-50 border-2 border-gray-300 text-gray-900 text-lg tracking-wider rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled selected value="">
              Choose a sport
            </option>
            <option value="US">Football</option>
            <option value="CA">Badminton</option>
            <option value="FR">Hockey</option>
            <option value="DE">Swimming</option>
          </select>
        </div>

        <div class="flex items-end h-[100px]">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Follow;
