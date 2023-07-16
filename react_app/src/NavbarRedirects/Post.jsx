import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8000/protected", {
          headers: {
            Authorization: token,
          },
        });
        console.log(res);
        console.log("ata pa");
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    }
    fetchData();
  }, []);

  // maintaining the line height of the textarea
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
  );
};

export default Post;
