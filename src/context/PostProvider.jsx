/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:5000/api/post",
                );
                setPost(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };
        getPosts();
    }, [reload]);

    const createPost = async (data) => {
        try {
            await axios.post("http://localhost:5000/api/post", data);

            // setPost([data, ...post]);
        } catch (err) {
            setError(err.message);
        }
    };

    const updatePost = async (data, id) => {
        try {
            await axios.put(`http://localhost:5000/api/post/${id}`, data);

            // setPost([data, ...post]);
        } catch (err) {
            setError(err.message);
        }
    };

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:5000/api/post/${id}`);
    };

    return (
        <PostContext.Provider
            value={{
                post,
                createPost,
                updatePost,
                deletePost,
                setReload,
                reload,
                loading,
                error,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}
