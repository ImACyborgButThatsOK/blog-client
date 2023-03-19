/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
    color: white;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 999;
`;

export const Left = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
`;
export const Logo = styled.h1`
    margin-left: 40px;
    font-weight: 300;
`;

export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const SearchContainer = styled.div`
    background-color: white;
    width: 50%;
    height: 60%;
    border-radius: 20px;
    overflow: hidden;
`;
export const Search = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 10px;
    font-size: 18px;
    outline: none;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .icon {
        font-size: 30px;
        cursor: pointer;
        transition: all ease 0.3s;

        &:hover {
            filter: brightness(0.5);
        }
    }
`;
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
export const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 50px;
    cursor: pointer;
`;
