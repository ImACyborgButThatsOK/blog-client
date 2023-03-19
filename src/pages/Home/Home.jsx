import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBlog from "../../Components/AddBlog/AddBlog";
import Navbar from "../../Components/Navbar/Navbar";
import PostList from "../../Components/PostList/PostList";
import Post from "../Post/Post";

function Home() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <AddBlog />
                    <PostList />
                </>
            ),
        },
        {
            path: "/posts/:userId",
            element: (
                <>
                    <Navbar />
                    <Post />
                </>
            ),
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Home;
