/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    box-shadow: 14px -4px 48px 12px rgba(0, 0, 0, 0.1),
        0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    overflow-y: scroll;
    .link {
        text-decoration: none;
        color: black;
    }
`;
export const PrevPostCard = styled.div`
    width: 500px;
    height: 220px;
    padding: 15px;
    border-radius: 20px;
    border: 1px solid #20262e;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 14px -4px 48px 12px rgba(0, 0, 0, 0.1),
            0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
`;
export const Title = styled.h1`
    font-weight: 300;
    font-size: 50px;
    overflow: hidden;
`;
export const TextPrev = styled.p`
    font-size: 18px;
`;
