import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    &.margin {
        margin-top: 75px;
    }

    @media (max-width: 900px) {
        width: 90%;

        &.margin {
            margin-top: 40px;
        }
    }
`;