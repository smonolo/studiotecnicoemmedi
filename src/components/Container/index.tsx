import { StyledContainer } from "./styles";
import { ContainerProps } from "./types";

export default function Container({ children, margin }: ContainerProps) {
    return (
        <StyledContainer className={margin ? 'margin' : ''}>{children}</StyledContainer>
    );
}