import styled from "@emotion/styled";

export const StyledItems = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-top: 50px;
`;

export const StyledCard = styled.div`
    width: 100%;
    background-color: rgb(0, 0, 100, 0.1);
    border-radius: 15px;
    padding: 40px 35px;
    box-sizing: border-box;
`;

export const StyledTitle = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #444480;
`;

export const StyledContent = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #555590;
    margin-top: 15px;
`;