import styled from "@emotion/styled";

export const StyledFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top: 70px;

    @media (max-width: 1200px) {
        flex-direction: column;
        margin-top: 50px;
    }
`;

export const StyledMap = styled.iframe`
    width: 700px;
    height: 450px;
    border: none;
    border-radius: 15px;
    max-width: 90%;
`;

export const StyledText = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 22px;
    font-weight: 600;
    color: #444450;
    cursor: pointer;
    
    &:not(:first-child) {
        margin-top: 15px;
    }

    @media (max-width: 900px) {
        font-size: 18px;
    }
`;