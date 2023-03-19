/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;
export const Info = styled.div`
    width: 70%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #001219;
    border-radius: 20px;
`;
export const ConfigContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
`;
export const Edit = styled.button`
    background-color: white;
    padding: 5px 10px;
    border: 1px solid #001219;
    font-weight: 300;
    border-radius: 5px;
    transition: all ease 0.3s;
    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
        font-weight: bold;
    }
`;
export const Delete = styled.button`
    background-color: white;
    padding: 5px 10px;
    border: 1px solid #001219;
    font-weight: 300;
    border-radius: 5px;
    transition: all ease 0.3s;
    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
        font-weight: bold;
    }
`;

export const TitleCOntainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Title = styled.h1`
    font-size: 55px;
    font-weight: bolder;
    color: #001219;
`;
export const Text = styled.p`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 50px;
`;
export const More = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: silver;
    font-weight: bold;
`;
export const Author = styled.span`
    transition: all ease 0.3s;
    &:hover {
        cursor: pointer;
        font-weight: bolder;
        color: black;
    }
`;
export const Date = styled.span`
    transition: all ease 0.3s;
    &:hover {
        cursor: pointer;
        font-weight: bolder;
        color: black;
    }
`;
