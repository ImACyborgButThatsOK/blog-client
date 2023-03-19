import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/PostProvider";
import {
    Container,
    Info,
    PrevPostCard,
    TextPrev,
    Title,
    Wrapper,
} from "./style";

function PostList() {
    const { post, loading, error } = useContext(PostContext);

    const getPostPreview = (body) => {
        const arr = body.split(" ").filter((_v, index) => {
            return index < 30;
        });
        return `${arr.join(" ")}...`;
    };
    return (
        <Container>
            <Wrapper>
                {loading ? (
                    <h1>LOADING... {error && <p>{error}</p>}</h1>
                ) : (
                    post.map((data) => (
                        <Link
                            to={`/posts/${data.idposts}`}
                            className="link"
                            key={data.idposts}
                        >
                            <PrevPostCard>
                                <Info>
                                    <Title>{data.title} </Title>
                                    <TextPrev>
                                        {getPostPreview(data.body)}
                                    </TextPrev>
                                </Info>
                            </PrevPostCard>
                        </Link>
                    ))
                )}
            </Wrapper>
        </Container>
    );
}

export default PostList;
