import React, { useEffect } from "react";
import { useFetchData } from "../modules/hook/fetchHook";
import { Post } from "../models/Post";

const Posts: React.FC = () => {
  const { fetchDataHook, data, loading, error, resetState } = useFetchData();

  useEffect(() => {
    fetchDataHook({ endpoint: "posts" });

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
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((post: Post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {post.body}
      </p>
    </div>
  );
};

export default Posts;
