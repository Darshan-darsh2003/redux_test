import React, { useEffect } from "react";
import { User } from "../models/User";
import { useFetchData } from "../modules/hook/fetchHook";

const Users = () => {
  const { fetchDataHook, data, loading, error, resetState } = useFetchData();

  useEffect(() => {
    fetchDataHook({ endpoint: "users" });

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
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                phone
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user: User) => <UserCard key={user.id} user={user} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.id}
      </th>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.username}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phone}</td>
    </tr>
  );
};

export default Users;
