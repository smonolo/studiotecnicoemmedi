import styled from "@emotion/styled";

export const StyledTitle = styled.div`
    font-size: 35px;
    font-weight: 600;
    color: #fff;
    width: 100%;
    text-align: justify;
    background-color: #225399;
    padding: 100px;
    box-sizing: border-box;
    border-radius: 20px;

    & > span {
        color: #aaa;
    }

    @media (max-width: 900px) {
        font-size: 22px;
        padding: 40px;
    }
`;

export const StyledButtons = styled.div`
    width: fit-content;
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    gap: 25px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;