import styled from "@emotion/styled";

export const StyledTitle = styled.div`
    font-size: 35px;
    font-weight: 700;
    color: #444450;
    width: 100%;
    text-align: justify;

    & > span {
        color: #225399;
    }

    @media (max-width: 900px) {
        font-size: 25px;
    }
`;

export const StyledButtons = styled.div`
    width: fit-content;
    margin: 70px auto 0 auto;
    display: flex;
    align-items: center;
    gap: 25px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;