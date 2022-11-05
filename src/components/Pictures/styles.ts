import styled from "@emotion/styled";

export const StyledGrid = styled.div`
    width: 100%;
    margin-top: 70px;
    column-count: 3;
    column-gap: 30px;

    @media (max-width: 1100px) {
        column-count: 2;
    }

    @media (max-width: 900px) {
        column-count: 1;
        margin-top: 50px;
    }
`;

export const StyledPicture = styled.div`
    height: fit-content;
    line-height: 0;
    border-radius: 15px;
    overflow: clip;
    margin-bottom: 30px;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;