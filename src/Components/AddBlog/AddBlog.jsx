import React, { useContext, useState } from "react";
import { PostContext } from "../../context/PostProvider";
import {
    Bottom,
    BottomLeft,
    BottomRight,
    Button,
    Container,
    Form,
    Input,
    TextArea,
    Title,
    Top,
    Wrapper,
} from "./style";

function AddBlog() {
    const { createPost, reload, setReload } = useContext(PostContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPost({
                idposts: Math.floor(Math.random() * 1000),
                title,
                body,
            });
            setReload(!reload);
        } catch (error) {
            if (error) throw error;
        }
    };

    return (
        <Container>
            <Wrapper>
                <Top>
                    <Form onSubmit={handleSubmit}>
                        <Title>Create Post</Title>
                        <Input
                            placeholder="Title..."
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            required
                        />
                        <TextArea
                            placeholder="Enter your text..."
                            value={body}
                            onChange={(e) => {
                                setBody(e.target.value);
                            }}
                            required
                        />
                        <Button type="submit">Send</Button>
                    </Form>
                </Top>
                <Bottom>
                    <BottomLeft>author: jhon Doe</BottomLeft>
                    <BottomRight>lorem ipsun</BottomRight>
                </Bottom>
            </Wrapper>
        </Container>
    );
}

export default AddBlog;
