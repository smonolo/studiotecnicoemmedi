import { ReactNode } from "react";

import { StyledButton } from "./styles";

export default function Button({ children }: { children: ReactNode }) {
    return (
        <StyledButton>{children}</StyledButton>
    );
}