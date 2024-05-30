import React from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./pages/todos";
import Comments from "./pages/comments";
import Posts from "./pages/posts";
import Users from "./pages/users";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <div className="bg-black w-full h-screen">
          <Header />
          <main className="w-full h-full flex items-center justify-center text-white">
            <Routes>
              {/* <Route path="/" element={<Todos />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<h1>No page found</h1>} /> */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Todos />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<h1>No page found</h1>} />
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
