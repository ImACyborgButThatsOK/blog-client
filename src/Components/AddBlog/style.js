/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Wrapper = styled.div`
    width: 60%;
    height: 70%;
    background-color: #2c3333;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    box-shadow: 14px -4px 48px 12px rgba(0, 0, 0, 0.1),
        0px 17px 67px -3px rgba(0, 0, 0, 0.1);
`;
export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const Form = styled.form`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;
export const Title = styled.h1`
    font-weight: 300;
    font-size: 50px;
`;
export const Input = styled.input`
    width: 100%;
    padding: 20px;
    padding-left: 10px;
    font-size: 18px;
    border: 1px solid silver;
    outline: none;
    border-radius: 20px;
`;
export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 40px;
    border: 1px solid silver;
    outline: none;
    border-radius: 20px;
    font-size: 18px;
`;
export const Button = styled.button`
    width: 50%;
    padding: 20px 10px;
    border-radius: 20px;
    border: 2px solid salmon;
    background-color: transparent;
    font-size: 18px;
    font-weight: 300;
    transition: all ease 0.3s;
    color: salmon;
    &:hover {
        cursor: pointer;
        filter: brightness(0.7);
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    color: #e9f8f9;
`;
export const BottomLeft = styled.span``;
export const BottomRight = styled.span``;
