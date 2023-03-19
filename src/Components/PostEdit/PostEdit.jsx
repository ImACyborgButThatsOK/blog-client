/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../context/PostProvider";
import { Button, Container, Form, Input, Label } from "./style";

function PostEdit({ post, setActiveEdit, activeEdit }) {
    const { updatePost } = useContext(PostContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updatePost({ title, body }, post.idposts);
            setActiveEdit(!activeEdit);
            navigate(`/posts/${post.idposts}`);
        } catch (error) {
            if (error) throw error;
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label>Title</Label>
                <Input
                    placeholder="Edit your title..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <Label>Body</Label>

                <Input
                    placeholder="Edit your text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
                <Button>Send</Button>
            </Form>
        </Container>
    );
}

export default PostEdit;
