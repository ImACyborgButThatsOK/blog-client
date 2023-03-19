/* eslint-disable import/no-extraneous-dependencies */
import { AiFillFileAdd, AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import {
    Avatar,
    AvatarContainer,
    Center,
    Container,
    IconsContainer,
    Left,
    Logo,
    Right,
    Search,
    SearchContainer,
} from "./style";

function Navbar() {
    return (
        <Container>
            <Left>
                <Logo>Reflection</Logo>
            </Left>
            <Center>
                <SearchContainer>
                    <Search placeholder="search..." />
                </SearchContainer>
            </Center>
            <Right>
                <AvatarContainer>
                    <IconsContainer>
                        <AiOutlineHome className="icon" />
                        <AiFillFileAdd className="icon" />
                        <FcAbout className="icon" />
                    </IconsContainer>
                    <Avatar src="https://images.pexels.com/photos/15521519/pexels-photo-15521519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </AvatarContainer>
            </Right>
        </Container>
    );
}

export default Navbar;
