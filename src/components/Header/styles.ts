import styled from "@emotion/styled";

export const StyledHeader = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 25px 0;
    box-sizing: border-box;
`;

export const StyledLogo = styled.img`
    width: 150px;
    display: block;
    line-height: 0;
    cursor: pointer;
`;

export const StyledItems = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const StyledItem = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #444450;
    cursor: pointer;
    padding: 7px 14px;
    box-sizing: border-box;
    border-radius: 10px;
    transition: background-color .3s;

    &:hover, &.active {
        background-color: rgba(0, 0, 100, 0.1);
    }
`;