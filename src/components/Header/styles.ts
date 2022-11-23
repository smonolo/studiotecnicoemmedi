import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
`;

export const StyledHeader = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 30px 0;
    box-sizing: border-box;

    @media (max-width: 900px) {
        width: 90%;
    }
`;

export const StyledFlex = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const StyledLogo = styled.img`
    width: 35px;
    display: block;
    line-height: 0;
    cursor: pointer;
`;

export const StyledItems = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const StyledItem = styled.div`
    font-size: 14px;
    font-weight: 800;
    color: #151515;
    cursor: pointer;
    padding: 7px 10px;
    box-sizing: border-box;
    text-transform: uppercase;
    transition: color .3s;
    letter-spacing: 0.75px;

    &:hover, &.active {
        color: #225399;
    }
`;

export const StyledButton = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    background-color: #225399;
    padding: 7px 18px;
    border-radius: 25px;
    box-sizing: border-box;
    border: 1px solid #225399;
    transition: background-color .3s;

    &:hover {
        background-color: #151515;
    }
`;