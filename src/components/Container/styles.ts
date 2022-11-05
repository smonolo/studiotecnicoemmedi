import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    &.margin {
        margin-top: 50px;
    }

    @media (max-width: 900px) {
        width: 90%;

        &.margin {
            margin-top: 30px;
        }
    }
`;