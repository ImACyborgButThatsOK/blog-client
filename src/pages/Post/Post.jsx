/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostEdit from "../../Components/PostEdit/PostEdit";
import { PostContext } from "../../context/PostProvider";
import {
    Author,
    ConfigContainer,
    Container,
    Date,
    Delete,
    Edit,
    Info,
    More,
    Text,
    Title,
    TitleCOntainer,
} from "./style";

function Post() {
    const { deletePost, setReload, reload } = useContext(PostContext);
    const [posts, setPosts] = useState([]);
    const [activeEdit, setActiveEdit] = useState(false);
    const { userId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/api/post/${userId}`,
            );
            setPosts(data);
        };
        getPost();
    }, [activeEdit]);

    const handleClickDelete = async (id) => {
        try {
            await deletePost(id);
            setReload(!reload);
            navigate("/");
        } catch (error) {
            if (error) throw error;
        }
    };

    return (
        <Container>
            {posts.map((data) =>
                activeEdit ? (
                    <PostEdit
                        key={data.idposts}
                        post={data}
                        setActiveEdit={setActiveEdit}
                        activeEdit={activeEdit}
                    />
                ) : (
                    <Info key={data.idposts}>
                        <ConfigContainer>
                            <Edit onClick={() => setActiveEdit(!activeEdit)}>
                                Editar
                            </Edit>
                            <Delete
                                onClick={() => {
                                    handleClickDelete(data.idposts);
                                }}
                            >
                                Deletar
                            </Delete>
                        </ConfigContainer>
                        <TitleCOntainer>
                            <Title>{data.title}</Title>
                        </TitleCOntainer>

                        <Text>{data.body}a</Text>

                        <More>
                            <Date>H:22:50 </Date>
                            <Author> Author: lorem ipsun</Author>
                        </More>
                    </Info>
                ),
            )}
        </Container>
    );
}

export default Post;
