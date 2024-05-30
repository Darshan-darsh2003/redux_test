import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="w-full lg:flex lg:gap-x-12 justify-center">
            <Link
              to="/"
              //   onClick={() => {
              //     navigate("/");
              //   }}
              className="text-sm font-semibold leading-6 text-white"
            >
              Todos
            </Link>
            <Link
              //   onClick={() => {
              //     navigate("/users");
              //   }}
              to="/users"
              className="text-sm font-semibold leading-6 text-white"
            >
              Users
            </Link>
            <Link
              //   onClick={() => {
              //     navigate("/posts");
              //   }}
              to="/posts"
              className="text-sm font-semibold leading-6 text-white"
            >
              Posts
            </Link>
            <Link
              //   onClick={() => {
              //     navigate("/comments");
              //   }}
              to="/comments"
              className="text-sm font-semibold leading-6 text-white"
            >
              Comments
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
