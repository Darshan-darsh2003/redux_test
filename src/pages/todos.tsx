import React, { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { useFetchData } from "../modules/hook/fetchHook";

const Todos = () => {
  const { fetchDataHook, data, loading, error, resetState } = useFetchData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchDataHook({ endpoint: "todos" });

    // Add event listeners for page navigation events
    window.addEventListener("beforeunload", resetState);
    // window.addEventListener("unload", stopAPICalls);

    return () => {
      // Clear the interval and remove event listeners when the component unmounts
      window.removeEventListener("beforeunload", resetState);
    };
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageItems = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle previous page button click
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Handle next page button click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-6 mx-[20rem] ">Todos</h1>
        <div className="mx-[20rem]  bg-white shadow-lg rounded-lg overflow-hidden mt-5">
          <ul className="divide-y divide-gray-200 px-4">
            {currentPageItems &&
              currentPageItems.map((todo: Todo) => (
                <TodoCard key={todo.id} todo={todo} />
              ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-4 w-screen px-[20rem]">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`rounded-2xl px-4 py-2 text-black bg-white  ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-slate-300 font-bold "
          }`}
        >
          Previous
        </button>
        <div>
          page : {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={` rounded-2xl px-4 py-2 text-black bg-white  ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-slate-300 font-bold"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <li className="py-4">
      <div className="flex items-center">
        <input
          id="todo1"
          name="todo1"
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label className="ml-3 block text-gray-900 w-full px-8">
          <span className="flex justify-between w-full gap-8">
            <span className="text-lg font-medium">{todo.title}</span>
            <span
              className={`text-sm font-light ${
                todo.completed ? "text-red-500" : "text-green-500"
              }`}
            >
              {todo.completed ? "Inactive" : "Active"}
            </span>
          </span>
        </label>
      </div>
    </li>
  );
};

export default Todos;
