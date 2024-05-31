import React, { useEffect } from "react";
import { useFetchData } from "../modules/hook/fetchHook";
import { Comment } from "../models/Comment";

const Comments = () => {
  const { fetchDataHook, data, loading, error, resetState } = useFetchData();

  useEffect(() => {
    fetchDataHook({ endpoint: "comments" });

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

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-6">Comments</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((comment: Comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
        </div>
      </div>
    </div>
  );
};

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {comment.name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {comment.body}
        </p>
      </div>
      <div className="p-6">
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
          {comment.email}
        </p>
      </div>
    </div>
  );
};

export default Comments;
