import styled from "@emotion/styled";

export const StyledButton = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #225399;
    padding: 12px 25px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    transition: background-color .3s, color .3s;

    &.white {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 25px;
        padding: 8px 17px;

        &:hover {
            background-color: #fff;
            color: #225399;
        }
    }

    &:hover {
        background-color: #163765;
    }
`;