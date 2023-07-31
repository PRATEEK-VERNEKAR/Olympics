import React from 'react'
import {motion} from 'framer-motion';

const Testing = () => {
    const styles = {
        lineHeight: "2",
      };
    
      /**
       * Adding the support for clear button
       */
    
      const onClear = () => {
        // Clear the text area content
        const myTextArea = document.getElementById("myTextArea");
        myTextArea.value = "";
      };


  return (
    <motion.div
        intial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          delay:0.2,
          duration:0.45,
        }}
        variants={{
          initialState:{
            opacity:0,
            y:25,
            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
            // clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          },
          animateState:{
            opacity:1,
            y:0,
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)"
          },
          exitState:{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"            
          }
        }}
        style={{color:"red",fontSize:"30px",padding:"20px"}}
    >
    <form>
      <div class="max-w-[1400px] mx-auto my-6 border-1 pt-4 pb-3 border-yellow-100 rounded-lg bg-gradient-to-r from-blue-100 to-green-100 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-6 py-2 rounded-xl mb-2">
          <div class="text-2xl font-bold tracking-wider text-center text-gray-900 mb-3">
            Your new post
          </div>
          <div class="flex justify-center">
            <label for="myTextArea" class="sr-only">
              Text Area
            </label>
            <textarea
              id="myTextArea"
              rows="10"
              style={styles}
              class="w-4/5 p-4 text-lg rounded-lg text-gray-900 tracking-wider bg-white border-0"
              placeholder="Write a post..."
              required
            ></textarea>
          </div>
        </div>

        <div class="flex items-center justify-around px-2 py-3 border-t dark:border-gray-600">
          <button
            type="button"
            id="clearButton"
            class="py-2.5 px-6 text-md font-bold text-center text-white tracking-wider bg-red-500 rounded-lg hover:bg-red-600 "
            onClick={onClear}
          >
            Clear
          </button>
          <button
            type="submit"
            id="submitButton"
            class="py-2.5 px-4 text-md font-bold text-center text-white tracking-wider bg-primary-500 rounded-lg hover:bg-green-500"
          >
            Publish post
          </button>
        </div>

        <p class="ml-6 mt-3 text-sm text-gray-500 dark:text-gray-400 ">
          Remember, posts should follow our{" "}
          <a
            href="#"
            class="text-primary-600 dark:text-primary-500 hover:underline hover:text-indigo-900"
          >
            Community Guidelines
          </a>
        </p>
      </div>{" "}
    </form>    
    </motion.div>
  )
}

export default Testing